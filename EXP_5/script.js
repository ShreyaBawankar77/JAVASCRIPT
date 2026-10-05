// Array of objects
const cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    },
    {
        name: "Headphones",
        price: 3000,
        quantity: 1
    }
];

// Display cart items
function displayCart() {

    let output = "<h2>Cart Items</h2>";

    // forEach() array method
    cart.forEach(function(item) {
        output += `
            <p>
                <b>${item.name}</b> -
                ₹${item.price} × ${item.quantity}
            </p>
        `;
    });

    document.getElementById("cart").innerHTML = output;
}

// Calculate total
function calculateTotal() {

    // map() creates individual item totals
    const itemTotals = cart.map(function(item) {
        return item.price * item.quantity;
    });

    // reduce() calculates the cart total
    const subtotal = itemTotals.reduce(function(total, price) {
        return total + price;
    }, 0);

    // Discount logic
    let discountRate;

    if (subtotal >= 50000) {
        discountRate = 20;
    }
    else if (subtotal >= 30000) {
        discountRate = 15;
    }
    else if (subtotal >= 10000) {
        discountRate = 10;
    }
    else {
        discountRate = 0;
    }

    const discount = subtotal * discountRate / 100;
    const finalTotal = subtotal - discount;

    // Object handling
    const bill = {
        subtotal: subtotal,
        discountRate: discountRate,
        discount: discount,
        finalTotal: finalTotal
    };

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>Bill Summary</h2>

        <p><b>Subtotal:</b> ₹${bill.subtotal.toFixed(2)}</p>

        <p>
            <b>Discount:</b>
            ${bill.discountRate}% 
            (₹${bill.discount.toFixed(2)})
        </p>

        <hr>

        <h3>Final Total: ₹${bill.finalTotal.toFixed(2)}</h3>
    `;

    // Console output
    console.log("Cart:", cart);
    console.log("Subtotal:", subtotal);
    console.log("Discount:", discount);
    console.log("Final Total:", finalTotal);
}

// Call function to display cart
displayCart();
