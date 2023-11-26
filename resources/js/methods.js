// export default function validateUser(){  // es para exportar por defecto si el envolvimiento del {}
export function validateUser(){/// es necesario envolver a la hora de usarlo en vue dentro del {}
    const  userObj = JSON.parse(localStorage.getItem("userObj"));
    if (userObj) {
      console.log("esta lleno");
    } else {
      console.log("esta vacio");
    }
    return userObj;
}

export async function filterProduct(nameProduct){
  //  console.log('----', nameProduct);
  const url="/searchListCategory?search="+nameProduct+"";
  let responselistCategory= await fetch(url); // espera la promesa
  let listCategory= await responselistCategory.json();
  // console.log("cate",listCategory);
  listCatProduct.innerHTML=``;
  listCategory.forEach((element)=>{
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

export function upHighBtn(){
  // $(document).ready(function(){
    $('.boxEfectBtnHome').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      },300 );
    });
  
    $(window).scroll(function(){
      if ($(this).scrollTop() > 240){
        $('.boxEfectBtnHome').slideDown(300);
      } else {
        $('.boxEfectBtnHome').slideUp(300);
      }
    });
  // });
  
}