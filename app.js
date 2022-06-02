const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        alert('Gracias por contactarme, te escribiré pronto =)')
    }

}
//Ejecutar Transición menu redes sociales
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//mostrar y ocultar menu redes sociales
    function open_close_menu() {
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }
    
//se oculta la barra lateral redes sociales cuando recarga la pagina cuando es menor a 760px
if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//menu redes sociales responsive
window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if(window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
})