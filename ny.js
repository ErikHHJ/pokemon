import {
    bulbasaur,
     ivysaur,
      venusaur,
       charmander,
        charmeleon,
         charizard,
          squirtle,
           wartortle,
            blastoise,
 } from "./pokemon.js";
 const pkmn = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise]
const main = document.querySelector("main");
const centerDiv = document.createElement("div");
const adjustBg = (element, pkmn) => {
    let selectedColor;
    switch (pkmn.type[0]) {
      case 'Water':
        selectedColor = '#0984e3';
        break;
      case 'Fire':
        selectedColor = '#d63031';
        break;
      case 'Grass':
        selectedColor = '#00b894';
        break;
      default:
        selectedColor = 'white';
        break;
    }
    element.style.backgroundColor = selectedColor;
  };
main.classList.add("center");

const renderCards = (arr) => {
    for (let i = 0; i< arr.length; i++ ){
        const pkmn = arr[i];
        const {id, name, type, bilde, base} = pkmn;
        const container = document.createElement("div");
        container.classList.add("container");
        

        const heading = document.createElement("h3");
        heading.innerHTML = name.english;
        ;
        container.appendChild(heading)

        const image = document.createElement("img");
        image.classList.add("pkmnimg");
        let imageArr = Object.values(bilde);
        image.src = imageArr;
        container.appendChild(image);
      

        
        const langHead = document.createElement("h4");

langHead.innerHTML = "Name in other languages";
container.appendChild(langHead);
const langList = document.createElement("ul");
const  jpn = document.createElement("li");
const  cn = document.createElement("li");
const  fr = document.createElement("li");
jpn.innerHTML = name.japanese;
cn.innerHTML = name.chinese;
fr.innerHTML = name.french;
langList.appendChild(jpn)
langList.appendChild(cn)
langList.appendChild(fr)
container.appendChild(langList);

        const separator = document.createElement("hr");
        container.appendChild(separator);
        const typesHead = document.createElement("h3");
        typesHead.innerHTML = "Types:";
        container.appendChild(typesHead);
        const typesList = document.createElement("ul");
        for (let i = 0; i < type.length; i++){
            let li = document.createElement("li")
            li.innerHTML = type[i]
            typesList.appendChild(li);
        }
        container.appendChild(typesList);
        const separator2 = document.createElement("hr");
        container.appendChild(separator2);
        const statsHead = document.createElement("h3");
        statsHead.innerHTML = "Base Stats:"
        container.appendChild(statsHead);
        const statsList = document.createElement("ul");
        const statValues = Object.values(base)
        for (let i = 0; i < statValues.length; i++){
            let li = document.createElement("li");
            switch (i){
                case 0:
                    li.innerHTML = `HP: ${statValues[i]}`
                    break
                case 1:
                    li.innerHTML = `Attack: ${statValues[i]}`
                    break
                case 2:
                    li.innerHTML = `Defense: ${statValues[i]}`
                    break 
                case 3:
                    li.innerHTML = `sp.Attack: ${statValues[i]}`
                    break 
                case 4:
                    li.innerHTML = `sp.Defense: ${statValues[i]}`
                    break
                case 5:
                    li.innerHTML = `Speed: ${statValues[i]}`
                    break   
                default: 
                li.innerHTML = "unknown";
                break;          
            }
            statsList.appendChild(li);


        }
        container.appendChild(statsList);
        
    


        main.appendChild(container);
        adjustBg(container, arr[i])
    }
};
renderCards(pkmn);