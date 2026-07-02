import { levels } from "./data/levels.js";
import { state } from "./core/state.js";
import { validateAnswer } from "./core/validator.js";
import { saveProgress } from "./core/storage.js";
import { renderGameView } from "./ui/gameView.js";

function showLevel(index) {
  state.currentLevel = index;
  renderGameView(levels[index], refs);
}

refs.checkBtn.addEventListener("click", () => {
  const level = levels[state.currentLevel];
  const result = validateAnswer(refs.input.value, level.answer);

  refs.feedback.textContent = result.message;

  if (result.valid) {
    state.score += 10;
    saveProgress(state);
    refs.nextBtn.disabled = false;
  }
});

refs.hintBtn.addEventListener("click", () => {
  refs.feedback.textContent = levels[state.currentLevel].hint;
});

refs.nextBtn.addEventListener("click", () => {
  if (state.currentLevel < levels.length - 1) {
    showLevel(state.currentLevel + 1);
  } else {
    refs.feedback.textContent = "Semua level selesai!";
  }
});