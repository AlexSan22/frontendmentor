document.addEventListener("DOMContentLoaded", () => {
  getAdvices();
});


const tpl = document.getElementById("template");
const fragment = document.createDocumentFragment();
const container = document.getElementById("app");
const API_URL = `https://api.adviceslip.com/advice`;

const getAdvices = async () => {
  try {
    let id, advice;
    const respuesta = await fetch(`${API_URL}`);
    const data = await respuesta.json();
    for (const key in data) {
      const elements = data[key];
      id = elements.id;
      advice = elements.advice;
    }
    const clone = tpl.content.cloneNode(true);
    clone.querySelector("h1").textContent = `ADVICE # ${id}`;
    clone.querySelector("p").textContent = advice;
    fragment.appendChild(clone);
    container.appendChild(fragment);
  } catch (error) {
    console.log(error);
  }
};

container.addEventListener('click', (e) => {
    if(e.target && e.target.tagName === 'IMG'){
      getAdvices()
    }
})

