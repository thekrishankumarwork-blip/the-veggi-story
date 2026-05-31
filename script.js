let orderNumber = 1000;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
button.addEventListener("click", () => {
orderNumber++;

alert(
"Order Placed Successfully!\n\nOrder Number: TVS" +
orderNumber
);
});
});
