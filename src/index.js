
function displayPoem(event){
    event.preventDefault();

    new Typewriter("#poem",{
        strings:"the poem is fantastic",
        autoStart: true,
        delay: 1,
        cursor: "",


    });
}



let poemgeneratorElement = document.querySelector('#poem-generator');
poemgeneratorElement.addEventListener("submit",displayPoem);