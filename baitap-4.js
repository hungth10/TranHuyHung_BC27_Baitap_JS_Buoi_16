function createDiv() {
  // xử lý logic bằng vòng lặp và in ra kết quả
  for (var i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
      document.querySelector("#result-bt4").innerHTML += `
            <div class="bg-blue">
                div lẻ ${i}
            </div>
            `;
    } else {
      document.querySelector("#result-bt4").innerHTML += `
            <div class="bg-red">
                div chẵn ${i}
            </div>
            `;
    }
  }
}
