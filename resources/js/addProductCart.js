export async function addProductCart(idProducto, cantidad, nameProduct, newPrecio, imgProduct) {
  // console.log("----------->",idProducto, cantidad, nameProduct, newPrecio, imgProduct);
        const userObj=JSON.parse(localStorage.getItem('userObj'));
        // console.log('---', userObj.user[0].id);
        // // const data = await fetch(`/api/user/${this.userObj.user[0].id}/addCart/${idProducto}/${cantidad}`, {
          const data = await fetch(`/api/user/${userObj.user[0].id}/addCart/${idProducto}/${cantidad}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userObj.token}`,
          },
        });
        const view = await data.json();
        // console.log(view);
        await viewModalProductAddCart(cantidad, nameProduct, newPrecio, imgProduct);
     
      }

export function viewModalProductAddCart(cantidad,nombre,newPrecio,img) {
    // console.log('-----------modal cart');
    let outName=document.getElementById("outNombre");
    const modal = document.querySelector(".modal--form--data");
    let outPayment=document.getElementById("outPrecio");
    let outCount=document.getElementById("outCount");
    let outCod=document.getElementById("outCodigo");
    let outImg=document.getElementById("outImg");
    outName.textContent=nombre;
    outImg.innerHTML = "<img src='/storage/img/Productos/"+img+"'  class='img-fluid' alt=''  >";
    outPayment.textContent='S/ '+newPrecio+'.00';
    outCount.textContent=cantidad;
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
// ---- para el delete

export async function deleteItemProduct(idProduct){
  const userObj=JSON.parse(localStorage.getItem('userObj'));
// Nota: si pongo delete en la variable constante y la ruta lleva el mismo nombre se rompe el proceso, queda investigar
  const data = await fetch(`/api/user/${userObj.user[0].id}/delete/${idProduct}`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userObj.token}`,
    },
   });
   const result= await data.json();

  //  console.log('delete --', result);
}
export async function deleteAllProduct(){
  const userObj=JSON.parse(localStorage.getItem('userObj'));
// Nota: si pongo delete en la variable constante y la ruta lleva el mismo nombre se rompe el proceso, queda investigar
  const data = await fetch(`/api/user/deleteCart/${userObj.user[0].id}`, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userObj.token}`,
    },
   });
   const result= await data.json();

  //  console.log('delete --', result);
}