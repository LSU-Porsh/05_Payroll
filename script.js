function calculatePay() {
  const name = document.getElementById("employeeName").value.trim();
  const hoursInput = document.getElementById("hoursWorked").value.trim();
  const rateInput = document.getElementById("ratePerHour").value.trim();
  const resultDiv = document.getElementById("result");

  // 1. Prevent empty fields
  if (!name || hoursInput === "" || rateInput === "") {
    resultDiv.style.color = "red";
    resultDiv.innerText = "Error: All fields are required.";
    return;
  }

  const hours = parseFloat(hoursInput);
  const rate = parseFloat(rateInput);

  // 2. Prevent invalid or negative numbers
  if (isNaN(hours) || isNaN(rate) || hours < 0 || rate < 0) {
    resultDiv.style.color = "red";
    resultDiv.innerText = "Error: Hours and rate must be non-negative numbers.";
    return;
  }

  // 3. Calculation & Display on success
  let pay = hours * rate;

  resultDiv.style.color = "black";
  resultDiv.innerText = name + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;