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
    },
    autoplay: {
        delay: 3000, // Cambia de slide cada 3 segundos
        disableOnInteraction: false // Sigue reproduciéndose aunque el usuario interactúe
    }
});



function abrirmodal() {
    document.getElementById("cart").style.display = "block";
}

function cerrarModal() {
    document.getElementById("cart").style.display = "none";
}

const marcadoresTumorales = [
    {
        id: 1,
        nombre: "Antígeno ovárico (Ca)",
        descripcion: "El antígeno CA-125 es un marcador tumoral utilizado principalmente para monitorear el cáncer de ovario y algunas afecciones ginecológicas.",
        precio: 470
    },
    {
        id: 2,
        nombre: "Antígeno Ca 15-3 (Mama)",
        descripcion: "El antígeno CA 15-3 es un marcador tumoral asociado al cáncer de mama y se utiliza para monitorear su progresión o recurrencia.",
        precio: 440
    },
    {
        id: 3,
        nombre: "Antígeno Ca 19-9 (Colon y páncreas)",
        descripcion: "El antígeno CA 19-9 es un marcador tumoral utilizado para el diagnóstico y monitoreo del cáncer de páncreas y algunos tipos de cáncer de colon.",
        precio: 440
    },
    {
        id: 4,
        nombre: "Antígeno Ca 21-1 (Pulmón)",
        descripcion: "El antígeno CA 21-1 es un biomarcador utilizado para el seguimiento de algunos tipos de cáncer de pulmón, especialmente el carcinoma de células no pequeñas.",
        precio: 1420
    },
    {
        id: 5,
        nombre: "Antígeno carcinoembrionario (CEA)",
        descripcion: "El antígeno carcinoembrionario (CEA) es un marcador tumoral empleado en la detección y monitoreo de diversos tipos de cáncer, incluyendo colorrectal y pulmonar.",
        precio: 360
    },
    {
        id: 6,
        nombre: "Alfa Feto Proteína (AFP)",
        descripcion: "La Alfa Feto Proteína (AFP) es un marcador tumoral usado para detectar cáncer de hígado y ciertas afecciones fetales durante el embarazo.",
        precio: 330
    },
    {
        id: 7,
        nombre: "Antígeno Prostático (PSA)",
        descripcion: "El Antígeno Prostático Específico (PSA) es una proteína producida por la próstata. Su análisis es útil para detectar y monitorear el cáncer de próstata.",
        precio: 350
    }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const marcadores = document.getElementById("marcadoresTumorales");

// Genera las tarjetas dinámicamente
marcadoresTumorales.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    marcadores.appendChild(card);
});

const cultivos = [
    {
        id: 8,
        nombre: "Exudado faríngeo",
        descripcion: "Prueba de laboratorio para detectar infecciones bacterianas en la garganta, como faringitis estreptocócica.",
        precio: 380
    },
    {
        id: 9,
        nombre: "Exudado vaginal",
        descripcion: "Prueba utilizada para detectar infecciones vaginales causadas por bacterias, hongos o parásitos.",
        precio: 380
    },
    {
        id: 10,
        nombre: "Urocultivo",
        descripcion: "Análisis microbiológico de la orina para identificar infecciones del tracto urinario y determinar el agente causal.",
        precio: 380
    },
    {
        id: 11,
        nombre: "Cultivos Diversos",
        descripcion: "Pruebas de cultivo para identificar microorganismos en diversas muestras clínicas según la necesidad del paciente.",
        precio: null // Precio no especificado
    }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const cultivo = document.getElementById("cultivos");

// Genera las tarjetas dinámicamente
cultivos.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    cultivo.appendChild(card);
});

const bioquimicaClinica = [
    { id: 12, nombre: "Química Sanguínea de 3 elementos", descripcion: "Mide glucosa, creatinina y urea en sangre.", precio: 130 },
    { id: 13, nombre: "Química Sanguínea de 4 elementos", descripcion: "Incluye glucosa, creatinina, urea y ácido úrico.", precio: 210 },
    { id: 14, nombre: "Química Sanguínea de 5 elementos", descripcion: "Añade colesterol y triglicéridos a los 3 elementos básicos.", precio: 290 },
    { id: 15, nombre: "Química Sanguínea de 6 elementos", descripcion: "Incluye glucosa, creatinina, urea, colesterol, triglicéridos y ácido úrico.", precio: 370 },
    { id: 16, nombre: "Perfil Hepático (PFH)", descripcion: "Evalúa la función del hígado mediante diferentes enzimas y proteínas.", precio: 460 },
    { id: 17, nombre: "Albumina", descripcion: "Proteína producida por el hígado, importante para la función hepática y nutricional.", precio: 80 },
    { id: 18, nombre: "Ácido úrico", descripcion: "Mide los niveles de ácido úrico en sangre, útil para diagnosticar gota y enfermedades renales.", precio: 90 },
    { id: 19, nombre: "Bilirrubinas (BT, BD, BI)", descripcion: "Evaluación de la bilirrubina total, directa e indirecta en sangre.", precio: 290 },
    { id: 20, nombre: "Colesterol", descripcion: "Mide el colesterol total en sangre.", precio: 90 },
    { id: 21, nombre: "Colesterol y Triglicéridos", descripcion: "Evalúa los niveles de colesterol y triglicéridos para el control cardiovascular.", precio: 165 },
    { id: 22, nombre: "Creatinina", descripcion: "Indicador de la función renal.", precio: 80 },
    { id: 23, nombre: "Depuración de Creatinina", descripcion: "Evalúa la capacidad del riñón para filtrar creatinina de la sangre.", precio: 250 },
    { id: 24, nombre: "Depuración de Creatinina/Proteinuria 24 hrs", descripcion: "Mide creatinina y proteínas en orina recolectada durante 24 horas.", precio: 560 },
    { id: 25, nombre: "Proteinuria 24 hrs", descripcion: "Evalúa la presencia de proteínas en orina de 24 horas.", precio: 290 },
    { id: 26, nombre: "Proteínas en muestra única de orina", descripcion: "Mide proteínas en una sola muestra de orina.", precio: 260 },
    { id: 27, nombre: "Deshidrogenasa Láctica", descripcion: "Enzima utilizada para evaluar daño tisular.", precio: 200 },
    { id: 28, nombre: "Electrolitos Séricos 2 (Na y K)", descripcion: "Mide los niveles de sodio y potasio en sangre.", precio: 260 },
    { id: 29, nombre: "Electrolitos Séricos (Cl, Na y K)", descripcion: "Incluye cloro, sodio y potasio.", precio: 290 },
    { id: 30, nombre: "Electrolitos Séricos (Cl, Na, K y Ca)", descripcion: "Añade calcio a la medición de electrolitos.", precio: 350 },
    { id: 31, nombre: "Electrolitos Séricos (Ca, P y Mg)", descripcion: "Mide calcio, fósforo y magnesio en sangre.", precio: 290 },
    { id: 32, nombre: "Electrolitos Séricos (Cl, Na, K, Ca, P y Mg)", descripcion: "Incluye seis electrolitos importantes para el equilibrio del cuerpo.", precio: 460 },
    { id: 33, nombre: "Glucosa", descripcion: "Mide los niveles de azúcar en sangre.", precio: 80 },
    { id: 34, nombre: "Hemoglobina Glicosilada (HbA1C)", descripcion: "Evalúa el promedio de glucosa en sangre en los últimos 3 meses.", precio: 350 },
    { id: 35, nombre: "Perfil Cardiaco", descripcion: "Incluye TGO, TGP, DHL, Ck y CkMB para evaluar la función cardiaca.", precio: 740 },
    { id: 36, nombre: "Perfil de Lípidos", descripcion: "Incluye colesterol total, LDL, HDL y triglicéridos.", precio: 270 },
    { id: 37, nombre: "Triglicéridos", descripcion: "Mide los niveles de triglicéridos en sangre.", precio: 80 },
    { id: 38, nombre: "Urea", descripcion: "Evalúa la función renal a través del nivel de urea en sangre.", precio: 90 }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const bio = document.getElementById("bio");

// Genera las tarjetas dinámicamente
bioquimicaClinica.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    bio.appendChild(card);
});

const serologia = [
    { 
        id: 39, 
        nombre: "Antiestreptolisinas", 
        descripcion: "Esta prueba mide la cantidad de anticuerpos contra la estreptolisina O, una toxina producida por la bacteria Streptococcus del grupo A. Se utiliza para detectar infecciones previas por estreptococo y evaluar posibles complicaciones como la fiebre reumática o la glomerulonefritis.", 
        precio: 140 
    },
    { 
        id: 40, 
        nombre: "Proteína C Reactiva", 
        descripcion: "Mide la concentración de proteína C reactiva (PCR) en sangre, un marcador de inflamación. Se usa para detectar infecciones, enfermedades autoinmunes y evaluar el riesgo cardiovascular.", 
        precio: 80 
    },
    { 
        id: 41, 
        nombre: "Prueba Inmunológica de Embarazo (PIE)", 
        descripcion: "Detecta la presencia de la hormona gonadotropina coriónica humana (hCG) en sangre, lo que permite confirmar un embarazo con alta precisión.", 
        precio: 100 
    },
    { 
        id: 42, 
        nombre: "Reacciones Febriles", 
        descripcion: "Prueba utilizada para detectar la presencia de anticuerpos contra bacterias que causan enfermedades febriles como fiebre tifoidea, brucelosis y rickettsiosis. Se emplea en el diagnóstico de infecciones sistémicas.", 
        precio: 140 
    },
    { 
        id: 43, 
        nombre: "VDRL", 
        descripcion: "Examen serológico para la detección de sífilis. Identifica anticuerpos generados por la infección con Treponema pallidum, el agente causante de la sífilis.", 
        precio: 110 
    },
    { 
        id: 44, 
        nombre: "VIH", 
        descripcion: "Prueba de detección de anticuerpos contra el virus de inmunodeficiencia humana (VIH). Se usa para el diagnóstico temprano y control del VIH/SIDA.", 
        precio: 110 
    }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const sero = document.getElementById("serologia");

// Genera las tarjetas dinámicamente
serologia.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    sero.appendChild(card);
});

const hematologiaYCoagulacion = [
    { 
        id: 45, 
        nombre: "Biometría Hemática", 
        descripcion: "Este estudio mide los componentes de la sangre, como los glóbulos rojos, glóbulos blancos y plaquetas. Se usa para detectar anemia, infecciones, trastornos de la sangre y otros problemas de salud.", 
        precio: 90 
    },
    { 
        id: 46, 
        nombre: "Grupo Sanguíneo y RH", 
        descripcion: "Prueba que determina el tipo de sangre de una persona (A, B, AB o O) y su factor Rh (positivo o negativo). Es importante para transfusiones de sangre y durante el embarazo.", 
        precio: 45 
    },
    { 
        id: 47, 
        nombre: "Velocidad de Sedimentación Globular (VSG)", 
        descripcion: "Examen que mide la rapidez con la que los glóbulos rojos se sedimentan en un tubo de ensayo. Se utiliza como un indicador de inflamación en el cuerpo.", 
        precio: 45 
    },
    { 
        id: 48, 
        nombre: "Eosinófilos en Moco Nasal", 
        descripcion: "Estudio que mide la cantidad de eosinófilos (un tipo de glóbulo blanco) en el moco nasal. Se utiliza para evaluar alergias respiratorias o infecciones parasitarias.", 
        precio: 80 
    },
    { 
        id: 49, 
        nombre: "Tiempos de Coagulación", 
        descripcion: "Conjunto de pruebas que miden la capacidad de la sangre para coagularse adecuadamente. Se emplea para diagnosticar trastornos de coagulación como la hemofilia o para evaluar el riesgo de sangrado.", 
        precio: 140 
    }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const hemtologia = document.getElementById("hematologia");

// Genera las tarjetas dinámicamente
hematologiaYCoagulacion.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    hemtologia.appendChild(card);
});

const orinaYCoprologia = [
    { 
        id: 50, 
        nombre: "Estudio General de Orina", 
        descripcion: "Prueba que analiza las propiedades físicas y químicas de la orina. Se utiliza para detectar infecciones urinarias, problemas renales y trastornos metabólicos.", 
        precio: 80 
    },
    { 
        id: 51, 
        nombre: "Coproparasitoscópico (1)", 
        descripcion: "Estudio que examina una muestra de heces para detectar la presencia de parásitos intestinales y sus huevos. Se realiza para diagnosticar infecciones parasitarias.", 
        precio: 80 
    },
    { 
        id: 52, 
        nombre: "Coproparasitoscópico (3)", 
        descripcion: "Similar al coproparasitoscópico (1), pero se analizan tres muestras de heces para obtener resultados más precisos en la detección de parásitos intestinales.", 
        precio: 130 
    },
    { 
        id: 53, 
        nombre: "Coprológico", 
        descripcion: "Estudio más completo que incluye análisis microbiológicos y parasitológicos de las heces para evaluar la función intestinal, detectar infecciones y otros trastornos digestivos.", 
        precio: 270 
    },
    { 
        id: 54, 
        nombre: "Espermatobioscopía (Conteo de espermatozoides)", 
        descripcion: "Examen que evalúa la calidad y cantidad de espermatozoides en una muestra de semen. Se utiliza para diagnosticar problemas de fertilidad masculina.", 
        precio: 290 
    }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const orina = document.getElementById("orina");

// Genera las tarjetas dinámicamente
orinaYCoprologia.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    orina.appendChild(card);
});

const hormonas = [
    { 
        id: 55, 
        nombre: "Perfil Ginecológico/Ovárico 5 (LH, FSH, E2, PRL, PRG)", 
        descripcion: "Examen que evalúa las hormonas luteinizante (LH), folículo estimulante (FSH), estradiol (E2), prolactina (PRL) y progesterona (PRG), que son fundamentales para la función ovárica y la salud reproductiva de la mujer.", 
        precio: 870 
    },
    { 
        id: 56, 
        nombre: "Perfil Ginecológico/Ovárico 6 (LH, FSH, E2, PRL, PRG, TESTOSTERONA)", 
        descripcion: "Similar al perfil ginecológico ovárico 5, pero incluye también la medición de la testosterona, una hormona importante para la función ovárica y la salud reproductiva en mujeres.", 
        precio: 940 
    },
    { 
        id: 57, 
        nombre: "Perfil Tiroideo", 
        descripcion: "Estudio que evalúa la función de la glándula tiroides mediante la medición de diversas hormonas. Ayuda a diagnosticar trastornos como hipotiroidismo o hipertiroidismo.", 
        precio: 460 
    },
    { 
        id: 58, 
        nombre: "TSH, T3L, T4L", 
        descripcion: "Análisis que mide los niveles de la hormona estimulante de tiroides (TSH), la triyodotironina libre (T3L) y la tiroxina libre (T4L). Son esenciales para evaluar el funcionamiento de la tiroides.", 
        precio: 350 
    },
    { 
        id: 59, 
        nombre: "Hormona Gonadotropina", 
        descripcion: "Prueba que mide los niveles de la hormona gonadotropina, esencial en la regulación de las funciones reproductivas y para la evaluación de fertilidad.", 
        precio: 350 
    }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const hormona = document.getElementById("hormonas");

// Genera las tarjetas dinámicamente
hormonas.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    hormona.appendChild(card);
});

const perfiles = [
    { 
        id: 60, 
        nombre: "Perfil General 1", 
        descripcion: "Incluye Biometría Hemática, Química Sanguínea, Examen General de Orina, Colesterol y Triglicéridos. Utilizado para una evaluación general de la salud.", 
        precio: 380 
    },
    { 
        id: 61, 
        nombre: "Perfil General 2", 
        descripcion: "Incluye Biometría Hemática, Química Sanguínea, Examen General de Orina y Perfil de Lípidos. Se utiliza para evaluar el perfil lipídico y la función general del organismo.", 
        precio: 490 
    },
    { 
        id: 62, 
        nombre: "Perfil Prenupcial/Por Persona", 
        descripcion: "Contiene VIH, VDRL y Grupo Sanguíneo. Este perfil es recomendado antes del matrimonio o para evaluar la salud reproductiva y las posibles infecciones.", 
        precio: 330 
    },
    { 
        id: 63, 
        nombre: "Perfil Pre-Operatorio", 
        descripcion: "Incluye Biometría Hemática, Química Sanguínea, Tiempos de Coagulación y Grupo Sanguíneo. Es utilizado para evaluar la preparación del cuerpo para una cirugía.", 
        precio: 350 
    },
    { 
        id: 64, 
        nombre: "Perfil Control de Embarazo 1", 
        descripcion: "Incluye Biometría Hemática, Química Sanguínea, Examen General de Orina, VIH, VDRL y Grupo Sanguíneo. Este perfil es recomendado durante el embarazo para monitorear la salud de la madre y el bebé.", 
        precio: 460 
    },
    { 
        id: 65, 
        nombre: "Perfil Control de Embarazo 2", 
        descripcion: "Contiene Biometría Hemática, Química Sanguínea y Examen General de Orina. Utilizado en el seguimiento del embarazo para monitorear la salud de la madre.", 
        precio: 250 
    },
    { 
        id: 66, 
        nombre: "Perfil Reumático", 
        descripcion: "Incluye Factor Reumatoide, Antiestreptolisinas, PCR, VSG y Ácido Úrico. Se utiliza para el diagnóstico de enfermedades autoinmunes y trastornos reumáticos.", 
        precio: 360 
    },
    { 
        id: 67, 
        nombre: "Perfil Control Diabético", 
        descripcion: "Contiene Química Sanguínea, Examen General de Orina y Hemoglobina Glicosilada. Es un perfil utilizado para el monitoreo del control de la diabetes.", 
        precio: 480 
    }
];

// Selecciona el contenedor donde se agregarán las tarjetas
const perfil = document.getElementById("perfiles");

// Genera las tarjetas dinámicamente
perfiles.forEach(estudio => {
    const card = document.createElement("li");
    card.classList.add("card"); // Usa la clase adecuada para mantener el diseño
    card.innerHTML = `
        <h3>${estudio.nombre}</h3>
        <p class="descripcion">${estudio.descripcion}</p>
        <h4>$${estudio.precio} MXN</h4>
        <button class="btn-add" type="button" data-id="${estudio.id}">Agregar al carrito</button>
    `;
    perfil.appendChild(card);
});

const productos = document.querySelector("#estudios")
const emptyCart = document.querySelector('#emptyCart')

// Carrito


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
    total.textContent = `$${totalProduct}`
}

function getDataElements (e) {
    if (e.target.classList.contains("btn-add")) {
        const productItem = e.target.closest('li'); // Encontramos el <li> correspondiente al producto
        selectData(productItem); // Pasamos el <li> al selector de datos
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

//Carousel de Estudios

// Selecciona todos los carruseles y sus botones de navegación dentro de cada sección
document.querySelectorAll(".wrapper").forEach(wrapper => {
    const carousel = wrapper.querySelector(".carousel");
    const arrowBtns = wrapper.querySelectorAll("i"); // Obtiene los botones de navegación dentro del wrapper
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;

    let isDragging = false, startX, startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    // Agrega los eventos a los botones de navegación del wrapper actual
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "prev" ? -firstCardWidth : firstCardWidth;
        });
    });

    // Agrega eventos de arrastre solo al carrusel dentro del wrapper actual
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
});
