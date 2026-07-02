export function normalizeText(value) {
  return value.trim().toLowerCase();
}

export function validateAnswer(userAnswer, correctAnswer) {
  const normalizedUser = normalizeText(userAnswer);
  const normalizedCorrect = normalizeText(correctAnswer);

  if (!normalizedUser) {
    return { valid: false, message: "Jawaban tidak boleh kosong." };
  }

  if (normalizedUser === normalizedCorrect) {
    return { valid: true, message: "Benar!" };
  }

  return { valid: false, message: "Masih salah, coba lagi." };
}