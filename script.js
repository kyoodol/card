function drawCharacter() {
  const canvas = document.getElementById("avatarCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  // subtle background circle
  ctx.beginPath();
  ctx.arc(w / 2, h / 2 + 8, 94, 0, Math.PI * 2);
  ctx.fillStyle = "#d9f99d";
  ctx.fill();

  const cx = w / 2;
  const cy = h / 2 + 6;

  // face
  ctx.beginPath();
  ctx.ellipse(cx, cy + 2, 58, 74, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#fde8d0";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#334155";
  ctx.stroke();

  // short military hair
  ctx.beginPath();
  ctx.moveTo(cx - 50, cy - 32);
  ctx.quadraticCurveTo(cx, cy - 60, cx + 52, cy - 30);
  ctx.quadraticCurveTo(cx + 16, cy - 46, cx - 50, cy - 32);
  ctx.fillStyle = "#0f172a";
  ctx.fill();

  // sideburns
  ctx.beginPath();
  ctx.rect(cx - 54, cy - 20, 5, 24);
  ctx.rect(cx + 49, cy - 20, 5, 24);
  ctx.fillStyle = "#0f172a";
  ctx.fill();

  // sunglasses frame
  ctx.lineWidth = 3.5;
  ctx.strokeStyle = "#020617";
  ctx.fillStyle = "#0b1324";

  ctx.beginPath();
  ctx.roundRect(cx - 50, cy - 12, 40, 26, 9);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.roundRect(cx + 10, cy - 12, 40, 26, 9);
  ctx.fill();
  ctx.stroke();

  // sunglasses bridge
  ctx.beginPath();
  ctx.moveTo(cx - 10, cy + 1);
  ctx.lineTo(cx + 10, cy + 1);
  ctx.lineWidth = 4;
  ctx.stroke();

  // sunglass shine
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "#475569";
  ctx.beginPath();
  ctx.moveTo(cx - 44, cy - 5);
  ctx.lineTo(cx - 20, cy - 5);
  ctx.moveTo(cx + 16, cy - 5);
  ctx.lineTo(cx + 40, cy - 5);
  ctx.stroke();

  // eyebrows
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 42, cy - 22);
  ctx.lineTo(cx - 18, cy - 27);
  ctx.moveTo(cx + 18, cy - 27);
  ctx.lineTo(cx + 42, cy - 22);
  ctx.strokeStyle = "#111827";
  ctx.stroke();

  // nose
  ctx.beginPath();
  ctx.moveTo(cx, cy + 4);
  ctx.lineTo(cx - 4, cy + 16);
  ctx.lineTo(cx + 4, cy + 16);
  ctx.strokeStyle = "#475569";
  ctx.stroke();

  // confident smile
  ctx.beginPath();
  ctx.arc(cx, cy + 28, 15, 0.12 * Math.PI, 0.88 * Math.PI);
  ctx.strokeStyle = "#7f1d1d";
  ctx.stroke();

  // neck
  ctx.beginPath();
  ctx.rect(cx - 12, cy + 60, 24, 18);
  ctx.fillStyle = "#f7d4b6";
  ctx.fill();

  // battle uniform body
  ctx.beginPath();
  ctx.moveTo(cx - 68, cy + 86);
  ctx.quadraticCurveTo(cx, cy + 52, cx + 68, cy + 86);
  ctx.lineTo(cx + 68, h);
  ctx.lineTo(cx - 68, h);
  ctx.closePath();
  ctx.fillStyle = "#556b2f";
  ctx.fill();

  // collar
  ctx.beginPath();
  ctx.moveTo(cx - 16, cy + 79);
  ctx.lineTo(cx, cy + 92);
  ctx.lineTo(cx + 16, cy + 79);
  ctx.closePath();
  ctx.fillStyle = "#4b5f28";
  ctx.fill();

  // uniform pockets
  ctx.fillStyle = "#4f612d";
  ctx.fillRect(cx - 44, cy + 98, 28, 18);
  ctx.fillRect(cx + 16, cy + 98, 28, 18);
  ctx.strokeStyle = "#374151";
  ctx.lineWidth = 1;
  ctx.strokeRect(cx - 44, cy + 98, 28, 18);
  ctx.strokeRect(cx + 16, cy + 98, 28, 18);

  // camouflage pattern accents
  ctx.fillStyle = "#6b7f3b";
  ctx.beginPath();
  ctx.ellipse(cx - 40, cy + 128, 10, 6, 0.5, 0, Math.PI * 2);
  ctx.ellipse(cx - 8, cy + 110, 9, 5, -0.3, 0, Math.PI * 2);
  ctx.ellipse(cx + 28, cy + 126, 11, 6, 0.2, 0, Math.PI * 2);
  ctx.ellipse(cx + 2, cy + 146, 13, 7, -0.5, 0, Math.PI * 2);
  ctx.fill();
}

async function copyEmail() {
  const email = "kyoodol@mail.com";
  const toast = document.getElementById("toast");

  try {
    await navigator.clipboard.writeText(email);
    if (toast) toast.textContent = "이메일이 복사되었습니다.";
  } catch (error) {
    if (toast) toast.textContent = "복사 권한이 없어 수동 복사가 필요합니다.";
  }
}

function bindEvents() {
  const copyBtn = document.getElementById("copyBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    copyEmail();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  drawCharacter();
  bindEvents();
});
