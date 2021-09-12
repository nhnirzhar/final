function findCalculation() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const monthly = document.getElementById("monthlyInternet").value;
    const yearly = document.getElementById("yearlyFee").value;
    const monthly = yearlyFee / 12;


    let value;
    if (age > 50 && yearly > 20000) {
        value = yearly * 0.20;
        text = `Hello ${name}, your incentive amount is <span style="color: red;"> ${value} </span> taka`;
    } else if (age > 30 && (monthlyFee > 250)) {
        value = yearly * 0.15;
        text = `Hello ${name}, your incentive amount is <span style="color: red;"> ${value} </span> taka`;
    } else {
        value = yearly;
        text = `Hello ${name}, your incentive amount is <span style="color: red;"> ${value} </span> taka`;
    }

    document.getElementById("show-details").innerHTML = value;

    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("monthlyInternet").value = '';
    document.getElementById("yearlyFee").value = '';
}