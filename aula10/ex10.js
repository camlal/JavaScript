//getAttribute - Obter o valor do atributo (valor da linha)
//setAttribute - Definir ou modificar o valor 

function changeImage() {
    const img = document.getElementById('myImage'); //Aqui conseguimos arrmazenar o contéudo da immagem
    const currentSrc = img .getAttribute("src"); //Aqui pegamos o atributo src da imagem para trabalhar a troca da mesma

    if (currentSrc === 'img/img1.jpg') { //se a origem atual da imagem for igual a 'img1.jpg' execute algo
        img.setAttribute("src", "img/img2.jpg"); //usando o setAttribute vamos modificar o valor dela, através do src e especificando a outra img
        img.setAttribute("alt", "img2");
    } else { //Caso contrário faça o processo inverso
        img.setAttribute("src", "img/img1.jpg");
        img.setAttribute("alt", "img1");
    }
}

function changeType() {
    const input = document.getElementsByTagName("input")[0];
    const currentType = input.getAttribute("type");

    switch (currentType) {
        case 'text':
            input.setAttribute('type', 'number');
            break;

        case 'number':
            input.setAttribute('type', 'radio');
            break;

        case 'radio':
            input.setAttribute('type', 'range');
            break;

        default:
            input.setAttribute('type', 'text');
    }
}