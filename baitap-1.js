// B1 DOM tới thẻ input
var result_bt1 = document.getElementById('result-bt1');

// B2 sử dụng vòng lặp để tính toán
var sum = 0;
var i = 0;

while (sum <= 10000) {
    sum += i;
    if( sum <= 10000) {
        i++
    }
}

// B3 in ra kết quả
result_bt1.innerHTML = `số nguyên dương nhỏ nhất là: ${i}`
