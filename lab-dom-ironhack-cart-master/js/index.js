// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").textContent;
  let quantity = product.querySelector(".quantity input").value;
  let subTotal = product.querySelector(".subtotal span");

  let total = Number(price) * Number(quantity);
  subTotal.innerHTML = total;
  return total;
}

function calculateAll() {
  let totalPrice = 0;
  const products = document.querySelectorAll(".product");

  products.forEach((element) => {
    totalPrice += updateSubtotal(element);
    console.log(updateSubtotal(element));
  });
  document.querySelector("#total-value span").textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  // console.log("The target in remove is:", target);

  const parent = target.closest(".product");
  // console.log(parent)

  parent.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const tableBody = document.querySelector("#cart tbody");
  const product = document.createElement("tr");
  const name = document.querySelector(
    ".create-product input[name='product-name']"
  ).value;
  const price = document.querySelector(
    ".create-product input[name='product-price']"
  ).value;

  product.classList.add("product");
  product.innerHTML = `<td class="name"><span>${name}</span></td>

<td class="price">$<span>${price}</span></td>

<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>

<td class="subtotal">$<span>0</span></td>

<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  product.querySelector(".btn.btn-remove").onclick = removeProduct;
  tableBody.appendChild(product);
  // console.log(`le nom du produit est : ${name}`);
  // console.log(`le prix du produit est : ${price}`);
  // console.log(typeof price);
  // console.log(tableBody);
  // console.log(product);
  // console.log("creation de produit");
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const creatBtn = document.getElementById("create");
  creatBtn.onclick = createProduct;
});
