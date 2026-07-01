// ===============================
// MODO OSCURO
// ===============================
const botonModo = document.getElementById("modo");

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icono = botonModo.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icono.classList.replace("fa-moon", "fa-sun");
    } else {
        icono.classList.replace("fa-sun", "fa-moon");
    }
});

// ===============================
// ANIMACIÓN AL DESPLAZARSE
// ===============================
const elementos = document.querySelectorAll(
    "section, .card, .certificado, .dato, .contacto-item, .proyecto-card, .idioma-card, .timeline-item"
);

const mostrarElemento = () => {
    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 90) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(35px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

window.addEventListener("scroll", mostrarElemento);
window.addEventListener("load", mostrarElemento);

// ===============================
// MENÚ ACTIVO AL HACER SCROLL
// ===============================
const enlaces = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let actual = "";
    document.querySelectorAll("section").forEach(seccion => {
        const top = seccion.offsetTop - 130;
        if (scrollY >= top && scrollY < top + seccion.offsetHeight) {
            actual = seccion.getAttribute("id");
        }
    });
    enlaces.forEach(link => {
        link.classList.remove("activo");
        if (link.getAttribute("href") === "#" + actual) {
            link.classList.add("activo");
        }
    });
});

// ===============================
// MENSAJE DE BIENVENIDA
// ===============================
window.addEventListener("load", () => {
    console.log("✅ Portafolio de Yulissa Berrospi cargado correctamente.");
});
// ===============================
// ANIMACIÓN BARRAS DE HABILIDADES
// ===============================
const animarBarras = () => {
    document.querySelectorAll(".barra-skill div").forEach(barra => {
        const pos = barra.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            const ancho = barra.getAttribute("data-width");
            if (barra.style.width === "0%" || barra.style.width === "") {
                barra.style.width = ancho + "%";
            }
        }
    });
};

window.addEventListener("scroll", animarBarras);
window.addEventListener("load", animarBarras);
// ===============================
// MENÚ HAMBURGUESA (MÓVIL)
// ===============================
const botonHamburguesa = document.getElementById("hamburguesa");
const menuLista = document.getElementById("menu-lista");

botonHamburguesa.addEventListener("click", () => {
    menuLista.classList.toggle("activo");

    const icono = botonHamburguesa.querySelector("i");
    if (menuLista.classList.contains("activo")) {
        icono.classList.replace("fa-bars", "fa-xmark");
    } else {
        icono.classList.replace("fa-xmark", "fa-bars");
    }
});

// Cierra el menú al hacer clic en un enlace (móvil)
document.querySelectorAll("#menu-lista a").forEach(link => {
    link.addEventListener("click", () => {
        menuLista.classList.remove("activo");
        botonHamburguesa.querySelector("i").classList.replace("fa-xmark", "fa-bars");
    });
});
