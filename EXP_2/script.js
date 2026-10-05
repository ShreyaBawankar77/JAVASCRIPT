function calculateBill() {

    // var - function scoped variable
    var customerName = document.getElementById("name").value;

    // let - block scoped variables
    let itemName = document.getElementById("item").value;
    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);

    // const - cannot be reassigned
    const gstRate = Number(document.getElementById("gst").value);

    // Calculate bill
    let subtotal = quantity * price;
    let gstAmount = subtotal * gstRate / 100;
    let total = subtotal + gstAmount;

    // Destructuring
    let bill = {
        customer: customerName,
        item: itemName,
        quantity: quantity,
        total: total
    };

    let { customer, item, quantity: qty, total: finalAmount } = bill;

    // Template literal
    let message = `
        <h2>Bill Details</h2>
        <p><b>Customer Name:</b> ${customer}</p>
        <p><b>Item:</b> ${item}</p>
        <p><b>Quantity:</b> ${qty}</p>
        <p><b>Price per Item:</b> ₹${price.toFixed(2)}</p>
        <p><b>Subtotal:</b> ₹${subtotal.toFixed(2)}</p>
        <p><b>GST (${gstRate}%):</b> ₹${gstAmount.toFixed(2)}</p>
        <hr>
        <h3>Total Bill: ₹${finalAmount.toFixed(2)}</h3>
    `;

    document.getElementById("result").innerHTML = message;

    // Console methods
    console.log("Customer:", customer);
    console.log("Item:", item);
    console.log("Total Bill:", finalAmount);
}
