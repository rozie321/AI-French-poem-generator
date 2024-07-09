function generatePoem(event){

    new Typewriter("#poem",{
        strings:response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function displayPoem(event){

    event.preventDefault();
    
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context =
    "Your are an artistic AI Assistant that narrates French Poems.The poem must be provided in HTML format. Example: <p>this is a joke</p>";
    let prompt = "Generate a  four lines short and unique poem in French ";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(generatePoem);   
}


let poemgeneratorElement = document.querySelector('#poem-generator');
poemgeneratorElement.addEventListener("submit",displayPoem);