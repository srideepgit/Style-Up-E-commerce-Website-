let mensData = [
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/7/799267-9419170.jpg?auto=format&w=400.625',
      name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      price: 1170,
      type: 'shoes',
      strikedoffprice: 2599,
      brand: 'Addidas',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/800134-9439268.jpg?auto=format&w=400.625',
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: 699,
      type: 'flips',
      strikedoffprice: 999,
      brand: 'Reebok',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/858824-10117944.jpg?auto=format&w=400.625',
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      type: 'shoes',
      strikedoffprice: 2099,
      brand: 'Addidas',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/800131-9439174.jpg?auto=format&w=400.625',
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      type: 'flips',
      strikedoffprice: 799,
      brand: 'Reebok',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/816443-9752419.jpg?auto=format&w=400.625',
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      type: 'shoes',
      strikedoffprice: 3599,
      brand: 'Addidas',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/859613-10138560.jpg?auto=format&w=400.625 ',
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      type: 'shoes',
      strikedoffprice: 3199,
      brand: 'Reebok',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/7/798014-9391960.jpg?auto=format&w=400.625 ',
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      type: 'pants',
      strikedoffprice: 3199,
      brand: 'Addidas',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/7/767093-8811900.jpg?auto=format&w=400.625',
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
      type: 'tshirts',
      strikedoffprice: 1099,
      brand: 'Reebok',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/others/cat_1x1.png',
      name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: 1299,
      type: 'tshirts',
      strikedoffprice: 1440,
      brand: 'Addidas',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/800135-9439310.jpg?auto=format&w=400.625',
      name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
      price: 699,
      type: 'flips',
      strikedoffprice: 999,
      brand: 'Reebok',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/858903-10119042.jpg?auto=format&w=400.625 ',
      name: "MEN'S REEBOK RUNNING RUN SHOES  ",
      price: 1620,
      type: 'shoes',
      strikedoffprice: 3599,
      brand: 'Addidas',
    },
    {
      image_url:
        'https://imagescdn.reebok.in/img/app/product/8/816442-9752385.jpg?auto=format&w=400.625 ',
      name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
      price: 1620,
      type: 'shoes',
      strikedoffprice: 3599,
      brand: 'Reebok',
    },
  ]
  // This is done by Nirmal
  // displayPage function start
  
  let cartData = JSON.parse(localStorage.getItem('cartData')) || []
  window.addEventListener('load', function () {
    cartItems()
  })
  function displayPage(mensData) {
    document.querySelector('#Right-section').innerHTML = ''
    for (let i = 0; i < mensData.length; i++) {
      let element = mensData[i]
  
      let div = document.createElement('div')
      let img = document.createElement('img')
      img.setAttribute('src', element.image_url)
  
      let brand = document.createElement('h2')
      brand.innerText = element.brand
      brand.setAttribute('id', 'brand')
  
      let name = document.createElement('p')
      name.innerText = element.name
  
      let price = document.createElement('span')
      price.innerText = 'Rs' + ' ' + element.price
      price.setAttribute('id', 'price')
  
      let sprice = document.createElement('span')
      sprice.innerText = element.strikedoffprice
      sprice.setAttribute('id', 'sprice')
  
      let addtocart = document.createElement('button')
      addtocart.innerText = 'Add to Cart'
      addtocart.setAttribute('id', 'addtocart')
      addtocart.addEventListener('click', function () {
        addToCart(element)
        // if(addToCart(element)===true){
        //   cartData[i].quantity++
  
        //   alert('Added to cart already')
        // }
        // else{
        //   element.quantity=1
        //   cartData.push(element)
        //   localStorage.setItem('cartData',JSON.stringify(cartData))
        //   alert('Added to cart Succefully');
        // }
      })
  
      div.append(img, brand, name, price, sprice, addtocart)
  
      let container = document.querySelector('#Right-section')
      container.append(div)
    }
  }
  displayPage(mensData)
  // diaplayPage function end
  
  // Add_to_cart for function
  function addToCart(ele) {
    let flag = false
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].name == ele.name) {
        cartData[i].quantity++
        cartData[i].cartprice = ele.price * cartData[i].quantity
        flag = true
        alert(`Product ${ele.name} Added to Cart ${cartData[i].quantity} Times`)
      }
    }
    if (!flag) {
      ele.quantity = 1
      ele.cartprice = ele.price * ele.quantity
      cartData.push(ele)
      alert(`Product ${ele.name} Added to Cart Succesfuly`)
    }
    localStorage.setItem('cartData', JSON.stringify(cartData))
    cartItems()
    // let filtered=cartData.filter(function(elem){
    //   return elem.name===element.name
    // })
    // if(filtered.length>0){
    //   return true
    // }
    // else{
    //   return false
    // }
  }
  
  //filters section
  // Sort by Price function calling Start
  let sortbyprice = document.querySelector('#pricesort')
  sortbyprice.addEventListener('change', function () {
    sortByPrice(mensData)
  })
  function sortByPrice(mensData) {
    let val = document.querySelector('#pricesort').value
    if (val === 'Low to High') {
      let filteredData = mensData.sort((a, b) => a.price - b.price)
      displayPage(filteredData)
    } else if (val === 'High to Low') {
      let filteredData = mensData.sort((a, b) => b.price - a.price)
      displayPage(filteredData)
    }
  }
  // Sort by price end
  
  // Sort by name function and calling start
  let sortbyname = document.querySelector('#namesort')
  sortbyname.addEventListener('change', function () {
    sortByName(mensData)
  })
  function sortByName(mensData) {
    let val = document.querySelector('#namesort').value
    if (val === 'Ascending') {
      let filteredData = mensData.sort(function (a, b) {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        return 0
      })
      displayPage(filteredData)
    } else if (val === 'Descending') {
      let filteredData = mensData.sort(function (a, b) {
        if (a.name > b.name) return -1
        else if (a.name < b.name) return 1
        return 0
      })
      displayPage(filteredData)
    }
  }
  // sort by name end
  
  // total items function start
  function totalItems(arr) {
    let count = 0
    arr.forEach(function (elem) {
      count++
    })
    document.querySelector('#count').innerText = count
  }
  totalItems(mensData)
  // total items function end
  
  // left filters section
  // categories section start
  let tshirts = document.querySelector('#tshirts')
  
  tshirts.addEventListener('click', function () {
    Tshirts()
  })
  function Tshirts() {
    let val = document.querySelector('#tshirts')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.type === val.value
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  }
  let shoes = document.querySelector('#shoes')
  shoes.addEventListener('click', function () {
    Shoes()
  })
  function Shoes() {
    let val = document.querySelector('#shoes')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.type === val.value
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  }
  
  let flips = document.querySelector('#flips')
  flips.addEventListener('click', function () {
    Flips()
  })
  function Flips() {
    let val = document.querySelector('#flips')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.type === val.value
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  }
  
  let pants = document.querySelector('#pants')
  pants.addEventListener('click', function () {
    Pants()
  })
  function Pants() {
    let val = document.querySelector('#pants')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.type === val.value
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  }
  let bags = document.querySelector('#bags')
  bags.addEventListener('click', function () {
    Bags()
  })
  function Bags() {
    let val = document.querySelector('#bags')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.type === val.value
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  }
  // Categories section end
  
  // Price section start
  let one = document.querySelector('#one')
  one.addEventListener('click', function () {
    let val = document.querySelector('#one')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.price >= 100 && elem.price <= 400
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  })
  
  let two = document.querySelector('#two')
  two.addEventListener('click', function () {
    let val = document.querySelector('#two')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.price >= 401 && elem.price <= 1000
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  })
  
  let three = document.querySelector('#three')
  three.addEventListener('click', function () {
    let val = document.querySelector('#three')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.price >= 1001 && elem.price <= 5000
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  })
  
  let four = document.querySelector('#four')
  four.addEventListener('click', function () {
    let val = document.querySelector('#four')
    if (val.checked === true) {
      let filtered = mensData.filter(function (elem) {
        return elem.price >= 5001 && elem.price <= 10000
      })
      displayPage(filtered)
      totalItems(filtered)
    } else {
      displayPage(mensData)
      totalItems(mensData)
    }
  })
  // Price sectionend
  function cartItems(){
    let temp = JSON.parse(localStorage.getItem('cartData')) || []
    let items=0
    temp.forEach(function(ele){
      items+=ele.quantity
    })
    document.getElementById("cart-items").innerText=items
  }