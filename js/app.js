

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const elementMenu = document.querySelectorAll(".nav-list a"); // Selecciona todos los elementos <a> dentro del menú

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });


     // Cierra el menú cuando se hace clic en uno de los elementos del menú
     elementMenu.forEach(element => {
        element.addEventListener("click",()=>{
            nav.classList.remove("visible");
        });
     });

    let leyendas = ["Servicios Impositivos","Auditorias", "Servicios Previsionales","Servicios Contables", "Servicios Financieros"]
    let indiceLeyenda = 0;

    function CambiarLeyenda(){
        document.getElementById("leyenda").textContent = leyendas[indiceLeyenda];
            indiceLeyenda = (indiceLeyenda + 1) % leyendas.length;
        }

         // Llama a cambiarLeyenda cada cierto intervalo (por ejemplo, cada 3 segundos)
         setInterval(CambiarLeyenda, 2500);

});
