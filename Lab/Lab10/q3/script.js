document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let selectedProducts = [];
    let productCheckboxes = document.querySelectorAll(".product-check");

    productCheckboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            let productName = checkbox.value;
            let price = parseFloat(checkbox.getAttribute("data-price"));
            let quantity = document.querySelectorAll(".quantity")[index].value;
            selectedProducts.push({ name: productName, price: price, quantity: quantity });
        }
    });

    let orderDetails = {
        name: name,
        phone: phone,
        email: email,
        products: selectedProducts
    };

    localStorage.setItem("orderData", JSON.stringify(orderDetails));
    window.location.href = "receipt.html";
});
