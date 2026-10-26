const imgElement = document.querySelector('.pokemon-img');
const form = document.querySelector('form');
const input = document.querySelector('input');
<<<<<<< HEAD
const para = document.querySelector('.error p');
const errorDiv = document.querySelector('.error');
const loaderDiv = document.querySelector('.loading');
=======
const para = document.querySelector('p');
>>>>>>> 7462c196f7bc134cb0467905372363289d151db1

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
<<<<<<< HEAD

    imgElement.classList.add('hidden');
    errorDiv.classList.add('hidden');
    loaderDiv.classList.remove('hidden');
    
=======
>>>>>>> 7462c196f7bc134cb0467905372363289d151db1
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        
        if(!response.ok){
            throw new Error("Pokemon not found!");
        }
        const data = await response.json();
        const img = data.sprites.front_default;
<<<<<<< HEAD
        imgElement.classList.remove('hidden');
        
        imgElement.src = img;
    }catch(error){
        imgElement.classList.add('hidden');
        errorDiv.classList.remove('hidden');
        para.innerText = error.message;
    }finally{
        loaderDiv.classList.add('hidden');
    }
=======
        
        imgElement.src = img;
    }catch(error){
        para.innerText = error.message;
    }   
>>>>>>> 7462c196f7bc134cb0467905372363289d151db1
}