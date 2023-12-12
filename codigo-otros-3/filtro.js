// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "zapato-rojo.jpg"}
]
const listaProducto = document.querySelector("[name=lista-de-productos]")//cambie a query selector y el nombre de la variable para que sea mas entendible 
const input = document.querySelector('.input');//cambie el nombre de la variable para mayor contexto
const botonDeFiltro = document.querySelector("button");//la subi para que las variables globales esten al principio y hasta arriba 

function displayProductos(productos){
  listaProducto.innerHTML='';// se limpiamos la lista 
  productos.forEach(productos =>{
  const div = document.createElement("div")// cambie a const para evitar problemas y cambie el nombre de la variable para mas contexto
  div.classList.add("producto");//actualice la variable

  const titulo = document.createElement("p");// cambie a const para evitar problemas y cambie el nombre de la variable para mas contexto
  titulo.classList.add("titulo");//actualice nombre variable
  titulo.textContent = productos.nombre;//actualice nombre variable
  
  const imagen = document.createElement("img");// cambie a const para evitar problemas 
  imagen.setAttribute('src', productos.img);

  div.appendChild(titulo);//actualice nombre variable 
  div.appendChild(imagen);//actualice nombre variable

  listaProducto.appendChild(div);//actualice nombre variable
});
}

displayProductos(productos);

botonDeFiltro.onclick = function() {
  while (listaProducto.firstChild) {//actualizar la variable
    listaProducto.removeChild(listaProducto.firstChild);
  }

  const texto = input.value;//por si escriben con mayusculas 
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  displayProductos(productosFiltrados); 
};
//elimine el for que repetia lo de function displayProductos
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  