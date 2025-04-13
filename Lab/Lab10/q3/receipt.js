document.addEventListener("DOMContentLoaded", function() {
    let orderData = JSON.parse(localStorage.getItem("orderData"));

    if (orderData) {
        let receiptHTML = `
            <p><strong>Name:</strong> ${orderData.name}</p>
            <p><strong>Phone:</strong> ${orderData.phone}</p>
            <p><strong>Email:</strong> ${orderData.email}</p>
            <h3>Ordered Products:</h3>
            <ul>
        `;

        let totalPrice = 0;
        orderData.products.forEach(product => {
            let productTotal = product.price * product.quantity;
            totalPrice += productTotal;
            receiptHTML += `<li>${product.name} - ${product.quantity} kg - $${productTotal}</li>`;
        });

        receiptHTML += `</ul><h3>Total Price: $${totalPrice}</h3>`;
        document.getElementById("receipt").innerHTML = receiptHTML;
    }
});
