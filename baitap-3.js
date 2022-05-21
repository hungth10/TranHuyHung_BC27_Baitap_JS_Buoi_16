function calcFactorial() {
    // B1 DOM và lấy giá số n
    var numBt3 = +document.querySelector("#num-bt3").value;

    // B2 tính giai thừa
    var f = 1;

    for (var i = 1; i <= numBt3; i++) {
        f *= i;
    } 

    // B3 in ra kết quả
    document.querySelector('#result-bt3').innerHTML = f.toLocaleString();
}