var quantity = 1;
var amount = 0;
var price = 60000;

function plus() {
  quantity++;
  amount = quantity*price;
  document.querySelector('#quan').innerHTML = quantity;
  document.querySelector('#total').innerHTML = amount;
  document.querySelector('#payAmount').innerHTML = amount;

}

function minus() {
  quantity--;
  if (quantity <= 1) {
    quantity = 1;
  }
    amount = quantity*price;
  document.querySelector('#quan').innerHTML = quantity;
  document.querySelector('#total').innerHTML = amount;
  document.querySelector('#payAmount').innerHTML = amount;
}

function remove() {
  $('table').hide();
  document.querySelector('#message').innerHTML = "Cart is Empty";
  document.querySelector('#total1').style.display="none";
}
