function calcSum() {
    // B1 DOM và lấy giá trị của x và n
    var numX = +document.querySelector("#num-x").value;
    var numN = +document.querySelector("#num-y").value;

    // B2 tính tổng
    var sum = 0;
    for (var i = 1; i <= numN; i++) {
        sum += numX ** i;
    }

    // B3 in ra kết quả
    document.querySelector("#result-bt2").innerHTML = `
    Tổng là: ${sum}`
}


