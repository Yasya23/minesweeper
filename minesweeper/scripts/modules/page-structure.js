function createPageStructure() {
  const body = document.querySelector('body');
  body.innerHTML = `
  <h1>Game</h1>
  <main>
  <label for="level">Level:</label>
     <select id="level">
       <option value="easy">Easy</option>
       <option value="meduim">Medium</option>
       <option value="hard">Hard</option>
    </select>
    <label for="bombs-quantity">Bombs:</label>
    <input type="range" id="bombs-quantity" min="10" max="99" step="1">
    <output id="rangevalue">10</output>   
    <div class="wrapper">
      <div class="menu">
        <div class="submenu">
          <div class="mines-quantity">💣 <span id="bomb-counter">10</span></div>
          <div class="button flag" id="flag">🚩</div>
        </div>
        <button class="button-new-game" id="new-game">😁</button>
        <div class="submenu">
          <div class="timer">00:00</div>
          <div class="steps" id="steps">0</div>
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
