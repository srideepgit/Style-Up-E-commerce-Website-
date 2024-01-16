let womensData = [
  {
    image_url:
      "https://sslimages.shoppersstop.com/sys-master/images/h9a/hb0/17098947493918/S21REEGK6777NAV_NAVY.jpg_2000Wx3000H",
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: "Addidas",
  },
  {
    image_url:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/r/e/tr:w-270,/reebok-gr9443_4_46543ce4.jpg?rnd=20200526195200",
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: "Reebok",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71yioaHPZaL._UY550_.jpg",
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: "Addidas",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Sa5WHWJYL.jpg",
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: "Reebok",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fSh-x81kL._UY550_.jpg",
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: "Addidas",
  },
  {
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20220430/f9KU/626c4036f997dd03e28bebb9/-1117Wx1400H-469118640-black-MODEL.jpg",
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
    brand: "Reebok",
  },
  {
    image_url:
      "https://imagescdn.reebok.in/img/app/product/7/766968-8810177.jpg?auto=format&w=204",
    name: "WOMEN'S REEBOK CLASSIC TIGHTS",
    price: 1099,
    strikedoffprice: 1249,
    brand: "Addidas",
  },
  {
    image_url:
      "https://5.imimg.com/data5/WT/DA/HN/ANDROID-19051907/product-jpeg-500x500.jpg",
    name: "UNISEX REEBOK SHOW SHOES",
    price: 1249,
    strikedoffprice: 1489,
    brand: "Reebok",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/I/71-Xu8s-EzS._UY550_.jpg",
    name: "WOMEN'S CLASSIC REEBOK PANTS",
    price: 1459,
    strikedoffprice: 1235,
    brand: "Addidas",
  },
  {
    image_url:
      "http://cdn.shopify.com/s/files/1/0564/9521/0704/products/reebok-essentials-graphic-short-sleeve-womens-running-top-pink-28824854593744.jpg?v=1656373694",
    name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
    price: 849,
    strikedoffprice: 2599,
    brand: "Reebok",
  },
  {
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYU8OGd95zlog3vEEVZ3bGc7EPGkIW7nwRiKJD87T6Znda91vGDAYcAUICnlw86H_mUo&usqp=CAU",
    name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
    price: 1550,
    strikedoffprice: 2599,
    brand: "Addidas",
  },
  {
    image_url:
      "https://rukminim1.flixcart.com/image/832/832/knqd3m80/bra/x/b/4/lightly-padded-m-no-regular-styled-back-gm5610-reebok-original-imag2cmznpggduk9.jpeg?q=70",
    name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
    price: 1399,
    strikedoffprice: 6599,
    brand: "Reebok",
  },
  {
    image_url:
      "https://pa.namshicdn.com/product/A5/37717W/1-zoom-desktop.jpg",
    name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
    price: 949,
    strikedoffprice: 1899,
    brand: "Addidas",
  },
  {
    image_url:
      "data:image/jpeg;base64,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",
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: "Reebok",
  },
  {
    image_url:
      "data:image/jpeg;base64,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",
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: "Addidas",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/713CcHv2yLL._UY550_.jpg",
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: "Reebok",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61m4nJb8e7L._SL1000_.jpg",
    name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
    price: 959,
    strikedoffprice: 1699,
    brand: "Addidas",
  },
  
];

let productscont = document.getElementById("products");

let filterbrand = document.getElementById("filterbrand");

// let cartLS =JSON.parse(localStorage.getItem("cart-page"))||[]
let cartArr = JSON.parse(localStorage.getItem('cartData')) || []
window.addEventListener('load', function () {
  cartItems()
})
function displayProducts(womensData) {
  productscont.innerHTML = "";

  womensData.forEach(function (element, index) {
    let product = document.createElement("div");

    let img = document.createElement("img");
    img.src = element.image_url;

    let name = document.createElement("h5");
    name.innerText = element.name;
    // div for both price
    let pricediv = document.createElement("div");

    let price = document.createElement("p");
    price.innerText = "Rs." + " " + element.price;

    let strikedoffprice = document.createElement("p");
    strikedoffprice.innerText = "   ₹." + " " + element.strikedoffprice;

    pricediv.append(price, strikedoffprice);

    let brand = document.createElement("p");
    brand.innerText = element.brand;

    let AddTocart = document.createElement("button");
    AddTocart.innerText = "Add To Cart";
    AddTocart.addEventListener("click", function(){
      AddTocartFun(element,index)
    })
    product.append(img, name, pricediv, brand, AddTocart);
    productscont.append(product);
  });
}
displayProducts(womensData);

filterbrand.addEventListener("change", function () {
  if (filterbrand.value === "All") {
    displayProducts(womensData);
  } else {
    let filtered = womensData.filter(function (element) {
      return element.brand === filterbrand.value;
    });
    displayProducts(filtered);
  }
});

function handlepricesort() {
  let sortprice = document.querySelector("#sortprice").value;
  
  if (sortprice == "LowToHigh") {
    let filter = womensData.sort(function (a, b) {
      return a.price - b.price;
    });
    displayProducts(filter);
  }
  if (sortprice == "HighToLow") {
    let filter = womensData.sort(function (a, b) {
      return b.price - a.price;
    });
    displayProducts(filter);
  }
}

function AddTocartFun(ele){
  let flag = false
for (let i = 0; i < cartArr.length; i++) {
  if (cartArr[i].name == ele.name) {
    cartArr[i].quantity++
    cartArr[i].cartprice = ele.price * cartArr[i].quantity
    flag = true
    alert(`Product ${ele.name} Added to Cart ${cartArr[i].quantity} Times`)
  }
}
if (!flag) {
  ele.quantity = 1
  ele.cartprice = ele.price * ele.quantity
  cartArr.push(ele)
  alert(`Product ${ele.name} Added to Cart Succesfuly`)
}
localStorage.setItem('cartData', JSON.stringify(cartArr))
cartItems()
}
function cartItems(){
  let temp = JSON.parse(localStorage.getItem('cartData')) || []
  let items=0
  temp.forEach(function(ele){
    items+=ele.quantity
  })
  document.getElementById("cart-items").innerText=items
}