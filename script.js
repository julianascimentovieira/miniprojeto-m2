const form = document.getElementById("form");
const username = document.getElementById("username");
const movie = document.getElementById("movie");
const character = document.getElementById("character");
const gender = document.getElementById("gender");
const date = document.getElementById("date");
let dadosColetados = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

movie.addEventListener("blur", () => {
    checkInputMovie();
});

username.addEventListener("blur", () => {
    checkInputUsername();
});

character.addEventListener("blur", () => {
    checkInputCharacter();
});

gender.addEventListener("blur", () => {
    checkInputGender();
}); 

date.addEventListener("blur", () => {
    checkInputDate();
});

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha o username!")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputMovie(){
    const movieValue = movie.value;
if(movieValue === ""){
        errorInput(movie, "Preencha o nome do filme!")
    } else {
        const formItem = movie.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputCharacter(){
    const characterValue = character.value;

    if(characterValue === ""){
        errorInput(character, "Preencha o nome do personagem!")
    } else {
        const formItem = character.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputGender(){
    const genderValue = gender.value;

    if(genderValue === ""){
        errorInput(gender, "Preencha o gênero do filme!")
    } else {
        const formItem = gender.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputDate(){
    const dateValue = date.value;
    const validationDate = validateDate(dateValue);

    if(!validationDate.isValid){
        errorInput(date, validationDate.errorMessage);
    } else {
        const formItem = date.parentElement;
        formItem.className = "form-content"
    }
}

function validateDate(dateString){
    const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(dateString);
    const errorMessage = isValidDate ? "" : "Data inválida. Por favor, insira uma data no formato AAAA-MM-DD.";
    return {
        isValid: isValidDate,
        errorMessage: errorMessage
    };
}

function checkForm(){
    const isValidUsername = checkInputUsername();
    const isValidMovie = checkInputMovie();
    const isValidCharacter = checkInputCharacter();
    const isValidGender = checkInputGender();
    const isValidDate = checkInputDate();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content";
    });

    if(isValid){
        alert("CADASTRADO COM SUCESSO!");
    } 


if(isValidUsername && isValidMovie && isValidCharacter && isValidGender && isValidDate){
     const dados = {
       username: username.value,
       movie: movie.value,
       character: character.value,
       gender: gender.value,
       date: date.value,
};
        
dadosColetados.push(dados);
     username.value = "";
     character.value = "";
     gender.value = "";
     date.value = "";
        
        alert("CADASTRADO COM SUCESSO!");
        console.log(isValid);
  }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error "
}

function editField(fieldName) {
    const field = document.getElementById(fieldName);
    const formItem = field.parentElement;
    const editButton = formItem.querySelector(".edit-button");
    const errorMessageElement = formItem.querySelector("a");

    formItem.classList.remove("error"); 
    field.focus();
    errorMessageElement.innerText = "";
}


