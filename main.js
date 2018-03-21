console.log("hi");
const travelPlaces = [
    {
        title: "India",
        img: "https://images.unsplash.com/photo-1515004207928-a22c7f92c249?ixlib=rb-0.3.5&s=6f77e988e98f56582d8d4182918c7d65&auto=format&fit=crop&w=709&q=80",
        description: "Taj Mahal"
    },
    {
        title: "France",
        img: "https://images.unsplash.com/photo-1460904041914-f2b315f93560?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55e17befdf3cb41dd7243f1f01021ae2&auto=format&fit=crop&w=634&q=80",
        description: "Eiffel Tower"
    },
    {
        title: "India",
        img: "https://images.unsplash.com/photo-1515004207928-a22c7f92c249?ixlib=rb-0.3.5&s=6f77e988e98f56582d8d4182918c7d65&auto=format&fit=crop&w=709&q=80",
        description: "Taj Mahal"
    },
    {
        title: "India",
        img: "https://images.unsplash.com/photo-1515004207928-a22c7f92c249?ixlib=rb-0.3.5&s=6f77e988e98f56582d8d4182918c7d65&auto=format&fit=crop&w=709&q=80",
        description: "Taj Mahal"
    },
    {
        title: "India",
        img: "https://images.unsplash.com/photo-1515004207928-a22c7f92c249?ixlib=rb-0.3.5&s=6f77e988e98f56582d8d4182918c7d65&auto=format&fit=crop&w=709&q=80",
        description: "Taj Mahal"
    },
   {
        title: "India",
        img: "https://images.unsplash.com/photo-1515004207928-a22c7f92c249?ixlib=rb-0.3.5&s=6f77e988e98f56582d8d4182918c7d65&auto=format&fit=crop&w=709&q=80",
        description: "Taj Mahal"
    }
];

const PrintToDom = (domString, divId) => {
  const PrintTo = document.getElementById(divId);
  PrintTo.innerHTML = domString;
};

const buildDomString = (places) => {
  let domString = "";
  places.forEach((place) => {
    domString += `<div class="card">`;
    domString +=    `<h1>${place.title}</h1>`;
    domString +=    `<img src="${place.img}" alt="">`;
    domString +=    `<h3>${place.description}</h3>`;
    domString +=    `<textarea type="text" cols="20" rows="10" placeholder="type your text here" class="input"></textarea>`;
    domString +=    `<button class="card-button">Submit</button>`;
    domString += `</div>`;
  });
  domString += `<div id="output">Hi</div>`;
  // console.log(domString);
  PrintToDom(domString, "card-holder");
}
buildDomString (travelPlaces);