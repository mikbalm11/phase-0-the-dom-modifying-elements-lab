// Write your code here!

const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";

element.textContent = "You've changed what's on the screen!";

element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog";

//<main id="main" class="pet-listing dog"></main>

element.classList.remove("dog");
element.classList.add("cat", "sale");

//<main id="main" class="pet-listing cat sale"></main>

const ul = document.getElementsByTagName("ul")[0];
//const secondChild = ul.querySelector("li:nth-child(2)");
//ul.removeChild(secondChild);

main.remove();

const newHeader = document.createElement("h1");
newHeader.innerHTML = `<h1>"YOUR-NAME is the champion"</h1>`;
newHeader.id = "victory";
