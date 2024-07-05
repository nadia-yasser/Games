export class Ui {
 
  // Display Games
    displayGameData(data){
      let gamesList = ``;
      for (let i = 0; i < data.length; i++) {
        gamesList += `
          <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="inner">
                  <div class="card bg-transparent p-3 pb-0 position-relative">
                    <img
                      src="${data[i].thumbnail}"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body text-center">
                      <div
                        class="d-flex justify-content-between align-items-center text-white fs-6"
                      >
                        <h5>${data[i].title}</h5>
                        <span class="text-white text-capitalize">free</span>
                      </div>
                      <p class="text-white opacity-50 short-desc">
                      ${data[i].short_description.split(" ", 8)}
                      </p>
                    </div>
                    <div
                      class="card-footer d-flex justify-content-between text-white px-0"
                    >
                      <span>${data[i].genre}</span>
                      <span>${data[i].platform}</span>
                    </div>
                    <div class="layer w-100 h-100 position-absolute top-0 start-0 bg-transparent"  id="${data[i].id}"></div>
                  </div>
                </div>
              </div>
          `;
      }
      document.querySelector(".game-data").innerHTML = gamesList;
    }
      
    

  // Display Game Details
  displayGameDetails(data) {
    let gamesDetail = `
    <div class="col-md-4">
            <div class="inner">
              <img src="${data.thumbnail}" alt="" class="w-100" />
            </div>
          </div>
          <div class="col-md-8 game-details" >
            <div class="inner text-white">
                <p>Title :
                ${data.title}
                </p>
                <p><strong>Category : </strong>
                <span class="text-black text-uppercase bg-info rounded-1">${data.genre}</span>
                </p>
                <p><strong>Platform : </strong>
                    <span class="text-black text-capitalize bg-info rounded-1">${data.platform}</span>

                </p>
                <p><strong>status : </strong>
                    <span class="text-black text-capitalize bg-info rounded-1">${data.status}</span>

                </p>
                <p class="game-desc">
                ${data.description}
                </p>
                <a class="btn border-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
          </div>
    `;
    document.querySelector(".game-details").innerHTML = gamesDetail;
  }
  
}

