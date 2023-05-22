const data = {
  title: '<h1 class="title">Minesweeper Game</h1>',
  flagIcon: '<i data-id="flag" class="fa-solid fa-flag flag-icon"></i>',
  bombIcon: '<i class="fa-solid fa-poo"></i>',
  header: {
    gameRules: '<button class="game-rule-button" id="game-rule-button">How to play</button>',
    history: '<button class="history-button" id="history-button">History</button>',
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
    sound: '<div class="sound" data-id="sound"><i data-id="sound" class="fa-solid fa-volume-high sound-icon"></i></div>',
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
  sounds: {
    click: 'sounds/click.wav',
    lose: 'sounds/lose.wav',
    win: 'sounds/win.wav',
    flaged: 'sounds/flaged.wav',
    rangeChange: 'sounds/range-change.wav',
    generalClick: 'sounds/general-click.wav',
  },
  history: {
    table: `<table class="table">
    <thead>
      <tr>
       <th class="table-header">Field</th>
       <th class="table-header">Bombs</th>
       <th class="table-header">Time</th>
       <th class="table-header">Steps</th>
     </tr>
     </thead>
   <tbody class="table-body">
   </tbody>
 </table>`,
  },
  instructions: ` <ol class="instrunction">
    <li>The goal of Minesweeper is to uncover all the cells on the grid that do not contain mines, without detonating any of the mines.</li>
    <li>At the beginning of the game, you'll see a grid of cells. Each cell is either empty or contains a mine.
    </li>
    <li>To uncover a cell, simply click on it. If the clicked cell contains a mine, you lose the game. If it's empty, the cell will reveal a number indicating the number of mines adjacent to it.</li>
    <liIf you want to flag a cell as potentially containing a mine, click on the "Flag" button. The button will turn red, indicating that you are in flagging mode. While in flagging mode, you can click on any cell to flag it as a potential mine. The flagged cell will also turn red.</li>
    <li>To remove a flag from a flagged cell, exit the flagging mode by clicking on the "Flag" button again. The button will no longer be active. Then, simply click on the flagged cell to remove the flag. The cell will return to its normal state.</li>
    <li>Use your logical thinking and the numbers on the revealed cells to deduce the locations of mines. The numbers indicate how many mines are adjacent to that cell.</li>
    <li>
    Continue uncovering cells and flagging suspicious ones until you've successfully revealed all the non-mine cells. Be cautious not to click on any mines!</li>
    <li>If you uncover all the safe cells without detonating any mines, you win the game!
    </li>
  </ol>
  <p>Remember, the key strategies in Minesweeper are to analyze the numbers carefully, flag potential mine locations when in flagging mode, and make calculated moves to minimize risks.</p>
  <br>
  <p><b>Enjoy the game and good luck!</b></p>
  <br>
  `,
};

export default data;
