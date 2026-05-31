let orderNumber = 1000;

function orderNow(item,price){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name==="" || phone===""){
alert("Please enter Name and Mobile Number");
return;
}

orderNumber++;

alert(
"Order Placed Successfully!\n\n" +
"Order Number: TVS" + orderNumber +
"\nCustomer: " + name +
"\nMobile: " + phone +
"\nItem: " + item +
"\nPrice: ₹" + price
);

let message =
"Order Number: TVS" + orderNumber +
"%0AName: " + name +
"%0AMobile: " + phone +
"%0AItem: " + item +
"%0APrice: ₹" + price;

window.open(
"https://wa.me/919999999999?text=" + message,
"_blank"
);

}
