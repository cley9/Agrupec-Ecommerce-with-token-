// import {getStorage} from './methodsReview.js';
// console.log("win--",getStorage());
function getStorage() {
    const get = JSON.parse(localStorage.getItem("AdminObj"));
    return get.token;
}
const searchProductoPA = document.getElementById('searchProducto');
if (searchProductoPA) {
    searchProductoPA.addEventListener('keyup', function (e) {
        e.preventDefault();
        const fProductoLista = document.getElementById('fProductoLista').value;
        //     console.log(e.target.fProductoLista.name);
        // fBtnSearchLista.preventDefault();
        // console.log(fProductoLista);
        if (fProductoLista.length >= 1) {
            // console.log(fProductoLista.length);
            console.log("new ------- ", getStorage());
            fetch('/api/admin/Admin-search/' + fProductoLista + '').then(search => search.json()).
                then(function (search) {
                    // console.log(search);
                    let content = document.getElementById("dataProducto");
                    content.innerHTML = ``;
                    search.forEach(item => {
                        content.innerHTML +=
                            `<tr>` +
                            `<td>${item.id}</td>` +
                            `<td>${item.nombre}</td>` +
                            `<td>${item.precio}</td>` +
                            `<td>${item.newPrecio}</td>` +
                            `<td>` +
                            `<img src="/storage/img/Productos/${item.imagen}"  width="80px"  alt="">` +
                            `<td>` +
                            `<a onclick="msgUpdate(${item.id})"  class="mb-md-0 mb-2 btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="bi bi-pencil"></i></a>` +
                            `<a onclick="productDelete(${item.id},'${item.nombre}','${item.imagen}')" class="btn btn-danger "> <i class="bi bi-trash"></i></a>` +
                            `</td>` +
                            `</tr>`;
                    });
                });
        }
    });
}
// --------infocord
let infocord = document.getElementById("vBtnSearch");
if (infocord) {
    vBtnSearch.addEventListener('click', () => {
        const getNumInfo = document.querySelector("#vNumInfocorp").value;
        fetch('/api/admin/Admin-infocorpSearch/' + getNumInfo + '', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${getStorage()}`,
            }
        }).then(data => data.json()).then(
            function (data) {
                vNombreUser.value = data.nombre;
                vNumero.value = data.numeroDocumento;
                console.log("-- ", data);
            }
        );
    });
}
// api admin
function listPedidoUser(iduser) {
    fetch(`/api/admin/listPedido/${iduser}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${getStorage()}`,
        }
    }).then(response => response.json()).then((response) => {
        // console.log(response);
        let body = '';
        if (response.msg == "Con pedidos") {
            let neto = 0;
            response.data.list_pedido_user.forEach((item) => {
                neto += item.pivot.cantidad * item.newPrecio;
                body += `
            <div class="mb-2 col p-2 rounded-3 box--view--favorite">
                <div class="row col d-flex align-items-center">
                    <div class="col-4 col-md-2">
                        <a href="/View-page/${item.id}">
                            <img src="storage/img/Productos/${item.imagen}" class="card-img-top"
                                width="90px" height="120px" />
                        </a>
                    </div>
                    <div class="col col-md-4">
                        <div class="row">
                            <span class="fw-normal mb-3 ">${item.nombre}</span>
                            <small class="mb-0 md-0 text-muted"> SKU:3</small>
                            <div
                                class="col d-flex justify-content-between align-items-center  d-md-none d-sm-block d-block">
                                <small>Cantidad : 3</small>
                                <small>Precio : 3</small>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6  d-none d-sm-none d-md-block">
                        <div class="col ">
                            <div class="row  ">
                                <div class="col ">
                                    <div class="col mb-4  rounded-3 d-flex justify-content-center align-items-center bg-light">
                                        <h6 class="pt-2">Precio unitario</h6>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center ">
                                        <h6>S/ ${item.newPrecio}</h6>
                                    </div>
                                </div>
                                <div class="col ">
                                    <div class="col mb-4  rounded-3 d-flex justify-content-center align-items-center bg-light">
                                        <h6 class="pt-2">Cantidad</h6>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center ">
                                        <h6>${item.pivot.cantidad}</h6>
                                    </div>
                                </div>
                                <div class="col ">
                                    <div class="col mb-4 rounded-3 d-flex justify-content-center align-items-center bg-light">
                                        <h6 class="pt-2">Subtotal</h6>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center ">
                                        <h6>S/ ${item.pivot.cantidad * item.newPrecio}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
            });
            body += `<div class="p-3">
        <h5 class="text-end">Total: S/ ${neto}.00</h5>
        </div>`;
        } else {
            body += `<div class="">
        <h3 class="text-center">Sin pedidos</h3>
        </div>`;
        }
        bodyListPedido.innerHTML = body;

    });
}

