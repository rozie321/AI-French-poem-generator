function generatePoem(response){

    new Typewriter("#poem",{
        strings:response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function displayPoem(event){

    event.preventDefault();
    
    let instructionsInput=document.querySelector("#user-instructions");

    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context =
    "Your are an artistic AI Assistant that narrates French Poems.The poem must be provided in HTML format. Example: <p>this is a joke</p>";
    let prompt = `Generate a  four lines unique and long poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement=document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML=`<div class="blinking-text"> ⏲️Generating a French poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(generatePoem); 

}


let poemgeneratorElement = document.querySelector('#poem-generator');
poemgeneratorElement.addEventListener("submit",displayPoem);