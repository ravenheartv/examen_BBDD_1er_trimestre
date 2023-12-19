let lista = []
function añadir(){
  const datos = document.querySelector(".input_box").value
  const el = document.createElement("p")
  el.innerHTML = datos
  const contenedor = document.querySelector(".resultados")
  contenedor.appendChild(el)
  document.querySelector(".input_box").value = ""
  lista.push(datos)
  localStorage.setItem("lista", JSON.stringify(lista))
}

function borrar() {
    localStorage.removeItem("lista");
    const contenedor = document.querySelector(".resultado");
    contenedor.innerHTML = "";
    document.querySelector(".ganador").innerHTML = ""; 
  }
  

function sortear(){
  const p = document.querySelector(".ganador")
  const ganador = lista[Math.floor(Math.random() * lista.length)]
  p.innerHTML = ganador
}

const old_data = localStorage.getItem("lista")
if(old_data){
  lista = JSON.parse(old_data)
  lista.forEach((elemento) => {
    const p = document.createElement("p")
    p.innerHTML = elemento
    document.querySelector(".resultados").appendChild(p)
  })
}