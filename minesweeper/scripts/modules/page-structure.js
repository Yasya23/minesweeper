function createPageStructure() {
  const body = document.querySelector('body');
  body.innerHTML = `
  <h1>Game</h1>
  <main>
    <div class="wrapper">
      <button class="settings" id="settings">Game settings</button>
      <div class="menu">
        <div class="submenu">
          <div class="mines-quantity">💣 <span id="bomb-counter">10</span></div>
          <div class="button flag" id="flag">🚩</div>
        </div>
        <button class="button-new-game" id="new-game">😁</button>
        <div class="submenu">
          <div class="timer">00:00</div>
          <div class="clicked">0</div>
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
