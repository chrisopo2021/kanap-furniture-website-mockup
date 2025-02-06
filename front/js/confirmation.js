const str = window.location.href;
const url = new URL(str);
const id = url.searchParams.get("id");
console.log(id);

const orderId = document.getElementById("orderId");

// Generate a random order number
const generateOrderNumber = () => {
  return 'ORD-' + Math.floor(Math.random() * 1000000);
};

const randomOrderId = generateOrderNumber();
orderId.innerHTML = randomOrderId;

localStorage.clear();