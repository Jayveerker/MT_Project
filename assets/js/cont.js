let Product = setInterval(productMade, 20);
let count1 = 1;
let Customers = setInterval(customer, 20);
let count2 = 1;
let year = setInterval(years, 97);
let count3 = 1;
let award = setInterval(awards, 60);
let count4 = 1;

function productMade() {
  count1++;
  document.querySelector("#number1").innerHTML = count1 + "k";
  if (count1 == 72) {
    clearInterval(Product);
  }
}

function customer() {
  count2++;
  document.querySelector("#number2").innerHTML = count2 + "k";
  if (count2 == 68) {
    clearInterval(Customers);
  }
}

function years() {
  count3++;
  document.querySelector("#number3").innerHTML = count3;
  if (count3 == 15) {
    clearInterval(year);
  }
}

function awards() {
  count4++;
  document.querySelector("#number4").innerHTML = count4;
  if (count4 == 27) {
    clearInterval(award);
  }
}
