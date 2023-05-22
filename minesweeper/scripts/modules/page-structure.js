import data from './data.js';

function createHeader() {
  const {
    gameRules, history, levels, bombQuantity, sound, theme,
  } = data.header;

  const headerContent = [gameRules, history, levels, bombQuantity, sound, theme].join('');
  const header = `<header class="header"> 
    <div class="header-wrapper">${headerContent}</div>
  </header>`;
  return header;
}

function createMainContent() {
  const {
    minesQuantity, flag, newGameBtn, timer, steps, field,
  } = data.main;
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
  const main = `<main>
   <div class="wrapper">
    ${menu}
    ${field}
   </div>
  </main>`;
  return main;
}

function createModalsWindow() {
  const { modalWindow } = data.modal;
  return modalWindow;
}

function createPageStructure() {
  const body = document.querySelector('body');
  const header = createHeader();
  const main = createMainContent();
  const titleHtml = data.title;
  const modal = createModalsWindow();
  body.innerHTML = `
  ${header}
  ${titleHtml}
  ${main}
  ${modal}
  `;
}

export default createPageStructure;
