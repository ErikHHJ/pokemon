export const lsArr = []
if (!localStorage.getItem("favourites")){
    console.log("item does not exist, writing now");
    localStorage.setItem("favourites" , JSON.stringify(lsArr));
}