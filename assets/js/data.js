const projects = [
    {
        pid: 1,
        title: "Celda de palletizado",
        image: "assets/img/project/celda-pallet.png",
        description: "Descripción de celda de palletizado",
        category: "Siemens S7-1500",
        date: "2021",
    },
    {
        pid: 2,
        title: "Encajonador de sobres",
        image: "assets/img/project/casepacker.png",
        description: "Descripción de casepacker",
        category: "Siemens S7-1200",
        date: "2022",
    },
    // Agrega más proyectos aquí
];

// Exportar la variable si se usa en un entorno con módulos
if (typeof module !== "undefined") {
    module.exports = projects;
}
