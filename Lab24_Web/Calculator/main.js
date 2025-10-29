// Ghi nội dung vào input
function press(value) {
  document.getElementById("result").value += value;
}

// Xóa nội dung
function clearResult() {
  document.getElementById("result").value = "";
}

// Tính toán
function calculate() {
  try {
    let output = eval(document.getElementById("result").value);
    document.getElementById("result").value = output;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
