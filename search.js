let searchArr = JSON.parse(localStorage.getItem("searchData")) || []
let cartarr=JSON.parse(localStorage.getItem("cartData"))||[];
window.addEventListener("load",function(){
  appendData(searchArr)
  getItemCount(searchArr)
  cartItems()
})
function appendData(arr) {
  document.getElementById('item-container').innerHTML = ''
  arr.forEach(function (ele) {
    var card = document.createElement('div')
    var pic = document.createElement('img')
    pic.setAttribute('src', ele.image_url)
    var des = document.createElement('h4')
    des.innerText = ele.name
    var brand = document.createElement('p')
    brand.innerText = ele.brand
    var prices = document.createElement('div')
    var actual = document.createElement('span')
    actual.innerText = 'Rs. ' + ele.price
    var marked = document.createElement('span')
    marked.innerText = 'Rs. ' + ele.strikedoffprice
    marked.setAttribute('class', 'striked')
    var discount = document.createElement('span')
    discount.innerText =
      ((ele.discount * 100) / ele.strikedoffprice).toFixed(0) + '% off'
    discount.setAttribute('class', 'discount_label')

    prices.append(actual, marked, discount)
    var addcart = document.createElement('button')
    addcart.addEventListener('click', function () {
      addToCart(ele)
    })
    addcart.innerText = 'Add to Cart'
    card.append(pic, des, brand, prices, addcart)
    document.getElementById('item-container').append(card)
  })
}
  
  function addToCart(ele) {
    let flag = false
    for (let i = 0; i < cartarr.length; i++) {
      if (cartarr[i].name == ele.name) {
        cartarr[i].quantity++
        cartarr[i].cartprice = ele.price * cartarr[i].quantity
        flag = true
        alert(`Product ${ele.name} Added to Cart ${cartarr[i].quantity} Times`)
      }
    }
    if (!flag) {
      ele.quantity = 1
      ele.cartprice = ele.price * ele.quantity
      cartarr.push(ele)
      alert(`Product ${ele.name} Added to Cart Succesfuly`)
    }
    localStorage.setItem('cartData', JSON.stringify(cartarr))
    cartItems();

  }
  
  function handlesortprice() {
    let selected = document.getElementById('sort_price').value
    if (selected == 'ascending') {
      let filterlist = searchArr.sort(function (a, b) {
        return a.price - b.price
      })
      appendData(filterlist)
    } else if (selected == 'descending') {
      let filterlist = searchArr.sort(function (a, b) {
        return b.price - a.price
      })
      appendData(filterlist)
    }
  }
  function handlesortname() {
    let selected = document.getElementById('sort_name').value
    if (selected == 'ascending') {
      let filterlist = searchArr.sort(function (a, b) {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      appendData(filterlist)
    } else if (selected == 'descending') {
      let filterlist = searchArr.sort(function (a, b) {
        if (a.name > b.name) return -1
        if (a.name < b.name) return 1
        return 0
      })
      appendData(filterlist)
    }
  }
  function handlesortbrand() {
    let selected = document.getElementById('sort_brand')
    let filterlist = searchArr.filter(function (ele) {
      return ele.brand == selected.value
    })
    if (filterlist.length > 0) {
      appendData(filterlist)
      getItemCount(filterlist)
    } else {
      appendData(searchArr)
      getItemCount(searchArr)
    }
  }
  
  function getItemCount(arr) {
    document.getElementById('item-count').innerText = arr.length
  }
  
  let gender = document.querySelectorAll('#gender>input')
  gender.forEach(function (ele) {
    ele.addEventListener('change', function () {
      if (event.target.checked == true) {
        let filteredlist = searchArr.filter(function (kid) {
          return kid.gender == ele.value
        })
        appendData(filteredlist)
        getItemCount(filteredlist)
      } else {
        appendData(searchArr)
        getItemCount(searchArr)
      }
    })
  })
  
  let category = document.querySelectorAll('#categories>input')
  category.forEach(function (ele,index,arr) {
    ele.addEventListener('change', function () {
      if (event.target.checked == true) {
        let filteredlist = searchArr.filter(function (kid) {
          return kid.category == ele.value
        })
        appendData(filteredlist)
        getItemCount(filteredlist)
      } else {
        appendData(searchArr)
        getItemCount(searchArr)
      }
    })
  })
  
  let discount = document.querySelectorAll('#discount>input')
  discount.forEach(function (ele) {
    ele.addEventListener('change', function () {
      if (event.target.checked == true) {
        let filteredlist = searchArr.filter(function (kid) {
          return (kid.discount * 100) / kid.strikedoffprice >= Number(ele.value)
        })
        filteredlist.sort(function (a, b) {
          return (
            (a.discount * 100) / a.strikedoffprice -
            (b.discount * 100) / b.strikedoffprice
          )
        })
        appendData(filteredlist)
        getItemCount(filteredlist)
      } else {
        appendData(searchArr)
        getItemCount(searchArr)
      }
    })
  })
  function cartItems(){
    let temp = JSON.parse(localStorage.getItem('cartData')) || []
    let items=0
    temp.forEach(function(ele){
      items+=ele.quantity
    })
    document.getElementById("cart-items").innerText=items
  }