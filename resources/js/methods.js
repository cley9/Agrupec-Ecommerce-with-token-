// export default function validateUser(){  // es para exportar por defecto si el envolvimiento del {}
export function validateUser() {/// es necesario envolver a la hora de usarlo en vue dentro del {}
  const userObj = JSON.parse(localStorage.getItem("userObj"));
  if (userObj) {
    // console.log("esta lleno");
  } else {
    // console.log("esta vacio");
  }
  return userObj;
}

export async function filterProduct(nameProduct) {
  //  console.log('----', nameProduct);
  const url = "/searchListCategory?search=" + nameProduct + "";
  let responselistCategory = await fetch(url); // espera la promesa
  let listCategory = await responselistCategory.json();
  // console.log("cate",listCategory);
  listCatProduct.innerHTML = ``;
  listCategory.forEach((element) => {
    listCatProduct.innerHTML +=
      `<div class="productoFilterBox shadowFilterPage">
    <a href="/View-page/${element.id}">
        <img src="/storage/img/Productos/${element.imagen}" class="imgfilterPage" alt="">
    </a>
    <h5 class="titleFilterPageBody">${element.nombre}</h5>
    <div class="precioFilterPageBody">
        <span class="txtBoxPreBefore textPrecioProBefore textPrecioSize"><del>S/ ${element.precio}</del></span>
        <span class="textPrecioProAfter textPrecioSize">S/ ${element.newPrecio}</span>
    </div>
    <small class="cantidadfilterPageBody">${element.cantidad} disponibles</small>
    <hr class="hrProductoPageBody">
    <div class="text-center">
        <a href="/View-page/${element.id}" class="btn btn--view-page btn-sm btnEfectClick btnViewPro">Ver</a>
    </div>
</div>`;
  });
}

export function previewProductCartModal(previewData) {
  // console.log('json --',previewData);
  previewProductCart.innerHTML = "";
  previewData.forEach(element => {
    previewProductCart.innerHTML +=
      '<div class="container-flud mb-3 " id="mark__">' +
      '<div class="shadow rounded-2 bg-warning_ p-2 modal-preview-cart-box">' +
      '<div class="row">' +
      '<div class="col-4 col-md-5 me-2">' +
      '<a href="/View-page/' + element.id + '">' +
      '<img src="/storage/img/Productos/' + element.imagen + '"  class="card-img-top " width="90px" height="70px" />' +
      '</a>' +
      '</div>' +
      '<div class="col-4 col-md-6 bg-info_">' +
      '<span class="fw-normal mb-3 ">' + element.nombre + '</span>' +
      '<div class="d-flex justify-content-between align-items-center bg-warning_">' +
      '<small class=" mb-0 md-0 text-muted  " > Cantidad: ' + element.pivot.cantidad + ' </small>' +
      '<a href="" class="text-danger icons--delete--cart "> <i class="bi bi-trash"></i></a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' + '';
  });
  $(document).ready(function () { // modal depende de jquery cdn
    $("#mViewListProCart").modal('show');
  });
}


export function upHighBtn() {
  // $(document).ready(function(){
  $('.boxEfectBtnHome').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 240) {
      $('.boxEfectBtnHome').slideDown(300);
    } else {
      $('.boxEfectBtnHome').slideUp(300);
    }
  });
  // });
}
export function payment() {
  // console.log("payment vue3");
  Culqi.publicKey = 'pk_test_fa086d35aa8c50d6';
  Culqi.settings({
    title: 'Agrupec',
    currency: 'PEN', 
    amount: 1000,
    order: 'ord_live_0CjjdWhFpEAZlxlz',
  });
  Culqi.options({
    lang: "auto",
    installments: false,
    paymentMethods: {
      tarjeta: true,
      yape: true,
      bancaMovil: true,
      agente: true,
      billetera: true,
      cuotealo: true,
    },
  });
  Culqi.options({
    style: {
      logo: 'https://agrupec.com/storage/img/icons/logo_ferreteria.svg',
      bannerColor: '', 
      buttonBackground: '', 
      menuColor: '', 
      linksColor: '', 
      buttonText: '',
      buttonTextColor: '', 
      priceColor: '' 
    }
  });

  const btn_pagar = document.getElementById('paymentAgrupec');
  btn_pagar.addEventListener('click', function (e) {
    Culqi.open();
    e.preventDefault();
  })
  function culqi() {
    console.log("testing del function culqui ");
    if (Culqi.token) { 
      const token = Culqi.token.id;
      const email = Culqi.token.email;
      console.log('Se ha creado un Token: ', token, "email", email);
      $.ajax({
        url: "/payment",
        type: "POST",
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': 'EeTlI5Wpw2L2UXemom6cWEBIanlmS3fyh6dXco5X',
        },
        data: JSON.stringify({
          token: token,
          email: email
        })
      }).done(function (resp) {
        alert("data",resp);
      });

    } else if (Culqi.order) { 
      const order = Culqi.order;
      console.log('Se ha creado el objeto Order: ', order);
    } else {
      console.log('Error : ', Culqi.error);
    }
  };
}

// --------------------------- btn-msj
const correo = document.getElementById('btnEnvioRecu');
if (correo) {
  btnEnvioRecu.addEventListener('click', () => {
    // console.log(formulario.formEmail.email);
    const gmailValidate = emailRecupe.value;
    if (gmailValidate === "") {
      msjCamposVacio();
    } else {
      fetch("/envioGmail?email=" + emailRecupe.value + "").then(data => data.text()
      ).then((data) => {
        // console.log("se envio");
        msjRegistroUsuarioCliente();
        emailData.innerHTML = `${gmailValidate}`;
        document.querySelector(`#formEmail p`).classList.add("form__input__email__correcto");
        document.querySelector(`#formEmail p`).classList.remove("form__input__vacio");
        document.querySelector(`#formEmail input`).classList.add("form__input__vacio");
        document.querySelector(`#formEmail input`).classList.remove("form-control");
        document.querySelector(`#formEmail input`).classList.remove("input--frm--userLog");
        document.querySelector(`#formTitleRecupera h2`).classList.add("form__text__vacio");
        document.querySelector(`#formTitleVeri h2`).classList.remove("form__text__vacio");
        document.querySelector(`#formBtnEnvio a`).classList.add("form__btn__vacio");
        document.querySelector(`#formBtnClose a`).classList.remove("form__btn__vacio");
        document.querySelector(`#formOpcion h6`).classList.add("form__text__vacio");
        document.querySelector(`#formDiv`).classList.add("form__text__vacio");

      });
    }
  });
}
// user Verification correo
const validadorCorreo = document.getElementById('validarEmail');
if (validadorCorreo) {
  validarEmail.addEventListener('click', () => {
    const getInputName = document.querySelector('.inputName').value;
    const getInputEmail = document.querySelector('.inputEmail').value;
    const getInputPass1 = document.querySelector('.inputPass1').value;
    const getInputPass2 = document.querySelector('.inputPass2').value;
    if (getInputEmail === '') {
      // console.log('esta vacio');
      msjCamposVacio();
    } else {
      // console.log('esta lleno');
      fetch('/validarUser/' + getInputEmail + '', {
        method: 'GET'
        // body:DataTransfer(id,cantidad)
      }).then(data => data.text()).then(function (data) {
        // console.log(data);
        if (data) {
          // console.log('si exite el user');
          document.querySelector(`.groud--email input`).classList.add("input--frm--errorValidacion");
          document.querySelector(`.groud--email span`).classList.add("text--frm--msgError");
          document.querySelector(`.groud--email span`).classList.remove("text--frm--msgVacio");
          document.querySelector(`.groud--email input`).classList.remove("input--frm--bienValidacion");
          document.querySelector(`.groud--email i`).classList.remove("icon--frm--bienValidacion");
          document.querySelector(`.groud--email i`).classList.add("icon--frm--vacio");
        } else {
          // console.log('no  exite el user');
          if (getInputName === '' || getInputPass1 === '' || getInputPass2 === '' || getInputPass1 !== getInputPass2) {
            // console.log('esta vacio los demas campos');
            msjCamposVacio();
          } else {
            location.href = '/createUser?nombre=' + getInputName + '&&email=' + getInputEmail + '&&pass1=' + getInputPass1 + '&&pass2=' + getInputPass2 + '';
            // console.log('envia');
            msjRegistroUsuarioCliente();
          }
          document.querySelector(`.groud--email input`).classList.remove("input--frm--errorValidacion");
          document.querySelector(`.groud--email span`).classList.remove("text--frm--msgError");
          document.querySelector(`.groud--email span`).classList.add("text--frm--msgVacio");
          document.querySelector(`.groud--email input`).classList.add("input--frm--bienValidacion");
          document.querySelector(`.groud--email i`).classList.remove("icon--frm--vacio");
          document.querySelector(`.groud--email i`).classList.add("icon--frm--bienValidacion");
        }
      }
      );
    }
  });
}

const precioEnvioDestinoN = document.getElementById('precioDestino');
if (precioEnvioDestinoN) {
  precioEnvioDestinoN.addEventListener("click", function () {
    let precio = 0.00;
    switch (precioEnvioDestinoN.value) {
      case "1":
        precio = "6.00";
        break;
      case "2":
        precio = "16.00";
        break;
      case "3":
        precio = "18.00";
        break;
      case "4":
        precio = "15.00";
        break;
    }
    precioDes.innerHTML = `${precio}`;
    // console.log(precioDestino.value);
  });
}

async function listCate(url) {
  let responselistCategory = await fetch(url); // espera la promesa
  let listCategory = await responselistCategory.json();
  // console.log("cate",listCategory);
  listCatProduct.innerHTML = "";
  listCategory.forEach((element) => {
    listCatProduct.innerHTML +=
      "<div class='pt-3 mb-4 mb-md-2 listCategoryFilterClickHead'>" +
      " <div class='card shadow listCategoryFilterClickBody' >" +
      '<a href="/View-page/' + element.id + '"><img src="/storage/img/Productos/' + element.imagen + '"  class="card-img-top " width="90px" height="160px" /></a>' +
      " <div class='card-body justify-content-between align-items-center'>" +
      "<div class='d-flex  align-items-center' >" +
      "<h5 class='card-title h6 txtListCategoryView textTitleProSearch'>" + element.nombre + "</h5>" +
      "</div>" +
      " <div class='d-flex justify-content-between'>" +
      "<span class='box--text--pre txtBoxPreBefore textPrecioProBefore'>" + "<del>" + "S/ " + element.precio + "</del>" + "</span>" +
      "<span class='textPrecioProAfter'>" + "S/ " + element.newPrecio + "</span>" +
      "</div>" +
      "<div class=' align-items-center d-flex'>" +
      "   <span class='h6 mb-0 text-muted fw-normal'>" +
      "<small>" + element.cantidad + " disponibles" + "</small>" + "</span>" +
      "</div>" +
      "<hr>" +
      " <div class='text-center'>" +
      '<a href="/View-page/' + element.id + '" class="btn btn-sm btnListCategoryView btnEfectClick btnViewPageClick" style="">' + 'Ver </a>' +
      " </div>" +
      " </div>" +
      " </div>" +
      " </div>  ";
  });
}

function msjCamposVacio() {
  Swal.fire({
    icon: 'warning',
    title: ' Llene los campos ',
    text: 'Gracias por entender !',
    showConfirmButton: false,
    timer: 3000

  });
}

function msjRegistroUsuarioCliente() {
  Swal.fire({
    icon: 'success',
    title: 'Se registro correctamente',
    text: 'Gracias por usar nuestro servicios !',
    showConfirmButton: false,
    timer: 3000

  });

}