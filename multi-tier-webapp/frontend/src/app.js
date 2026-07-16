// Replace with your ALB / API Gateway URL after deploy
const API_BASE_URL = window.API_BASE_URL || "https://api.example.com";

document.getElementById("ping").addEventListener("click", async () => {
  const resultEl = document.getElementById("result");
  resultEl.textContent = "Loading...";
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`);
    const data = await res.json();
    resultEl.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultEl.textContent = `Error reaching backend: ${err.message}`;
  }
});
