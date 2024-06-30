const input = document.querySelector('input');

function totalMudou(){
  const p = document.querySelector('p');
  p.innerText = `ganho toatal: ${input.value}`;
}

input.addEventListener('keyup', totalMudou);