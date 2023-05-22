function getData() {
  const gameStateData = localStorage.getItem('gameState');
  const arrayStateData = localStorage.getItem('arrayState');
  const themeData = localStorage.getItem('theme');
  const soundData = localStorage.getItem('soundState');
  const stepsData = localStorage.getItem('stepsState');
  const levelData = localStorage.getItem('levelState');
  const bombsData = localStorage.getItem('bombsState');
  const timerData = localStorage.getItem('timerState');
  const flagData = localStorage.getItem('flagState');

  const gameState = gameStateData ? JSON.parse(gameStateData) : {};
  const arrayState = arrayStateData ? JSON.parse(arrayStateData) : {};
  const theme = themeData ? JSON.parse(themeData) : {};
  const sound = soundData ? JSON.parse(soundData) : {};
  const steps = stepsData ? JSON.parse(stepsData) : {};
  const level = levelData ? JSON.parse(levelData) : {};
  const bombs = bombsData ? JSON.parse(bombsData) : {};
  const timer = bombsData ? JSON.parse(timerData) : {};
  const flag = flagData ? JSON.parse(flagData) : {};

  const dataValues = {
    gameState,
    arrayState,
    theme,
    sound,
    steps,
    level,
    bombs,
    timer,
    flag,
  };

  return dataValues;
}

function getGameHistory() {
  const gameHistoryJSON = localStorage.getItem('gameHistory');
  return gameHistoryJSON ? JSON.parse(gameHistoryJSON) : [];
}

export { getData, getGameHistory };
