let mainPage = document.querySelector(".main");

//array of objects
let courses = [
  {
    name: "3D Interface Design",
    details: "minivan",
    category: "Design",
    sale: 20,
    Earning: "$12.00",
    image:
      "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png",
  },
  {
    name: "3D Interface Design",
    details: "minivan",
    category: "Design",
    sale: 150,
    Earning: "$12.00",
    image:
      "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png",
  },
  {
    name: "3D Interface Design",
    details: "minivan",
    category: "Design",
    sale: 15,
    Earning: "$12.00",
    image:
      "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png",
  },
];


let container = document.createElement("div");
container.classList.add("head-page");
mainPage.appendChild(container);

let name = document.createElement("h1");
name.classList.add("name");
container.appendChild(name);
name.textContent = `${courses[0].name}`;

let details = document.createElement("h1");
details.classList.add("details");
container.appendChild(details);
details.textContent = `${courses[0].details}`;

let category = document.createElement("h1");
category.classList.add("category");
container.appendChild(category);
category.textContent = `${courses[0].category}`;

let sale = document.createElement("h1");
sale.classList.add("sale");
container.appendChild(sale);
sale.textContent = `${courses[0].sale}`;

let earning = document.createElement("h1");
earning.classList.add("earning");
container.appendChild(earning);
earning.textContent = `${courses[0].Earning}`;

let image = document.createElement("img");
image.classList.add("image");
container.appendChild(image);
image.setAttribute("src", `${courses[0].image}`);



///////////////////////////////////////////////////////////////////////////////
//sales
var vals = [];
for (var item of courses) {
  vals.push(item.sale); 

if (item.sale>= 20) {
  let container = document.createElement("div");
  container.classList.add("head-page");
  mainPage.appendChild(container);

  let name = document.createElement("h1");
  name.classList.add("name");
  container.appendChild(name);
  name.textContent = `${item.name}`;

  let sale = document.createElement("h1");
  sale.classList.add("sale");
  container.appendChild(sale);
  sale.textContent = `${item.sale}`;


 }}
