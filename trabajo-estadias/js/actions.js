
const pago = document.querySelectorAll("#pago__btn")
console.log("hola");

pago.forEach((item) =>{
    item.addEventListener("click", ()=>{
        alert("Pago realizado con exito");
    })
})

const btn_dropdown = document.querySelector(".container__dropdown__user")
let count = 0

const user__box = document.querySelector(".user__box")
.addEventListener("click", (e) => {
    console.log("click user__box");
    
    if ( count < 1 ){
        btn_dropdown.style.display = "flex"
        count++
    }else{
        btn_dropdown.style.display = "none"
        count = 0
    }
});

const mask = document.querySelector(".mask")
// const mask__create__materia = document.querySelector(".mask__create__materia")
const form__create__carrer = document.querySelector(".form__create__carrer")

document.addEventListener("DOMContentLoaded", ()=>{
    mask.style.display = "none"
})

// document.addEventListener("DOMContentLoaded", ()=>{
//     mask__create__materias.style.display = "none"
// })

let count__form = 0
// let count__materia = 0

const create__carrer = document.querySelector("#create__carrer")
// const create__materia = document.querySelector("#create__materia")

create__carrer.addEventListener("click", (e) => {
    console.log(`click: ${count__form}`);
    
    if ( count__form == 0 ){
        console.log("block");
        mask.style.display = "grid"
        count__form++
    }else{
        console.log("none valor" + ccount__formount);
        mask.style.display = "none"
        count__form = 0
    }
});

const x = document.querySelector(".x")
// ______________________-
// x.addEventListener("click", ()=>{
//     mask.style.display = "none"
//     count__form = 0
//     console.log(count__form);
// })

// create__materia.addEventListener("click", (e) => {
//     console.log(`click: ${count__form}`);
    
//     if ( count__form == 0 ){
//         console.log("block");
//         mask.style.display = "grid"
//         count__form++
//     }else{
//         console.log("none valor" + count__materia);
//         mask.style.display = "none"
//         count__form = 0
//     }
// });

// const x_materia = document.querySelector(".x")

// x_materia.addEventListener("click", ()=>{
//     mask.style.display = "none"
//     count__form = 0
//     console.log(count__form);
// })


