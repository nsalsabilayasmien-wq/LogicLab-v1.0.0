const KEY = "codequest-progress";

export function saveProgress(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadProgress() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export function clearProgress() {
  localStorage.removeItem(KEY);
}