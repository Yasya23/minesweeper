function createPageStructure() {
  const body = document.querySelector('body');
  body.innerHTML = `
  <h1>Game</h1>
  <main>
    <div class="wrapper">
     <div class="menu">
       <button class="button" id="new-game">New game</button>
     </div>   
      <div class="filled">
      </div>
    </div>
  </main>
  <footer>footer</footer>
  `;
}

export default createPageStructure;
