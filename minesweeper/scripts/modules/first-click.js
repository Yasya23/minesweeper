let isFirstClick = false;
let elementId = null;

function updateIsFirstClick(value1, value2) {
  isFirstClick = value1;
  elementId = value2;
}

function returnIsFirstClick() {
  return isFirstClick;
}

function returnElementId() {
  return elementId;
}

export { updateIsFirstClick, returnIsFirstClick, returnElementId };
