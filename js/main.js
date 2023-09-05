function hideAllFrames() {
  frameSeller.style.display = "none";
  frameDiferimento.style.display = "none";
  frameFSR.style.display = "none";
  frame6.style.display = "none";
  frame7.style.display = "none";
  frame8.style.display = "none";
  frame9div.style.display = "none";
  frame9.style.display = "none";
  frame10.style.display = "none";
}

// Vendedor - Post Compra Funcionalidades
const seller = document.getElementById("seller");
const frameSeller = document.getElementById("frameSeller");
const link4 =
  "https://docs.google.com/presentation/d/1v4feoFH7cJHis5elol5IbnrwPR1WYMM0-x3a1nh-ZE8/edit#slide=id.g13ebedf89ed_341_0";
seller.addEventListener("click", () => {
  hideAllFrames();
  frameSeller.style.display = "flex";
  frameSeller.src = link4;
});

// FSR
const menuFSR = document.getElementById("menuFSR");
const frameFSR = document.getElementById("frameFSR");
const link5 =
  "https://docs.google.com/presentation/d/1WfNpp3rs8pTXPV0V4kMZ3wBXetA14exz1pZ26ssyWMc/edit#slide=id.p1";
menuFSR.addEventListener("click", () => {
  hideAllFrames();
  frameFSR.style.display = "flex";
  frameFSR.src = link5;
});

// BUG
const menuBUG = document.getElementById("menuBUG");
const frame6 = document.getElementById("frame6");
const link6 =
  "https://docs.google.com/presentation/d/1YdGGQFKiVCKZh1gKpVyIbCW_C42CWS0DvHgvEtcQihw/edit#slide=id.g22d184d4d76_495_3597";
menuBUG.addEventListener("click", () => {
  hideAllFrames();
  frame6.style.display = "flex";
  frame6.src = link6;
});

// Consultar Placa Veículo
const nav7 = document.getElementById("nav7");
const frame7 = document.getElementById("frame7");
const link7 = "https://buscaplacas.com.br/resultado.php?ref=cpcnew";
nav7.addEventListener("click", () => {
  hideAllFrames();
  frame7.style.display = "flex";
  frame7.src = link7;
});

// Outgoing
const nav8 = document.getElementById("nav8");
const frame8 = document.getElementById("frame8");
const frame8frame = document.getElementById("frame8frame");
const link8 =
  "https://docs.google.com/forms/d/e/1FAIpQLSfWz5Kd7r5ADnc_z6z9VwEd1raCPA1IBp6CTcKnZUteehVWAg/viewform";
nav8.addEventListener("click", () => {
  hideAllFrames();
  frame8.style.display = "flex";
  frame8frame.src = link8;
  frame8extra.src = link8extra;
});

// Árvore Transferências
const nav9 = document.getElementById("nav9");
const frame9 = document.getElementById("frame9");
const link9 =
  "https://docs.google.com/spreadsheets/d/1gZUzmgcIbUvftx42l_Ws_6zxzxbv1LA1ZN19fwPaEtY/edit#gid=1208426721";
nav9.addEventListener("click", () => {
  hideAllFrames();
  frame9.style.display = "flex";
  frame9.src = link9;
});

nav9.addEventListener("click", () => {
  hideAllFrames();
  frame9div.style.display = "flex";
  frame9.style.display = "flex";

  frame9.src = link9;

  setTimeout(() => {
    frame9.style.position = "absolute";
    frame9.style.top = "-6vh";
    frame9.style.left = "-0vw";
  }, 3000);
});

// Sauron
const nav10 = document.getElementById("nav10");
const frame10 = document.getElementById("frame10");
const link10 =
  "https://envios.mercadolivre.com.br/logistics/monitoring-distribution/detail/";

nav10.addEventListener("click", () => {
  hideAllFrames();
  frame10.style.display = "flex";
});

const inputField = document.getElementById("inputField");
const frame10frame = document.getElementById("frame10frame");

inputField.addEventListener("paste", (event) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text/plain");
  const numericValue = pastedText.replace(/[^\d]/g, ""); // Remove non-numeric characters
  inputField.value = numericValue;

  // Atualiza o placeholder
  inputField.placeholder = "Número colado: " + numericValue;

  // Atualiza o link do frame10frame
  frame10frame.src = link10 + numericValue;
  alert(link10 + numericValue);
});

inputField.addEventListener("input", () => {
  const numericValue = inputField.value.replace(/[^\d]/g, "");
  inputField.value = numericValue;

  numericValue = "";
});

const diferimento = document.getElementById("diferimento");
const frameDiferimento = document.getElementById("frameDiferimento");
const link11 =
  "https://docs.google.com/spreadsheets/d/1dEEPrRR89lJcgtOOypDYZs5kCl-G90a0ywwt6nEl1PA/edit#gid=1659494052";
diferimento.addEventListener("click", () => {
  hideAllFrames();
  frameDiferimento.style.display = "flex";
  frameDiferimento.src = link11;
  setTimeout(() => {
    frameDiferimento.style.position = "absolute";
    frameDiferimento.style.top = "-20vh";
  }, 5000);
});
