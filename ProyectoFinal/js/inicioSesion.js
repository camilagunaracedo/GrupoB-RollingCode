const mail = document.getElementById("mail");
const password = document.getElementById("password");
const btnlogin = document.getElementById("login");
const figurelogin = document.getElementById("figure-login")
const btnlogout = document.getElementById("logout");
const administrar = document.getElementById("administrar");

let email ="";
let pass ="";

const key = "sesion";

const sesion = JSON.parse(localStorage.getItem(key));

if (sesion) {
    figurelogin.style.display = "none";
    btnlogout.style.display = "block";
    administrar.style.display = "block";
}

mail.addEventListener("change", function(e) {
    email = e.target.value;
})

password.addEventListener("change", function(e) {
    pass = e.target.value;
}) 

btnlogin.addEventListener("click", function() {
    if (email === "administrador" && pass === "admin") {
        const usuario = new Usuario (email, pass, "administrador", true);
        localStorage.setItem(key, JSON.stringify(usuario))
        figurelogin.style.display = "none";
        btnlogout.style.display = "block";
        administrar.style.display = "block";
    } else {
        console.error("Contraseña o usuario incorrectos");
    }
})

btnlogout.addEventListener("click", function() {
    figurelogin.style.display = "block";
    btnlogout.style.display = "none";
    administrar.style.display = "none";
})


class Usuario {
    mail = "";
    password = "";
    rol = "";
    isLogged = false;

    constructor(mail, password, rol, isLogged){
        this.mail = mail;
        this.password = password;
        this.rol = rol;
        this.isLogged = isLogged;
    }
}