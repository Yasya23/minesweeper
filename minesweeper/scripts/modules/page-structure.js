function createPageStructure() {
  const body = document.querySelector('body');
  body.innerHTML = `
  <h1>Game</h1>
  <main>
    <div class="wrapper">
     <div class="menu">
       <div class="button mines-quantity">💣 10</div>
       <div class="button flag">🚩</div>
       <button class="button button-new-game" id="new-game">😁</button>
       <div class="button timer">00:00</div>
       <div class="button settings">
         <i class="fa-solid fa-gear"></i>
       </div>
     </div>   
      <div class="filled">
      </div>
    </div>
  </main>
  <footer>footer</footer>
  `;
}

export default createPageStructure;
