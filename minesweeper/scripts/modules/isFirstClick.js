let isFirstClick = false;
let elementId = null;

function updateIsFirstClick(value) {
  isFirstClick = !isFirstClick;
  elementId = value;
}

function returnIsFirstClick() {
  return isFirstClick;
}

function returnElementId() {
  return elementId;
}

export { updateIsFirstClick, returnIsFirstClick, returnElementId };
