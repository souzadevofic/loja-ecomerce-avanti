const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
  },

  breakpoints: {
    320: { slidesPerView: 3, spaceBetween: 4 }, // Para telas pequenas (celulares)
    768: { slidesPerView: 3, spaceBetween: 5 }, // Para tablets
    1024: { slidesPerView: 4, spaceBetween: 3}, // Para desktops
  },
});

let produtos = [
  { "item": "Camisa" },
  { "item": "Calça" },
  { "item": "Cordão" },
  { "item": "Pulseira" },
  { "item": "Calção" }
];

function inicializarBuscaProduto() {
  const inputBuscar = document.querySelector('.buscar_produto');
  const containerBusca = document.createElement('div');
  containerBusca.classList.add('container_busca_produto');
  containerBusca.style.display = 'none'; 
  inputBuscar.parentNode.appendChild(containerBusca);

  inputBuscar.addEventListener('input', () => {
    const termo = inputBuscar.value.toLowerCase();
    containerBusca.innerHTML = '';

    if (termo) {
      containerBusca.style.display = 'block'; 
      const filtrados = produtos.filter(produto => produto.item.toLowerCase().includes(termo));
      
      filtrados.forEach(produto => {
        const opcao = document.createElement('div');
        opcao.classList.add('opcao_produto');
        opcao.innerHTML = `
        <img class="icone_lupa" src="./assets/lupa.png">
        <span>${produto.item}</span>
        `;
        opcao.addEventListener('click', () => {
          inputBuscar.value = produto.item;
          containerBusca.innerHTML = '';
          containerBusca.style.display = 'none'; 
        });
        containerBusca.appendChild(opcao);
      });
    } else {
      containerBusca.style.display = 'none'; 
    }
  });
}

inicializarBuscaProduto();

// function listarCategoria (){

//   const categoria = querySelector('.container_categoria');
//   const lista_categoria = document.createElement('div');
//   lista_categoria.classList.add('lista_categoria');
//   categoria.parentNode.appendChild(lista_categoria);

//   categoria.addEventListener('categoria', () => {
    
//     lista_categoria.innerHTML += `

    
//     `
//   })
// }
