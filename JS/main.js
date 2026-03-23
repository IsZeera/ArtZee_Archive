const contenedor = document.querySelector('.uploadtdh')
const artes = document.querySelector('.uploadtdh')

fetch("./data.json") .then(response => {
    return response.json();
}) .then((data) => { 
    
    data.forEach(art => {
        const instagram = art.data.social.instagram ? `<a href="${art.data.social.instagram}" target="_blank" class="iconoIG">${art.iconoIG}</a>` : "";
        const twitter = art.data.social.twitter ? `<a href="${art.data.social.twitter}" target="_blank" class="iconoTW">${art.iconoTW}</a>` : "";
        const tiktok = art.data.social.tiktok ? `<a href="${art.data.social.tiktok}" target="_blank" class="iconoTT">${art.iconoTT}</a>` : "";

        const article = document.createElement('div')
        article.classList.add('divConteinter')
        article.innerHTML = `
            <img class="imgStyle" 
                src="${art.image}" 
                alt="${art.alt}" 
                title="${art.title}" 
                width="200px" height="300px">

            <div class="backdiv">
                <p class="descriptionartist">${art.artist}</p>
                <div class="socialmedia">
                    ${instagram}
                    ${twitter}
                    ${tiktok}
                </div>
            </div>`
            
    contenedor.appendChild(article)
    })
})








const boton_menu = document.querySelector('.button_btn');
const links = document.querySelector('.link_2_nav');

boton_menu.addEventListener("click", () => {
    links.classList.toggle("active");
    boton_menu.classList.toggle("active")
})





const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

document.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("imgStyle")){
        modal.style.display = "flex";
        modalImg.src = e.target.src;
    }
    
})

modal.addEventListener("click", () => {
    modal.style.display = "none";
})


