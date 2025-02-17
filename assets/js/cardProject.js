document.addEventListener("DOMContentLoaded", function () {
    // Verificar si `projects` está disponible
    if (typeof projects === "undefined") {
        console.error("No se pudo cargar la base de datos");
        return;
    }

    const projectContainer = document.getElementById("project-container");
    const filterContainer = document.getElementById("project-filters");

    if (!projectContainer || !filterContainer) {
        console.error("No se encontraron los contenedores necesarios");
        return;
    }

    // Obtener tecnologías únicas y convertirlas en filtros
    const uniqueTechs = [...new Set(projects.map((p) => p.tech.toLowerCase()))];

    // Agregar filtros dinámicamente
    uniqueTechs.forEach((tech) => {
        const filterItem = document.createElement("li");
        filterItem.textContent = tech.charAt(0).toUpperCase() + tech.slice(1); // Capitaliza el primer carácter
        filterItem.setAttribute("data-filter", `.filter-${tech}`);
        filterContainer.appendChild(filterItem);
    });
    const projectsToShow = projects.slice(0, 10);

    projectsToShow.forEach((project) => {
        // Crear la tarjeta
        const projectCard = document.createElement("div");
        projectCard.classList.add(
            "col-lg-4",
            "col-md-6",
            "project-item",
            "isotope-item",
            `filter-${project.tech.toLowerCase()}`
        );

        // Estructura interna de la tarjeta
        projectCard.innerHTML = `
            <img src="${project.images[0]}" class="img-fluid" alt="${project.title}">
            <div class="project-info">
                <h4>${project.title}</h4>
                <a href="${project.images[0]}" title="${project.title}" data-gallery="project-gallery-app" class="glightbox preview-link">
                    <i class="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html?pid=${project.pid}" title="More Details" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                </a>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        projectContainer.appendChild(projectCard);
    });
});
