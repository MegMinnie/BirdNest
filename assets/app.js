const botoesCoracao = document.querySelectorAll(".bi-heart");

botoesCoracao.forEach((botaoCoracao) => {
  botaoCoracao.addEventListener("click", () => {
    if (botaoCoracao.classList.contains("bi-heart")) {
      botaoCoracao.classList.remove("bi-heart");
      botaoCoracao.classList.add("bi-heart-fill");
    } else {
      botaoCoracao.classList.add("bi-heart");
      botaoCoracao.classList.remove("bi-heart-fill");
    }
  });
});
