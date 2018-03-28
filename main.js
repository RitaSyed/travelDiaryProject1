const travelPlaces = [
    {
        title: "India",
        img: "/pictures/India.jpg",
        description: "Taj Mahal"
    },
    {
        title: "France",
        img: "/pictures/France.jpg",
        description: "Eiffel Tower"
    },
    {
        title: "Russia",
        img: "/pictures/Russia.jpg",
        description: "Kremlin"
    },
    {
        title: "Egypt",
        img: "/pictures/Egypt.jpg",
        description: "Egyptian pyramids"
    },
    {
        title: "USA Cities",
        img: "/pictures/USA.jpg",
        description: "Las Vegas"
    },
   {
        title: "England",
        img: "/pictures/England.jpg",
        description: "The University of Cambridge"
    }
];

//prints all the cards and cards entries to DOM
const PrintToDom = (domString, divId) => {
  const PrintTo = document.getElementById(divId);
  PrintTo.innerHTML += domString;
};

//builds each card from travelPlaces array of objects
const buildDomString = (places) => {
  let domString = "";
  places.forEach((place) => {
    domString += `<div class="card">`;
    domString +=    `<h1>${place.title}</h1>`;
    domString +=    `<img src="${place.img}" alt="">`;
    domString +=    `<h3>${place.description}</h3>`;
    domString +=    `<textarea type="text" placeholder="diary entry" class="input"></textarea>`;
    domString +=    `<button class="card-button">Submit</button>`;
    domString += `</div>`;
  });
  PrintToDom(domString, "card-holder");
}

//adds event listeners for all the buttons on the page
const addAllEventListeners = () =>{
  const cardHolderDiv = document.getElementById("card-holder");
  const mainOutput = document.getElementById("main-output");

    cardHolderDiv.addEventListener("click", (e) => {
      if(e.target.classList.contains("card-button")){
        
        buildCardOutput(e);
        changeCardToGreen(e);
       }
    });
    mainOutput.addEventListener("click", (e) => {
      if(e.target.classList.contains("delete-button")){
        removesDiaryEntry(e, mainOutput);
      } //close if statement
        else if(e.target.classList.contains("edit-button")){
        editDiaryEntry(e);
        }
    });
}

//changes card's background and button colors when clicked submit
const changeCardToGreen = (e) => {
  let button = e.target;
  let card = button.parentNode;
  card.classList.add('green');
  button.classList.add('grey');
};

//shows date of each diary card entry
const timestamp = (e) => {
   let time = new Date();
   return time;
}


//builds diary card entries
const buildCardOutput = (e) => {
  let input = e.target.previousElementSibling.value;
  e.target.previousElementSibling.value="";
  let title = e.target.parentNode.firstElementChild.textContent;
  let string = "";
  string += `<div id="card-output">`;
  string +=    `<h2>${title}</h1>`;
  string +=    `<p class="card-entry">${input}</p>`;
  string +=    `<p>${timestamp()}</p>`;
  string +=     `<button class="edit-button">Edit</button>`;
  string +=     `<button class="delete-button">Delete</button>`;
  string += `</div>`;
  PrintToDom(string, "main-output");
};

//removes card entry using delete button
const removesDiaryEntry = (e, mainOutput) => {
  let cardOutput = e.target.parentNode;
  mainOutput.removeChild(cardOutput);
  }

//edits card entry using edit button
const editDiaryEntry = (e) => {
  let cardOutput = e.target.parentNode;
  let cardEntry = cardOutput.children[1];
  let cardEntryText = cardEntry.innerHTML;
  let editTextareEl = document.createElement("textarea");
  editTextareEl.setAttribute('class', "edit-textarea");
  editTextareEl.value=cardEntryText;
  cardOutput.replaceChild(editTextareEl, cardEntry);
}

const startApplication = () => {
  buildDomString (travelPlaces);
  addAllEventListeners();;
};

startApplication();

