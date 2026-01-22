
function openModal(src, alt) {
    document.getElementById("imageModal").classList.remove("hidden");
    updateImage(src, alt);
}
function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
}

function updateImage(src, alt) {
    const img = document.getElementById("projectImage");
    img.src = src;
    img.alt = alt;
}

function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden");
}
