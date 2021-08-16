// Ten skrypt pobiera string User-Agent, opisujący daną przeglądarkę i wkleja go do HTML
const uaString = window.navigator.userAgent;

// Poczekaj, aż dokument się załaduje
window.onload = () => {
  // Pobierz element o id ua-string i wstaw do niego informacje o przeglądarce
  document.getElementById('ua-string').textContent = uaString;
};
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36