const hamburgerButton = document.querySelector("#hamburgerButton");
//estamos recuperando o botãoa de hamburguer (fora da div)  

const closeButton = document.querySelector("#closeButton");
//estamos recuperando o botão de fechamento 

const mobileMenu = document.querySelector("#mobileMenu");
//estamos recuperando a div (quando aberta no menu de hamburguer)



hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});