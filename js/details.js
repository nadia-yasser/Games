import { Ui } from "./ui.js";

// Class Details
export class Details{
    constructor(){
        this.ui = new Ui();
        document.querySelector(".btn-close").addEventListener("click", ()=>{
            document.querySelector("section.details").classList.add("d-none");
            document.querySelector("section.games").classList.remove("d-none");
        }); 
    }

    // Display Details Func
    async displayDetail(cardId){
        const load = document.querySelector(".loading");
        load.classList.remove("d-none");
        load.classList.add("d-flex");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${cardId}`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": "0c89e305f4msheaaa263d1bfa429p1ba58djsna051b9b7a6d9",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        };
    
        const response = await fetch(url, options);
        const finalData = await response.json();
        this.ui.displayGameDetails(finalData)
        load.classList.add("d-none");
    }
}

