const data = {
  title: '<h1 class="title">Minesweeper Game</h1>',
  flagIcon: '<i data-id="flag" class="fa-solid fa-flag flag-icon"></i>',
  bombIcon: '<i class="fa-solid fa-poo"></i>',
  header: {
    gameRules: '<button>How to play</button>',
    history: '<button>History</button>',
    levels: `<div class="levels-wrapper">
   <label for="level">Level:</label>
      <select id="level" class="level-select">
       <option value="easy">Easy</option>
       <option value="medium">Medium</option>
       <option value="hard">Hard</option>
     </select>
   </div>`,
    bombQuantity: `<div class="bomb-range-wrapper">
    <label for="bombs-quantity">Bombs:</label>
    <input class="bomb-range" type="range" id="bombs-quantity" min="10" max="99" step="1" value="10">
    <output id="rangevalue">10</output>
   </div>`,
    sound: '<div class="sound"><i class="fa-solid fa-volume-high"></i></div>',
    theme: `<div class="theme-wrapper">
    <input type="checkbox" class="theme-checkbox" id="theme-checkbox">
    <label for="theme-checkbox" class="theme-label">
      <i class="fas fa-moon theme-moon-icon"></i>
      <i class="fas fa-sun theme-sun-icon"></i>
      <div class="theme-switcher"></div>
    </label>
  </div>`,
  },
  main: {
    minesQuantity: `<div class="mines-quantity">
    <i class="fa-solid fa-poo bomb-icon"></i>
    <span id="bomb-counter">10</span>
    </div>`,
    flag: `<div role="button" aria-label="Place Flag" tabindex="0" class="button flag-button flag" data-id="flag">
    <i data-id="flag" class="fa-solid fa-flag flag-icon"></i>
    </div>
    </div>`,
    newGameBtn: `<button class="button-new-game" data-id="new-game">
    <img data-id="new-game" class="button-img" src="img/corgi1.png" alt="New game button">
    <span class="button-new-game-text">New game</span>
    </button>`,
    timer: '<div class="timer">00:00</div>',
    steps: '<div class="steps" id="steps">0</div>',
    field: '<div class="filled"></div>',
  },
  modal: {
    modalWindow: `<div class="modal-wrapper">
    <div class="modal" id="modal">
    <i class="fa-solid fa-xmark close-modal" id="close-modal"></i>
    <div class="modal-message" id="modal-message"></div>
    <button class="modal-agree-btn" id="modal-agree-btn">New game</button>
    </div>
    </div>`,
    modalWinMessage: `<p>Hooray! You found all mines in <span class="modal-timer"></span> seconds and <span class="modal-steps"></span> moves!</p>
    <img class="modal-img" src="img/corgiWin.png" alt="">
    `,
    modalLoseMessage: `<p>Game over. Try again</p>
    <img class="modal-img" src="img/corgiLose.png" alt="">
    `,
  },
};

export default data;
