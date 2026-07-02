import { validateAnswer } from "../core/validator.js";
import { saveProgress } from "../core/storage.js";
import { state } from "../core/state.js";

export function renderGameView(level, refs, onNext) {
  refs.title.textContent = level.title;
  refs.question.textContent = level.question;
  refs.input.value = "";
  refs.feedback.textContent = "";

  refs.checkBtn.onclick = () => {
    const result = validateAnswer(refs.input.value, level.answer);
    refs.feedback.textContent = result.message;

    if (result.valid) {
      state.score += 10;
      saveProgress(state);
      refs.nextBtn.disabled = false;
    }
  };

  refs.hintBtn.onclick = () => {
    refs.feedback.textContent = level.hint;
  };

  refs.nextBtn.onclick = () => onNext();
}