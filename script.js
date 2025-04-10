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
        <span>você pesquisou por: ${produto.item}</span>
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

function listarCategoria() {
  const categoria = document.querySelector('.container_navegacao');
  if (!categoria) return;

  let listaCategoria = null; 

  categoria.addEventListener('click', (event) => {
    event.stopPropagation(); 

    if (!listaCategoria) {
      listaCategoria = document.createElement('div');
      listaCategoria.classList.add('lista_categoria');
      listaCategoria.style.display = 'block';

      listaCategoria.innerHTML = `
        <div class="container_listas">
          <div class="lista_departamentos">
            <ul>
              <li class="texto_lista">Departamento <span> > </span></li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
              <li>Departamento <span> > </span> </li>
            </ul>
          </div>

          <div class="lista_departamentos">
            <ul>
              <li class="texto_lista">Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
            </ul>

            <ul>
              <li class="texto_lista">Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
            </ul>

            <ul>
              <li class="texto_lista">Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
            </ul>
          </div>

          <div class="container_da_foto_card">
            <div class="foto_card">
              <img src="./assets/imagem_xicara_localiza.svg" alt="Produtos Novos" class="imagem_categoria">
            </div>

            <div class="container_texto_card">
              <span>Confira os Produtos Que acabaram De chegar</span>
              </div>
              <button>VER TODOS</button>
            </div>
          </div>
        </div>
      `;

      categoria.appendChild(listaCategoria);
    } else {
      listaCategoria.style.display = listaCategoria.style.display === 'none' ? 'block' : 'none';
    }
  });

  document.addEventListener('click', (event) => {
    if (listaCategoria && !categoria.contains(event.target) && !listaCategoria.contains(event.target)) {
      listaCategoria.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', listarCategoria);


