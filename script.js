var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Siempre muestra solo una imagen
    centeredSlides: true,
    loop: true,
    spaceBetween: 0, // Elimina el espacio entre las imágenes
    grabCursor: true,
    effect: "fade", // Agrega efecto de desvanecimiento en la transición
    speed: 800,
    resistanceRatio: 0.75,
    touchRatio: 0.5,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const analisisClinicos = [
    {
        id: 1,
        nombre: "ACIDO URICO",
        descripcion: "El estudio de Ácido Úrico mide sus niveles en sangre o orina. Valores altos pueden indicar gota, enfermedad renal o metabolismo anormal de purinas.",
        precio: 90
    },
    {
        id: 2,
        nombre: "ALANINA AMINO TRANSFERASA (AST, TGP)",
        descripcion: "El estudio de Alanina Aminotransferasa (ALT o TGP) mide una enzima hepática en sangre. Niveles elevados indican daño hepático por hepatitis, cirrosis o medicamentos.",
        precio: 130
    },
    {
        id: 3,
        nombre: "ALBUMIA",
        descripcion: "El estudio de Albúmina mide esta proteína en sangre. Niveles bajos pueden indicar enfermedad hepática, desnutrición o problemas renales.",
        precio: 130
    },
    {
        id: 4,
        nombre: "ANTIDOPING (3 PARAMETROS)",
        descripcion: "El estudio Antidoping (3 parámetros) detecta la presencia de drogas en el organismo, generalmente analizando opiáceos, marihuana y cocaína en orina o sangre.",
        precio: 250
    },
    {
        id: 5,
        nombre: "ANTIGENO CA (OVARIO)",
        descripcion: "El estudio de Antígeno CA-125 mide una proteína en sangre asociada al cáncer de ovario y otras afecciones ginecológicas.",
        precio: 550
    },
    {
        id: 6,
        nombre: "ANTIGENO CA 15-3 (MAMA)",
        descripcion: "El estudio de Antígeno CA-125 mide una proteína en sangre asociada al cáncer de ovario y otras afecciones ginecológicas.",
        precio: 520
    }
]

function abrirmodal() {
    document.getElementById("cart").style.display = "block";
}

function cerrarModal() {
    document.getElementById("cart").style.display = "none";
}

const container = document.getElementById("cards-container");

// Generar tarjetas dinámicamente
analisisClinicos.forEach(estudio => {
    const card = document.createElement("div");
    card.classList.add("swiper-slide"); // Importante para Swiper
    card.innerHTML = `
        <div class="card">
            <h3>${estudio.nombre}</h3>
            <p class="descripcion">${estudio.descripcion}</p>
            <h4>$${estudio.precio} MXN</h4>
            <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
        </div>
    `;
    container.appendChild(card);
});

// Inicializar Swiper
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,  // Número de tarjetas visibles al mismo tiempo
    spaceBetween: 0,  // Espacio entre tarjetas
    centeredSlides: true,
    grabCursor: true,
    speed: 800,
    resistanceRatio: 0.75,
    touchRatio: 0.5,
    navigation: { 
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    }
});


const productos = document.querySelector("#estudios")
const emptyCart = document.querySelector('#emptyCart')

let productArray = [];

document.addEventListener("DOMContentLoaded", function() {
    eventListeners();
});

function eventListeners () {
    productos.addEventListener('click', getDataElements);
    emptyCart.addEventListener('click', function() {
        productArray = [];
        productsHtml();
    });

    const loadProducts = localStorage.getItem('products');
    if (loadProducts) {
        productArray = JSON.parse(loadProducts);
        productsHtml();
    } else {
        productArray = [];
    }

}

function updateCartCounter() {
    const cartCounter = document.querySelector('#cartCount');
    cartCounter.textContent = productArray.length;
}

function updateTotal() {
    let totalProduct = productArray.reduce((total,prod) => total + prod.precio * prod.quantity, 0)
    const total = document.querySelector('#total');
    console.log(totalProduct)
    total.textContent = `$${totalProduct}`
}

function getDataElements (e) {
    if (e.target.classList.contains("btn-add")){
        const elementHtml = e.target.parentElement.parentElement;
        selectData(elementHtml);
    }
}

function saveLocalStorage() {
    localStorage.setItem('products', JSON.stringify(productArray))
}

function selectData (prod) {
    const prodObj = {
        title: prod.querySelector('h3').textContent,
        precio: parseInt(prod.querySelector('h4').textContent.replace("$", "").replace(" MXN", "")),
        id: parseInt(prod.querySelector('button[type="button"]').dataset.id, 10),
        quantity: 1
    }

    const exists = productArray.some(prod => prod.id === prodObj.id);

    if (exists) {
        showAlert('El producto ya esta en el carrito', 'error')
        return;
    }

    productArray.push(prodObj);
    showAlert('El estudio se ha agregado', 'success')
    productsHtml()
}

function productsHtml () {
    cleanHtml();
    updateTotal()
    updateCartCounter();
    productArray.forEach(prod => {
        const { title, precio, id, quantity } = prod
        // Crear la fila <tr>
        const fila = document.createElement("tr");
        // Crear y agregar la celda del nombre del producto
        const tdNombre = document.createElement("td");
        tdNombre.textContent = title;
        fila.appendChild(tdNombre);

        // Crear y agregar la celda del precio
        const tdPrecio = document.createElement("td");
        tdPrecio.classList.add("precio");
        tdPrecio.textContent = `$${precio * quantity}`;
        fila.appendChild(tdPrecio);

        // Crear y agregar la celda del input de cantidad
        const tdCantidad = document.createElement("td");
        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.min = "1";
        inputCantidad.value = quantity;
        inputCantidad.addEventListener("change", () => actualizarCantidad(id, inputCantidad.value));
        tdCantidad.appendChild(inputCantidad);
        fila.appendChild(tdCantidad);

        // Crear y agregar la celda del botón de eliminar
        const tdEliminar = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.addEventListener("click", () => destroyProduct(id));
        tdEliminar.appendChild(btnEliminar);
        fila.appendChild(tdEliminar);

        const contentProducts = document.querySelector("#contentProducts")
        contentProducts.appendChild(fila)
    });

    saveLocalStorage();
}

function actualizarCantidad(id, inputCantidad) {
    const product = productArray.find(prod => prod.id === id);
    if (product && inputCantidad > 0) {
        product.quantity = inputCantidad;
    }
    productsHtml();
}

function destroyProduct(id) {
    productArray = productArray.filter(prod => prod.id !== id);
    showAlert('Se elimino el estudio del carrito', 'error')
    productsHtml();
}

function cleanHtml() {
    contentProducts.innerHTML = '';
}

function showAlert(message, type) {
    const nonRepeatAlert = document.querySelector('.alert');
    if (nonRepeatAlert) nonRepeatAlert.remove();
    const div = document.createElement("div");
    div.classList.add('alert', type);
    div.textContent = message;
    document.body.appendChild(div)
    setTimeout(() => div.remove() , 2000)
}