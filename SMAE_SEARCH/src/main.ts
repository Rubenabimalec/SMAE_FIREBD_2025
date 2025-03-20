import './style.css';
import { buscarCategoria, buscarAlimento, consumirJSON } from '../src/firebase_json.ts';
/*consumirJSON()
  .then((data) => console.log("Resultados de consumir json: ", data))
  .catch((error) => console.error("Error:", error));
*/
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Buscador de Alimentos</h1>
    
    <div>
      <input type="text" id="searchInput" placeholder="Busca por alimento o categoría" />
      <button id="searchButton">Buscar</button>
      <button id="mostrarTodo">Mostrar todos los alimentos</button>
    </div>
    
    <div id="searchResults"></div>
    <div id="allResult"></div>
  </div>
`;

const searchButton = document.querySelector<HTMLButtonElement>('#searchButton')!;
const searchInput = document.querySelector<HTMLInputElement>('#searchInput')!;
const searchResultsDiv = document.querySelector<HTMLDivElement>('#searchResults')!;
const mostrarTodo = document.querySelector<HTMLButtonElement>('#mostrarTodo')!;
const allResultDiv = document.querySelector<HTMLDivElement>('#allResult')!;

// Función para mostrar todos los resultados de consumirJSON()
mostrarTodo.addEventListener('click', async () => {  
  try{
    const todo = await consumirJSON()
    if(todo.length===0){
      allResultDiv.innerHTML='<p>No se encontraron alimentos.</p>'
    }else{
      const resultHTML=todo.map((elemento)=>{
        return `
        <div class="food-item">
        <h3>${elemento.Alimento}</h3>
        <p><strong>Categoria: </strong>${elemento.Categoría}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.AzucarPorEquivalenteG}</p>
        <p><strong>Calcio mg.: </strong>${elemento.Calciomg}</p>
        <p><strong>Carbohidratos: </strong>${elemento.Cantidad}</p>
        <p><strong>Colesterol mg.: </strong>${elemento.Carbohidratos}</p>
        <p><strong>Energía Kcal.: </strong>${elemento.Colesterolmg}</p>
        <p><strong>Etanol g.: </strong>${elemento.EnergíaKcal}</p>
        <p><strong>Fibra: </strong>${elemento.Etanolg}</p>
        <p><strong>Forforo mg.: </strong>${elemento.Fibra}</p>
        <p><strong>Grasa Monoinsaturada g.: </strong>${elemento.Forforomg}</p>
        <p><strong>Grasa Saturada g.: </strong>${elemento.GrasaMonoinsaturadag}</p>
        <p><strong>Hierro mg.: </strong>${elemento.GrasaPoliinsaturadag}</p>
        <p><strong>Hierro mg.: </strong>${elemento.GrasaSaturadag}</p>
        <p><strong>: </strong>${elemento.Hierromg}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.IC}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.IG}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.Lípidos}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.PesoBrutoG}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.PesoNetoG}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.Potasiomg}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.Proteína}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.Selenioug}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.Sodiomg}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.Unidad}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.VitaminaAug}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.ÁcidoAscórbicomg}</p>
        <p><strong>Azucar por equivalente G: </strong>${elemento.ÁcidoFólicoug}</p>

        </div>
        `;
      }).join(' ');//`<p>${elemento.Alimento} (${elemento.Categoría})</p>`).join(' ');
      allResultDiv.innerHTML=resultHTML;
    }

  }catch(error){
    allResultDiv.innerHTML=`<p>Error al obtener los alimentos: ${error}</p>`;
  }
});

// Función para manejar el clic del botón de búsqueda
searchButton.addEventListener('click', async () => {  
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') {
    searchResultsDiv.innerHTML = '<p> ingresa un término de búsqueda.</p>';
    return;
  }

  // Intentar buscar por categoría primero
  try {
    let results;
    if (searchTerm.toLowerCase() === 'verduras' || searchTerm.toLowerCase() === 'frutas') {
      results = await buscarCategoria(searchTerm);
    } else {
      results = await buscarAlimento(searchTerm);
    }

    if (results.length === 0) {
      searchResultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
      const resultHTML = results
        .map((item) => `<p>${item.Alimento} (${item.Categoría})</p>`)
        .join('');
      searchResultsDiv.innerHTML = resultHTML;
    }
  } catch (error) {
    searchResultsDiv.innerHTML = `<p>Error al realizar la búsqueda: ${error}</p>`;
  }
});

