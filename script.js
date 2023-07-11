//your JS code here. If required.
document.getElementById("sum_btn").addEventListener("click", function() {
      var num1 = parseFloat(document.getElementById("n1").value);
      var num2 = parseFloat(document.getElementById("n2").value);
      var sum = num1 + num2;
      document.getElementById("sum").textContent = sum;
    });