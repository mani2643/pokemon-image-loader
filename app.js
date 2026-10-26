const imgElement = document.querySelector('.pokemon-img');
const form = document.querySelector('form');
const input = document.querySelector('input');
const para = document.querySelector('.error p');
const errorDiv = document.querySelector('.error');
const loaderDiv = document.querySelector('.loading');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    para.innerText = "";
    const query = input.value.trim().toLowerCase();
    if(query === ""){
        alert("There is nothing to search");
        return;
    }
    
    imgElement.src = "assets/default_img.png";
    getImage(query);
    input.value = "";
})

async function getImage(query){

    imgElement.classList.add('hidden');
    errorDiv.classList.add('hidden');
    loaderDiv.classList.remove('hidden');
    
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        
        if(!response.ok){
            throw new Error("Pokemon not found!");
        }
        const data = await response.json();
        const img = data.sprites.front_default;
        imgElement.classList.remove('hidden');
        
        imgElement.src = img;
    }catch(error){
        imgElement.classList.add('hidden');
        errorDiv.classList.remove('hidden');
        para.innerText = error.message;
    }finally{
        loaderDiv.classList.add('hidden');
    }
}