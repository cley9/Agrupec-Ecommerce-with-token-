// export default function mark(){  // es para exportar por defecto si el envolvimiento del {}
export function mark(){   /// es necesario envolver a la hora de usarlo en vue dentro del {}
console.log('23sss cley');
}

console.log('23sss joseeeeeeeeeeeeee');

export function validateUser(){
    const  userObj = JSON.parse(localStorage.getItem("userObj"));
    if (userObj) {
      console.log("esta lleno");
    } else {
      console.log("esta vacio");
    }
    return userObj;
}