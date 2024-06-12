const button = document.querySelector('button');
const cores = document.querySelector('select');

function mudarCor() {
    button.style.backgroundColor = cores.value;
}
