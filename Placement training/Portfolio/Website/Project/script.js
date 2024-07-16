function disableSubmit() {
    document.getElementById('Submit').disabled = true;
}

function activateButton(element) {
    document.getElementById('Submit').disabled = !element.checked;
}

function calculateBagTotal() {
    const productPrices = {
        1: 30000, // TV
        2: 50000, // Refrigerator
        3: 20000  // Mobile
    };

    let quantity = document.getElementById('Quantity').value;
    let product = document.getElementById('product').value;
    let paymentMode = document.getElementById('Mode').value;

    if (quantity && product) {
        let total = productPrices[product] * quantity;

        if (paymentMode == 2) {
            total *= 0.95; // 5% discount for Debit Card
        }

        document.getElementById('Bill').value = total;
    }
}

function calculateCoupon() {
    let bagTotal = document.getElementById('Bill').value;
    let couponCode = "ADI0000";

    if (bagTotal >= 100000) {
        couponCode = "ADI" + bagTotal.toString().substring(0, 4);
    }

    document.getElementById('Coupon').value = couponCode;
}

function calculateFinalAmount() {
    let customerName = document.getElementById('custname').value;
    let email = document.getElementById('Email').value;
    let bagTotal = parseFloat(document.getElementById('Bill').value);
    let couponCode = document.getElementById('Coupon').value;
    let deliveryOption = document.querySelector('input[name="delivery"]:checked').value;
    let deliveryCharge = deliveryOption === "Express" ? 500 : 0;

    let couponValue = parseFloat(couponCode.substring(3));
    let finalAmount = bagTotal - couponValue + deliveryCharge;

    let deliveryTime = deliveryOption === "Express" ? "24" : "72";

    document.getElementById('result').innerHTML = `Dear ${customerName}, Your Final bill is Rs: ${finalAmount}/-. Product will be delivered in next ${deliveryTime} hrs. Invoice Copy is mailed on: ${email}`;

    return false; // to prevent actual form submission
}