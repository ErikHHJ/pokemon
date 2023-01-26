
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
 
 
 const selectedPokemon = wartortle; 
 const statlist = document.querySelector("#statlist")
 const typelist = document.querySelector("#typelist")
 const langList = document.querySelector("#langlist")
 const selectedimage = document.querySelector("#image")
 let imageArr = Object.values(selectedPokemon.bilde)
 selectedimage.src = imageArr

 const statLi = statlist.querySelectorAll("li")
 for(let i = 0; i < statLi.length; i++){
   let statArr = Object.values(selectedPokemon.base)
statLi[i].innerHTML = `${statLi[i].innerHTML} ${statArr[i]}`;  
 }
const langLi = langList.querySelectorAll("li")
for(let i = 0; i < langLi.length; i++){
    let langArr = Object.values(selectedPokemon.name);
    langLi[i].innerHTML = `${langArr[i]}`;
}
const typeLi = typelist.querySelectorAll("li")
 for(let i = 0; i < typeLi.length; i++){
   let typeArr = Object.values(selectedPokemon.type)
typeLi[i].innerHTML = ` ${typeArr[i]}`;  
 }
 let langArr = Object.values(selectedPokemon.name)
 console.log(langArr)
 const adjustBg = (pkmn) => {
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
    document.body.style.backgroundColor = selectedColor;
  };
  
  adjustBg(selectedPokemon);
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(para);
  document.body.appendChild(para);
 