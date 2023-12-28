// setTimeout(() => {
//     document.querySelector(`#boxMsgCorreo`).classList.add('boxEfectCorreo');
// }, 1500);

// ---befored
export function msjCreateUser(){
  Swal.fire({
  // position:'center',
  icon: 'success',
  title: 'Usuario creado',
  text: 'Tu usuario sea creado, gracias por usar nuestro servicio',
  showConfirmButton: false,
  timer: 3000
  })
  }
  export function msjCreateUserError(){
    Swal.fire({
    // position:'center',
    icon: 'error',
    title: 'El usuario no se a creado',
    text: 'Vuelve a intentarlo',
    showConfirmButton: false,
    timer: 3000
    })
    }
export function msjOk(){
    Swal.fire({
    // position:'center',
    icon: 'success',
    title: 'Bien venido ',
    text: 'Gracias por usar nuestro CMS !',
    showConfirmButton: false,
    timer: 3000
    })
    }
export function msjOkUser(){
      Swal.fire({
      // position:'center',
      icon: 'success',
      title: 'Bien venido ',
      text: 'Gracias por usar nuestro servicio',
      showConfirmButton: false,
      timer: 3000
      })
      }

   export function msjError() {
      Swal.fire({
        title: ' Error de inicio de sesion',
        text: ' Vuelve a intentarlo ',
        icon: 'error',
        showConfirmButton:false,
        timer: 3000
        })
    }

 export function msjInicieSesion() {
    Swal.fire({
      title: ' Debes de iniciar sesi&oacute;n para agregar ',
      text: 'Gracias por entender',
      icon: 'info',
      showConfirmButton:false,
      timer: 2000
      })
  }
  // -----------------factura
  function msgFacturaok(){
    Swal.fire({
    // position:'center',
    icon: 'success',
    title: 'Factura Generada ',
    text: 'Se genero la factura exitosamente',
    showConfirmButton: false,
    timer: 3000
    });
    }
    function msgFacturaError(){
    Swal.fire({
    icon: 'error',
    title: 'Vuelva a intentarlo ',
    text: 'Error al genera la factura',
    showConfirmButton: false,
    timer: 3000
    })
    }
//   -----------------espa
function msgAgregado(){
    Swal.fire({
    // position:'center',
    icon: 'success',
    title: 'Producto agregado ',
    text: 'Gracias por ingresar datos !',
    showConfirmButton: false,
    timer: 3000
    })
    }
    function msgNotProducto() {
      Swal.fire({
        title: ' El producto no se agrego correctamente ',
        text: ' Vuelve a intentarlo ',
        icon: 'error',
        showConfirmButton:false,
        timer: 2000
        })
    }

    function msgedit(){

        var editP=document.getElementById("editP").value;
        if (editP === "") {
            return false;
        }else {
    Swal.fire({
    icon: 'success',
    title: 'Producto editado ',
    showConfirmButton: false,
    timer: 2000

    })
    }
    }
    function addCard(){
      Swal.fire({
      icon: 'success',
      title: 'Producto agregado ',
      text: 'Se agrego al carrito su producto elegido',
      showConfirmButton: false,
      timer: 2000
    })
    }
     function viewAddCardP(viewItem,viewName,viewImg,viewPayment,viewCount) {
    let outName=document.getElementById("outNombre");
    const modal = document.querySelector(".modalViewCP");
    let outPayment=document.getElementById("outPrecio");
    let outCount=document.getElementById("outCount");
    let outCod=document.getElementById("outCodigo");
    let outImg=document.getElementById("outImg");
    // outName.textContent=viewName;

    outName.textContent=viewName;
      outImg.innerHTML = "<img src='imagenes/"+viewImg+"'  class='img-fluid' alt=''  >";
    outPayment.textContent='S/ '+viewPayment;
    outCount.textContent=viewCount;
    outCod.textContent='kst-12-3d';
      modal.classList.add("modal--show");
    const closeModal = document.querySelector(".modal__close");
    const btnClose = document.querySelector(".btn--close");

    closeModal.addEventListener("click", (e) => {
    modal.classList.remove("modal--show");
    });
    btnClose.addEventListener("click", (e) => {
    modal.classList.remove("modal--show");
    });
  }
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });