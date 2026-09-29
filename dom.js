let total =0
function addToCart(productName, price) {
    let cart = document.getElementById("cart");
    let item = document.createElement("p");
    let quantity = 1;
    item.innerHTML = productName + " - ₹" + price;
    let minusButton = document.createElement("button");
    minusButton.innerHTML = "-";
    let quantityText = document.createElement("span");
    quantityText.innerHTML = quantity;
    let plusButton = document.createElement("button");  
    plusButton.innerHTML = "+";
    plusButton.onclick = function() {
        quantity = quantity + 1;
        quantityText.innerHTML = quantity;
        total = total + price;
        document.getElementById("total").innerText = total;
    };
    minusButton.onclick = function() {
        if (quantity > 1) {
            quantity = quantity - 1;
            quantityText.innerHTML = quantity;
            total=total+price
            document.getElementById("total").innerHTML=total;
        }
    };
    item.appendChild(minusButton);
    item.appendChild(quantityText);
    item.appendChild(plusButton);
    cart.appendChild(item);
    total = total + price;
    document.getElementById("total").innerText   = total;
}


