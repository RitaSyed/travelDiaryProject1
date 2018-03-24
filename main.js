const travelPlaces = [
    {
        title: "India",
        img: "https://images.unsplash.com/photo-1515004207928-a22c7f92c249?ixlib=rb-0.3.5&s=6f77e988e98f56582d8d4182918c7d65&auto=format&fit=crop&w=709&q=80",
        description: "Taj Mahal"
    },
    {
        title: "France",
        img: "https://images.unsplash.com/photo-1460904041914-f2b315f93560?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55e17befdf3cb41dd7243f1f01021ae2&auto=format&fit=crop&w=600&q=60",
        description: "Eiffel Tower"
    },
    {
        title: "Russia",
        img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fce300c2a97366451fee4528e72bf3dd&auto=format&fit=crop&w=687&q=80",
        description: "Kremlin"
    },
    {
        title: "Egypt",
        img: "http://destinationspoint.net/wp-content/uploads/2014/06/Pyramids-of-Giza-Egypt1.jpg",
        description: "Egyptian pyramids"
    },
    {
        title: "USA Cities",
        img: "https://blog.vegas.com/wp-content/uploads/2016/04/Welcome-to-Vegas.jpg",
        description: "Las Vegas"
    },
   {
        title: "England",
        img: "https://i.pinimg.com/originals/a6/73/28/a673285b9000c515972d9f5954d26283.jpg",
        description: "The University of Cambridge"
    }
];

const PrintToDom = (domString, divId) => {
  const PrintTo = document.getElementById(divId);
  PrintTo.innerHTML += domString;
};

const buildDomString = (places) => {
  let domString = "";
  places.forEach((place) => {
    domString += `<div class="card">`;
    domString +=    `<h1>${place.title}</h1>`;
    domString +=    `<img src="${place.img}" alt="">`;
    domString +=    `<h3>${place.description}</h3>`;
    domString +=    `<textarea type="text" cols="40" rows="5" placeholder="type your text here" class="input"></textarea>`;
    domString +=    `<button class="card-button">Submit</button>`;
    domString += `</div>`;
  });
  PrintToDom(domString, "card-holder");
}

const cardHolderDiv = document.getElementById("card-holder");
 cardHolderDiv.addEventListener("click", (e) => {
  if(e.target.className == "card-button"){
    changeCardToGreen(e);
    buildCardOutput(e);
   } //close if statement
  });

const changeCardToGreen = (e) => {
  let card = e.target.parentNode;
  let button = e.target;
  let cardColorGreen = card.classList.add('green');
  if(!cardColorGreen){
      button.classList.add('gray');
  }
};


const buildCardOutput = (e) => {
  let input = e.target.previousElementSibling.value;
  e.target.previousElementSibling.value="";
  let time = new Date();
  let title = e.target.parentNode.firstElementChild.textContent;
  let string = "";
  string += `<div id="card-output">`;
  string +=    `<h2>${title}</h1>`;
  string +=    `<p class="card-entry">${input}</p>`;
  string +=    `<p>${time}</p>`;
  string +=     `<button class="edit-button">Edit</button>`;
  string +=     `<button class="delete-button">Delete</button>`;
  string += `</div>`;
  PrintToDom(string, "main-output");
};

const mainOutput = document.getElementById("main-output");
 mainOutput.addEventListener("click", (e) => {
   let cardOutput = e.target.parentNode;
  if(e.target.className == "delete-button"){
    mainOutput.removeChild(cardOutput);
   } //close if statement
   else if(e.target.className == "edit-button"){
     let cardEntry = e.target.previousElementSibling.previousElementSibling;
     let cardEntryText = e.target.previousElementSibling.previousElementSibling.innerHTML;
     let editTextarea = document.createElement("textarea");
     editTextarea.setAttribute('class', "edit-textarea");
     editTextarea.setAttribute('cols', "60");
     editTextarea.setAttribute('rows', "5");
      editTextarea.value=cardEntryText;
     cardOutput.replaceChild(editTextarea, cardEntry);
   }
  });


buildDomString (travelPlaces);