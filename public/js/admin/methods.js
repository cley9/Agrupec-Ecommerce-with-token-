function getAdminObj() {
  const get = JSON.parse(localStorage.getItem("AdminObj"));
  return get.token;
}
let fBtnSearchA = document.getElementById("fBtnSearch");
if (fBtnSearchA) {
  // const btnSearch=document.getElementById('#fBtnSearch');
  fBtnSearch.addEventListener('click', () => {
    const getNumRut = document.querySelector('.fNumRut').value;
    fetch('/api/admin/Admin-facturaSearch/' + getNumRut + '', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getAdminObj()}`,
      }
    }).then(data => data.json()).then(
      function (data) {
        fNombreUser.value = data.nombre;
        fCondicionContribuyente.value = data.condicion;
        fEstadoContribuyente.value = data.estado;
        fNumero.value = data.numeroDocumento;
        // fTipoDocumento.value=data.tipoDocumento;
      }
    );
  });
}
function viewListFactura() {
  fetch("/api/admin/Admin-facturaList", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAdminObj()}`,
    }
  }).then(dataFact => dataFact.json()).
    then(function (dataFact) {
      console.log(dataFact.listFVenta.length);
      const listVentas = document.getElementById("listFact");
      listVentas.innerHTML = ``;
      dataFact.listFVenta.forEach(item => {
        listVentas.innerHTML +=
          `<tr>` +
          `<td>A000${item.id}</td>` +
          `<td>${item.nombreUser}</td>` +
          `<td>${item.numRuc}</td>` +
          // `<td>${item.precio}</td>`+
          // `<td>${item.precio*item.cantidad}</td>`+
          `<td><a href="" class="btn btn-danger"><i class="bi bi-file-earmark-pdf-fill"></i></a></td>` +
          `<tr>`;
      });
    })
}
viewListFactura();
const formAddP = document.getElementById("formFactAgregar");
if (formAddP) {
  btnAddPF.addEventListener("click", (e) => {
    console.log(formAddP.precioPF.value);
    console.log(formAddP.nombrePF.value);
    console.log(formAddP.cantidadPF.value);
    let fid = 0;
    let producto = JSON.parse(localStorage.getItem("listProducto")) || [];
    function arrayPro(fnombre, fCantidad, fprecio) {
      let list = {
        id: producto.length + 1,
        nombre: fnombre,
        cantidad: fCantidad,
        precio: fprecio
      }
      producto.push(list);
      insert();
    }
    let insert = () => {
      localStorage.setItem("listProducto", JSON.stringify(producto));
    }
    arrayPro(formAddP.nombrePF.value, formAddP.cantidadPF.value, formAddP.precioPF.value)
    // -------version 2 
    let productoItem = JSON.parse(localStorage.getItem("listProducto"));
    const listProductoV = document.getElementById("listProducto");
    if (productoItem !== null) {
      listProductoV.innerHTML = ``;
      const proTotal = document.getElementById("precioTVenta");
      proTotal.innerHTML = ``;
      let precioT = 0;
      productoItem.forEach(item => {
        listProductoV.innerHTML +=
          `<tr>` +
          `<td>A000${item.id}</td>` +
          `<td>${item.nombre}</td>` +
          `<td>${item.cantidad}</td>` +
          `<td>${item.precio}</td>` +
          `<td>${item.precio * item.cantidad}</td>` +
          `<td><a class="btn btn-danger" id="btnDelete${item.id}"><i class="bi bi-trash"></i></a></td>` +
          // `<td><button class="btn btn-danger" id="btnDelete"><i class="bi bi-file-earmark-pdf-fill"></i></button></td>`+
          `<tr>`;
        precioT += item.precio * item.cantidad;
      });
      let igv = precioT * 0.18;
      proTotal.innerHTML += ` <h6>Sub Total S/. ${precioT - igv}</h6>
  <h6>I.G.V. 18% S/. ${igv}</h6>
  <h6 >Total S/. <spam id="fpreTotal">${precioT}</spam></h6>`;
    }
  });
}
// version 3
let productoItem = JSON.parse(localStorage.getItem("listProducto"));
const listProductoV = document.getElementById("listProducto");
if (productoItem !== null) {
  console.log("yes");
  listProductoV.innerHTML = ``;
  productoItem.forEach(item => {
    listProductoV.innerHTML +=
      `<tr>` +
      `<td>A000${item.id}</td>` +
      `<td>${item.nombre}</td>` +
      `<td>${item.cantidad}</td>` +
      `<td>${item.precio}</td>` +
      `<td>${item.precio * item.cantidad}</td>` +
      `<td><a class="btn btn-danger" id="btnDelete${item.id}"><i class="bi bi-trash"></i></a></td>` +
      `<tr>`;
  });
}
// localStorage.clear(); /// para eliminar todo el local storage
// console.log(producto);
let time = new Date();
let day = time.getDate();
let month = time.getMonth() + 1;
let year = time.getFullYear();
const fechaa = document.getElementById("ffecha");
fechaa.value = `${day}/${month}/${year}`;
btnFacturaV.addEventListener("click", () => {
  // console.log(`${day}/${month}/${year}`);
  fetch("/api/admin/Admin-facturaList", {
    method: "GET",
    headers: {
      // Authorization:`Bearer ${getStorage()}`,
      Authorization: `Bearer ${getAdminObj()}`,
    }
  }).then(SerieCorrel => SerieCorrel.json()).then((serie) => {
    let fserie = document.getElementById("fserie");
    if (serie.listFVenta.length !== 0) {
      let ser = serie.listFVenta.at(-1);
      let serieVenta = ser.id + 1;
      fserie.value = `A000${serieVenta}`;
      console.log(`A000${serieVenta}`);
      console.log("lleno ");
    } else {
      fserie.value = 'A0001';
      console.log("vacio");
    }
    // console.log(serie.listFVenta);
    // serie.listFVenta.forEach(item => {
    //   console.log(item.id);
    // });
  });
  // console.log(ffecha.value);
})
// --------------insert a base de dato  
const dataFactura = document.getElementById('formFactAgregar');
dataFactura.addEventListener("submit", (e) => {
  const fCreate = document.getElementById('formFactAgregar');
  e.preventDefault();
  console.log("JOSE");
  console.log(fCreate);
  console.log(fNombreUser.value + fpreTotal.value);
  fetch("/api/admin/Admin-facturaVenta/?fNombreUser=" + fNombreUser.value + "&fNumero=" +
    fCreate.fNumero.value + "&fprecio=1223&fpdf=A000&ffecha=" + ffecha.value + "", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getStorage()}`,
    }
  }).then(factura => factura.json()).then(function (factura) {
    console.log(factura.status);
    if (factura.status == "ok") {
      Swal.fire({
        icon: 'success',
        title: 'Factura Generada ',
        text: 'Se genero la factura exitosamente',
        showConfirmButton: false,
        timer: 3000
      });
      viewListFactura();
      localStorage.clear("listProducto");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Vuelva a intentarlo ',
        text: 'Error al genera la factura',
        showConfirmButton: false,
        timer: 3000
      });
    }
  });
});
// this is new addid admin
function msgUpdate(idProdu) {
  fetch('/api/admin/previewProduct/' + idProdu + '', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAdminObj()}`,
    }
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status == 200) {
        // console.log(response.data[0]);
        edIdUpdate.value = response.data[0].id;
        edNombre.value = response.data[0].nombre;
        edPrecioA.value = response.data[0].precio;
        edPrecioNew.value = response.data[0].newPrecio;
        edDescription.value = response.data[0].description;
        edCount.value = response.data[0].cantidad;
        edPeso.value = response.data[0].peso;
        edPreviewImgUpdate.src = "/storage/img/Productos/" + response.data[0].imagen;
        srcImagen.value = "/storage/img/Productos/" + response.data[0].imagen;
        edImgUpdate.value = response.data[0].imagen;
      }
    });
}
// ----- preview
let registro = document.getElementById("btnRegistroPro");
if (registro) {
  registro.addEventListener("click", () => {
    const file = document.querySelector('#archivo').files[0];
    if (file === undefined) {
      edPreviewImg.src = "/storage/img/icons/arrastrar.png"
    }
  });
}
// previsualizacion de img con js
function previewFile() {
  const preview = document.querySelector('#edPreviewImg');
  const file = document.querySelector('#archivo').files[0];
  const reader = new FileReader();// es una api que convierte a base 64  
  reader.addEventListener("load", function () {
    // convierte la imagen a una cadena en base64
    preview.src = reader.result;
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}
function idCatalogo(id) {
  fetch('/api/admin/Admin-idCatalogo/' + id + '', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAdminObj()}`,
    }
  }).then(data => data.json()).then(function (data) {
    updateCatalogoIdDat.value = data.id;
    updateCatalogoImgDat.value = data.imagen;
    updateCatalogoNombre.value = data.nombre;
    updateCatalogoDescripcion.value = data.descripcion;
    updateCatalogoImg.src = '/storage/img/SlayderMain/' + data.imagen + '';
  });
}
// ----- preview catalogo
let catalogo = document.getElementById("btnRegistroCatalogo");
if (catalogo) {
  catalogo.addEventListener("click", () => {
    const file = document.querySelector('#archivo').files[0];
    if (file === undefined) {
      edPreviewImg.src = "/storage/img/icons/arrastrar.png"
    }
  });
}

// 
// admin producto
function productDelete(id,nomProducto,img){
  // console.log(id+' ----- '+nomProducto+' ----- '+img);
  swal.fire({
      title: "&iquest;Estas seguro de eliminar ?",
      text: "El produto " + nomProducto + "",
      imageUrl: "/storage/img/Productos/" + img + " ",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#45B39D",
      cancelButtonColor: "#EC7063",
      confirmButtonText: "Confirmar",
  }).then((result) => {
  if (result.value) {
    var url="/Admin-delete/"+id+"/"+img+"";
    window.location.href=url;
  Swal.fire({
      icon: "success",
      title: "Eliminado ",
      text: "Producto eliminado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
      }
    });
}