function createHeader() {
  const gameRules = '<button>How to play</button>';
  const history = '<button>History</button>';
  const levels = `<div class="levels-wrapper">
   <label for="level">Level:</label>
      <select id="level" class="level-select">
       <option value="easy">Easy</option>
       <option value="meduim">Medium</option>
       <option value="hard">Hard</option>
     </select>
   </div>`;
  const bombQuantity = `<div class="bomb-range-wrapper">
    <label for="bombs-quantity">Bombs:</label>
    <input class="bomb-range" type="range" id="bombs-quantity" min="10" max="99" step="1" value="10">
    <output id="rangevalue">10</output>
   </div>`;
  const sound = '<div class="sound"><i class="fa-solid fa-volume-high"></i></div>';
  const theme = '<div>Theme</div>';
  const headerContent = [gameRules, history, levels, bombQuantity, sound, theme].join('');
  const header = `<header class="header"> 
    <div class="header-wrapper">${headerContent}</div>
  </header>`;
  return header;
}

function createMainContent() {
  const minesQuantity = `<div class="mines-quantity">
    <i class="fa-solid fa-poo bomb-icon"></i>
    <span id="bomb-counter">10</span>
  </div>`;
  const flag = `<div role="button" aria-label="Place Flag" tabindex="0" class="button flag-button flag" data-id="flag">
  <i data-id="flag" class="fa-solid fa-flag flag-icon"></i>
   </div>
  </div>`;
  const newGameBtn = `<button class="button-new-game" data-id="new-game">
   <img data-id="new-game" class="button-img" src="img/corgi1.png" alt="New game button">
   <span class="button-new-game-text">New game</span>
  </button>`;
  const timer = '<div class="timer">00:00</div>';
  const steps = '<div class="steps" id="steps">0</div>';
  const menu = `<div class="menu">
  <div class="submenu">
    ${minesQuantity}
    ${flag}
    ${newGameBtn}
  <div class="submenu">
    ${timer}
    ${steps}
  </div>
 </div>`;
  const field = '<div class="filled"></div>';
  const main = `<main>
   <div class="wrapper">
    ${menu}
    ${field}
   </div>
  </main>`;
  return main;
}

function createModalsWindow() {
  const modal = `<div class="modal-wrapper">
  <div class="modal" id="modal">
  <i class="fa-solid fa-xmark close-modal" id="close-modal"></i>
  <div class="modal-message" id="modal-message"></div>
  <button class="modal-agree-btn" id="modal-agree-btn">New game</button>
  </div>
  </div>`;
  return modal;
}

function createPageStructure() {
  const body = document.querySelector('body');
  const header = createHeader();
  const main = createMainContent();
  const title = '<h1 class="title">Game</h1>';
  const footer = '<footer>footer</footer>';
  const modal = createModalsWindow();
  body.innerHTML = `
  ${header}
  ${title}
  ${main}
  ${footer}
  ${modal}
  `;
}

export default createPageStructure;
