var btnTranslator = document.querySelector("#translate-btn");
var inputText = document.querySelector("textarea");
var outputText = document.querySelector(".output-div");
var serverURL="https://api.funtranslations.com/translate/navi.json";

function urlDef(text){
    return serverURL + "?text=" + text;
}
function errorHandler(error) {
    alert("Error is occured type error :"+ error);
}
btnTranslator.addEventListener("click", function clickHandler(){
    var input = inputText.value;
    fetch(urlDef(input))
    .then(response => response.json())
    .then(json => {
            var ouput= json.contents.translated;
            outputText.innerText = ouput;
    })
    .catch(errorHandler)
})