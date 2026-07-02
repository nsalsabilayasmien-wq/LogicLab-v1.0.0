import { levels } from "./data/levels.js";
import { state } from "./core/state.js";
import { loadProgress, saveProgress, clearProgress } from "./core/storage.js";
import { renderGameView } from "./ui/gameView.js";

const refs = {
  dashboard: document.getElementById("dashboard"),
  game: document.getElementById("gameScreen"),
  title: document.getElementById("levelTitle"),
  question: document.getElementById("questionBox"),
  input: document.getElementById("answerInput"),
  feedback: document.getElementById("feedback"),
  checkBtn: document.getElementById("checkBtn"),
  hintBtn: document.getElementById("hintBtn"),
  nextBtn: document.getElementById("nextBtn"),
  startBtn: document.getElementById("startBtn"),
  resetBtn: document.getElementById("resetBtn")
};

function showGame(index) {
  state.currentLevel = index;
  refs.dashboard.classList.remove("active");
  refs.game.classList.add("active");

  renderGameView(levels[index], refs, () => {
    if (state.currentLevel < levels.length - 1) {
      showGame(state.currentLevel + 1);
    } else {
      refs.feedback.textContent = "Semua level selesai!";
      refs.nextBtn.disabled = true;
    }
  });
}

refs.startBtn.onclick = () => showGame(state.currentLevel);
refs.resetBtn.onclick = () => {
  clearProgress();
  state.currentLevel = 0;
  state.score = 0;
  saveProgress(state);
  location.reload();
};

const saved = loadProgress();
if (saved) Object.assign(state, saved);