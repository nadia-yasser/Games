import { Ui } from "./ui.js";
import { Details } from "./details.js";

// Games Class
export class Games {
  constructor() {
    this.getData("mmorpg");
    this.ui = new Ui();
    this.detail = new Details()
    // Catch Data When Click NavBar Links
    const categ = Array.from(document.querySelectorAll(".nav-link"));
    for (let i = 0; i < categ.length; i++) {
      categ[i].addEventListener("click",  (e) => {
        document.querySelector("a.active").classList.remove("active");
        e.target.classList.add("active");
        let catId = e.target.getAttribute("id");
        this.getData(catId);
      });
    }
  }

  // Get API Data
  async getData(cat) {
    const load = document.querySelector(".loading");
    load.classList.remove("d-none");
    load.classList.add("d-flex");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0c89e305f4msheaaa263d1bfa429p1ba58djsna051b9b7a6d9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const finalData = await response.json();
    this.ui.displayGameData(finalData);
    this.cardClick();
    load.classList.add("d-none");
  }

  
  // Diaplay Details When Click Card
  cardClick() {
    let cards = Array.from(document.querySelectorAll(".layer"));
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", (e) => {
        let gameId = e.target.getAttribute("id");
        this.detail.displayDetail(gameId);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
      });
    }
  }
}


