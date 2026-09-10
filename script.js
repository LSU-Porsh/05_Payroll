function calculatePay() {
  const name = document.getElementById("employeeName").value;
  const hours = parseFloat(document.getElementById("hoursWorked").value);
  const rate = parseFloat(document.getElementById("ratePerHour").value);

  let pay = 0;

  // Calculate overtime if hours exceed 40
  if (hours > 40) {
    pay = (40 * rate) + ((hours - 40) * (rate * 1.5));
  } else {
    pay = hours * rate;
  }

  document.getElementById("result").innerText =
    name + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;