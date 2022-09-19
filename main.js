// * objetos /*

// const pizza = [ 
//     {
//     id: 1,
//     nombre: 'Muzzarella',
//     ingredientes: ['Queso', 'Oregano', 'Salsa'],
//     precio: 500,
//     img: './assets/muzza.jpg'
//     },
//     {
//     id: 2,
//     nombre: 'Fugazzeta',
//     ingredientes: ['Queso', 'Cebolla'],
//     precio: 600,
//     img: './assets/Fugazzeta.jpg'
//     },
//     {
//     id: 3,
//     nombre: 'Jamon y Morron',
//     ingredientes: ['Queso', 'Jamon', 'Morron',],
//     precio: 950,
//     img: './assets/jamonymorron.jpg'
//     },
//     {
//     id: 4,
//     nombre: 'Napolitana',
//     ingredientes: ['Queso', 'Tomate', 'Provenzal', 'Perejil'],
//     precio: 1000,
//     img: './assets/Napolitana.jpg'
//     },
//     {
//     id: 5,
//     nombre: 'Cancha',
//     ingredientes: ['Salsa'],
//     precio: 300,
//     img: './assets/Cancha.jpg'
//     },
//     {
//     id: 6,
//     nombre: 'Calabresa',
//     ingredientes: ['Salsa', 'Calabresa', 'Queso'],
//     precio: 1500,
//     img: './assets/calabreza.jpg'
//     },
// ];

// a) Las pizzas que tengan un id impar. //


// const pizzaImpar = pizza.map((pizzaIdent) => {
//     if (pizzaIdent.id % 2) {
//         return pizzaIdent;
//     }
// });

//  console.log(pizzaImpar);





// // b) ¿Hay alguna pizza que valga menos de $600? //

// const pizzaMenores = pizza.map((pizzaMenosSeiscientos) => {
//     if (pizzaMenosSeiscientos.precio < 600) {
//     return pizzaMenosSeiscientos;
// }
// });

//  console.log(pizzaMenores);


// // c) Los nombres de todos las pizzas.

// const nombrePizza = () =>
//     pizza.forEach((nombrePizza) =>
//     console.log(`Pedite: ${nombrePizza.nombre}`)
    
// );

//  nombrePizza();


// // d) Los precios de las pizzas - // 
// // e) El nombre de cada pizza con su respectivo precio.

// const nombreyPrecioPizza = () =>
// pizza.forEach((detallePizza) =>
//     console.log(`Tenemos ${detallePizza.nombre} y te sale son $${detallePizza.precio} `)
// );

//  nombreyPrecioPizza();


///////////////////////////////////////////////////////////////////////////////

const pizzas = [ 
    {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['Queso', 'Oregano', 'Salsa'],
    precio: 500,
    img: './assets/muzza.jpg'
    },
    {
    id: 2,
    nombre: 'Fugazzeta',
    ingredientes: ['Queso', 'Cebolla'],
    precio: 600,
    img: './assets/Fugazzeta.jpg'
    },
    {
    id: 3,
    nombre: 'Jamon y Morron',
    ingredientes: ['Queso', 'Jamon', 'Morron',],
    precio: 950,
    img: './assets/jamonymorron.jpg'
    },
    {
    id: 4,
    nombre: 'Napolitana',
    ingredientes: ['Queso', 'Tomate', 'Provenzal', 'Perejil'],
    precio: 1000,
    img: './assets/Napolitana.jpg'
    },
    {
    id: 5,
    nombre: 'Cancha',
    ingredientes: ['Salsa'],
    precio: 300,
    img: './assets/Cancha.jpg'
    },
    {
    id: 6,
    nombre: 'Calabresa',
    ingredientes: ['Salsa', 'Calabresa', 'Queso'],
    precio: 1500,
    img: './assets/calabreza.jpg'
    },
];

// const input = document.querySelector('inputValue');
// const card = document.querySelector('.card');
// const btn = document.querySelector('.btn');
// const form = document.querySelector('.form');

//* EJERCICIO 2 JAVASCRIPT **/

// const addEvent = e => {
//     e.preventDefault();
// }

// btn.addEventListener('click', function(){
//     const valor = document.getElementById('inputValue').value.trim();
//     const pizza = pizzas.find(pizza => pizza.id == valor);
    
//     if(pizza){
//         return card.innerHTML=
//         `<h2>Nombre: ${pizza.nombre}</h2>
//         <h4>Precio: ${pizza.precio}</h4>`
//     }else{
//         alert("no existe esa pizza");
//     }
//     });

///////////////////////////////////////////////////////////////////////////////


//* EJERCICIO 3 JAVASCRIPT **/


//  👉 A cada Pizza, agregarle una imagen. 
//  👉 Guardar el array en el local storage. 
//  👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
//  👉 Debajo del card tiene que haber un input y un botón. 
//  Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.
//  🚨 Si no coincide con ningún id, renderizar un mensaje de error.




const input = document.querySelector('inputValue');
const card = document.querySelector('.card');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const error = document.querySelector('.error');

function searchPizza(arreglo){
    const pizzaEncontrada  = pizzas.find(pizza => pizza.id === Number(inputValue.value));
    localStorage.setItem("pizzaa",JSON.stringify(pizzaEncontrada))
    renderPizza(pizzaEncontrada)
}

function renderPizza(pizza){
    const {nombre,img,precio,ingredientes} = pizza
    card.innerHTML = `<section class="card">
    <img src=${img} >
    <h2 class="card__title"> ${nombre}</h2>
    <p class="card-ingredientes">Ingredientes: ${ingredientes}</p>
    <p class="card-precio"> ${precio}</p>
    <a href="#" class="card-btn">COMPRAR</a>
    </div>
    </section>`
}

window.addEventListener('load', e=>{

    const pizzeta = JSON.parse(localStorage.getItem("pizzaa"))
    if(pizzeta === null){
    error.classList.add ;
    } else {
    error.classList.remove;
    renderPizza(pizzeta)
    }

})



// const showPizza = (value) => {
//     if(!value){
//         error.innerHTML = `<h2>Ingrese un número mayor a 0</h2>`;
//     }else if (!pizzas.some((pizza) => pizza.id === value)){
//         console.log(value);
//         error.innerHTML = `<p>No existe una pizza con ese ID</p>`;
//     }else{
//         const pizza = searchPizza(value);
//         error.innerHTML = renderCard(pizza);
//     }
// };


form.addEventListener('submit', e => {
    e.preventDefault();

    const datoUser = inputValue.value.trim();
    if(Number(datoUser) > pizzas.length){
        card.innerHTML = "";
        form.reset();
        return;
    } else {    
    searchPizza(pizzas)
    form.reset();}
})

























// function saveLocalStorage(localStorage) {
//     localStorage.setItem("pizzaLocalstorage", JSON.stringify(localStorage));


//     const searchPizza = (pizzaF) => {
//     const pizzaFind = pizzas.find (pizza => pizza.id === pizzaF)
//         if (pizzaFind == [''])
//         return error
//         else
//         return pizzaFind
//     }

//     function renderPizza(renderPizza) {
//         const pizza = renderPizza(renderPizza);
//         if (pizza == 'error') {
//             pizzaContainer.innerHTML =
//             `<h2>No tenemos esa pizza</h2>`;
//         }
//         else {
//             pizzaContainer.innerHTML =
//                 `<div class="pizza_">
//                 <h2>${nombre}</h2>
//                 <img src="${pimg}"  />
//                 <h4>La pizza sale $${precio}</h4>
//                 <h4>el id es ${ingredientes}</h4>
//                 </div>
//     `;
//             return pizza;
//         }
//     }

//     const init = () =>{
    
//         form.addEventListener("submit", renderMessage);
//         saveLocalStorage(pizzas);
//     };
    
//     init();














// const searchPizza = () => {

//     if (pizzas==null) return 'error';
//     else 
//     return pizzas;
// }


// form.addEventListener('submit', e => {
//     e.preventDefault();
//     mensajes(input.value);
//     localStorage = [input.value];
//     input.value='';
//     saveLocalStorage(localStorage);
// });

