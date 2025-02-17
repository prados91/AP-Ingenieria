/*document.addEventListener("DOMContentLoaded", function () {
    // Obtener el ID del proyecto desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get("pid"));

    // Cargar la base de datos
    const script = document.createElement("script");
    script.src = "assets/js/data.js";
    script.onload = function () {
        const project = projects.find((p) => p.pid === projectId);

        // Mostrar la información del proyecto
        if (project) {
            document.getElementById("p_title").textContent = project.title;
            document.getElementById("p_image").src = project.image;
            document.getElementById("p_description").textContent = project.description;
            document.getElementById("p_cat").textContent = project.category;
            document.getElementById("p_date").textContent = project.date;
        } else {
            document.getElementById("p_project-details").innerHTML = "<p>Proyecto no encontrado.</p>";
        }
    };
    document.body.appendChild(script);
});
*/

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el ID del proyecto desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get("pid"));

    // Verificar que el parámetro es válido
    if (isNaN(projectId)) {
        console.error("ID de proyecto no válido");
        return;
    }

    // Cargar la base de datos
    const script = document.createElement("script");
    script.src = "assets/js/data.js";
    script.onload = function () {
        if (typeof projects === "undefined") {
            console.error("No se pudo cargar la base de datos");
            return;
        }

        const project = projects.find((p) => p.pid === projectId);

        // Mostrar la información del proyecto
        if (project) {
            document.getElementById("proyecto-detalle-titulo").textContent = project.title;
            document.getElementById("p_title").textContent = project.title;
            document.getElementById("p_description").textContent = project.description;
            document.getElementById("p_cat").querySelector("span").textContent = project.category;
            document.getElementById("p_date").querySelector("span").textContent = project.date;
        } else {
            document.getElementById("p_project-details").innerHTML = "<p>Proyecto no encontrado.</p>";
        }
    };
    document.body.appendChild(script);
});
