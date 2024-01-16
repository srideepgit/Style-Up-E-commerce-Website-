let kidsData = [
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17137550/2022/2/11/b124b0f4-830d-44ed-a669-e8585d66cf4f1644579708683HellcatBoysRoundNeckBlendedCottonTshirt-ComboPackof51.jpg',
      name: 'Boys Pack Of 5 Typography Printed Bio Finish T-shirt',
      price: 899,
      strikedoffprice: 999,
      discount: 100,
      brand: 'US-Polo',
      category: 'Tshirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17954816/2022/5/28/5502c0db-9e3b-4226-b3a3-d5891cbf16dd1653736670074-Moms-Love-Infant-Girls-White--Peach-Coloured-Pure-Cotton-Flo-1.jpg',
      name: 'Infant Girls White & Peach-Coloured Pure Cotton Floral Top',
      price: 624,
      strikedoffprice: 1299,
      discount: 675,
      brand: 'US-Polo',
      category: 'Dresses',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15868718/2021/11/3/69d6a4bc-d171-43fa-bf1d-22b61a48a5ca1635948051937RedTapeKidsSilver-TonedPeach-ColouredColourblockedWalkingSho2.jpg',
      name: 'Kids Silver-Toned Colourblocked Sports Shoes',
      price: 924,
      strikedoffprice: 4299,
      discount: 3375,
      brand: 'Nike',
      category: 'Shoes',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13342006/2021/3/8/df926dce-6ef9-4575-af4b-79f38670352b1615195841780-Kanakadara-Off-White--Gold-Toned-Ready-to-Wear-Pavadi-Set-48-1.jpg',
      name: 'Off-White & Gold-Toned Ready to Wear Pattu Pavadai',
      price: 624,
      strikedoffprice: 1299,
      discount: 675,
      brand: 'US-Polo',
      category: 'Kurta Sets',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17038512/2022/3/7/00d6ff27-6fc0-4ef2-93a6-418f167171461646659511586-US-Polo-Assn-Kids-Boys-Shirts-541646659511284-1.jpg',
      name: 'Boys White & Navy Blue Cotton Casual Shirt',
      price: 1439,
      strikedoffprice: 1599,
      discount: 160,
      brand: 'US-Polo',
      category: 'Shirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17387610/2022/3/4/cf71be06-9a1a-4410-a447-623d1327cf991646405889032YKDisneyBoysBlue3PrintedAppliqueT-shirt1.jpg',
      name: 'Boys Blue & Red Pack of 3 Printed Cotton T-shirt',
      price: 699,
      strikedoffprice: 899,
      discount: 200,
      brand: 'Max',
      category: 'Tshirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17965018/2022/4/21/21d5ac3a-253d-4137-b92a-f8b320f4603016505208230222-piececottonset1.jpg',
      name: 'Girls Green & Black 2-Piece Cotton Set',
      price: 974,
      strikedoffprice: 1699,
      discount: 725,
      brand: 'Max',
      category: 'Dresses',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15928978/2021/11/3/e40f0bfa-7e25-4f99-a1be-77c65a03665c1635936884290RedTapeKidsPinkMeshRegularWalkingShoes2.jpg',
      name: 'Kids Pink Sports Shoes',
      price: 1074,
      strikedoffprice: 1699,
      discount: 625,
      brand: 'Polo',
      category: 'Shoes',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17873494/2022/4/13/d2bddde1-df20-4db6-8957-324c42a413d41649846060721AMIRTHAFASHIONGirlsGreenLehengaCholi1.jpg',
      name: 'Girls Green Design Ready to Wear Lehenga',
      price: 974,
      strikedoffprice: 1699,
      discount: 725,
      brand: 'Max',
      category: 'Kurta Sets',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17038688/2022/5/25/16bec1f2-5c1d-45bc-bcb9-e83a4f8136521653470948258-US-Polo-Assn-Kids-Boys-Shirts-391653470947517-1.jpg',
      name: 'Boys Navy Blue & Red Tartan Cotton Casual Shirt',
      price: 1614,
      strikedoffprice: 1699,
      discount: 85,
      brand: 'Max',
      category: 'Shirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15334348/2021/9/1/d784aa9b-15a9-41e0-86d1-a9cba85591e71630509125052BonOrganikBoysWhitePrintedV-NeckAppliqueT-shirt1.jpg',
      name: 'Boys White Graphic Printed Round-Neck T-shirt',
      price: 1129,
      strikedoffprice: 1399,
      discount: 270,
      brand: 'YK-Disney',
      category: 'Tshirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18506480/2022/5/30/c337e1db-3c6e-4494-9569-9728860fc9181653901972156Dresses1.jpg',
      name: 'Pink Satin Dress',
      price: 299,
      strikedoffprice: 599,
      discount: 300,
      brand: 'YK-Disney',
      category: 'Dresses',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16585166/2022/1/2/c833be54-3f05-4140-a863-79a06f3176331641110340993RedTapeKidsNavyBlueMeshWalkingShoes2.jpg',
      name: 'Kids Navy Blue Sports Shoes',
      price: 399,
      strikedoffprice: 1299,
      discount: 900,
      brand: 'Addidas',
      category: 'Shoes',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15977354/2022/3/14/abc116d9-bc70-47f8-89c3-6ef0fe31915b1647255119254-House-of-Pataudi-Girls-Lehenga-Choli-5861647255118643-1.jpg',
      name: 'Girls Peach Pink Printed Ready to Wear Jashn Lehenga Blouse',
      price: 299,
      strikedoffprice: 599,
      discount: 300,
      brand: 'YK-Disney',
      category: 'Kurta Sets',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16983282/2022/1/29/9ec6d678-3fff-421c-b169-a9e5f6a8246b1643475472500ATUNBoysYellowClassicFloralPrintedCasualShirt1.jpg',
      name: 'Boys Yellow Printed Pure Cotton Regular Fit Casual Shirt',
      price: 399,
      strikedoffprice: 1299,
      discount: 900,
      brand: 'YK-Disney',
      category: 'Shirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18067028/2022/4/28/9148a795-d8cc-4e76-852e-46ffda9f95011651121148141KidsVilleBoysMulticoloured3PrintedAppliqueT-shirt1.jpg',
      name: 'Boys Blue & White 3 Printed T-shirt',
      price: 1350,
      strikedoffprice: 1599,
      discount: 249,
      brand: 'H&M',
      category: 'Tshirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15777752/2021/10/9/2d293605-05ec-453f-b0ed-5164c73a69ec1633784023024ATUNNavyBlueStripedDress1.jpg',
      name: 'A T U N Navy Blue & White Striped Dress',
      price: 1080,
      strikedoffprice: 1199,
      discount: 119,
      brand: 'H&M',
      category: 'Dresses',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6676859/2021/12/16/7581a1ff-60a4-4164-bda7-3ab2318633081639636214385-Nike-Boys-REVOLUTION-4-Black-Running-Shoes-5851639636213968-1.jpg',
      name: 'Kids REVOLUTION 4 Black Running Shoes',
      price: 780,
      strikedoffprice: 1199,
      discount: 419,
      brand: 'Reebok',
      category: 'Shoes',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15977350/2022/3/14/b3f5324b-536d-4047-9748-158c097232111647255101943-House-of-Pataudi-Girls-Lehenga-Choli-9711647255101080-1.jpg',
      name:
        'Girls Blue Printed Ready to Wear Jashn Lehenga & Blouse With Dupatta',
      price: 1080,
      strikedoffprice: 1199,
      discount: 119,
      brand: 'H&M',
      category: 'Kurta Sets',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18482350/2022/5/28/21179a2d-2a80-463e-a9cb-0d87b24f41631653678653890Ed-a-MammaSustainableSolidCollarShirtWithFrontPocket1.jpg',
      name: 'Boys White Casual Shirt',
      price: 780,
      strikedoffprice: 1199,
      discount: 419,
      brand: 'H&M',
      category: 'Shirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18265286/2022/5/13/bb9bbe1a-f722-4122-968f-335627584f891652445273934HELLCATBoysNavyBlueTypography3PrintedBioFinishAppliqueT-shir1.jpg',
      name: 'Boys Navy Blue Typography 3 Printed Bio Finish Applique T-shirt',
      price: 999,
      strikedoffprice: 1299,
      discount: 300,
      brand: 'Trends',
      category: 'Tshirts',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17964542/2022/4/21/1f200aac-63b3-466c-8778-ba448c3e563e16505114710303-packcottondresses1.jpg',
      name: 'Girls Pack Of 3 Pure Cotton Dresses',
      price: 1499,
      strikedoffprice: 1699,
      discount: 200,
      brand: 'Trends',
      category: 'Dresses',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16585162/2022/1/2/67cb6d11-f437-4dd4-a1c3-4e32db32b7041641110409855RedTapeKidsWhiteBlueMeshWalkingShoes2.jpg',
      name: 'Kids White & Blue Sports Shoes',
      price: 599,
      strikedoffprice: 1199,
      discount: 600,
      brand: 'RedTape',
      category: 'Shoes',
      gender: 'Boys',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14533848/2021/9/3/264e11ee-502f-4b28-b28e-22b219a920f31630693735069-PICCOLO-Girls-Green-Sleeveless-Floral-Printed-Lehengas--Blou-1.jpg',
      name: 'Girls Green Sleeveless Floral Printed Lehengas',
      price: 1499,
      strikedoffprice: 1699,
      discount: 200,
      brand: 'Trends',
      category: 'Kurta Sets',
      gender: 'Girls',
    },
    {
      image_url:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15300406/2021/8/30/d31cb44a-63f7-444e-bbec-b3490d89880f1630312861312USPoloAssnBoysRedOpaquePrintedCasualShirt1.jpg',
      name: 'Boys Red Opaque Printed Casual Shirt',
      price: 599,
      strikedoffprice: 1199,
      discount: 600,
      brand: 'Trends',
      category: 'Shirts',
      gender: 'Boys',
    },
  ]
  let cartArr = JSON.parse(localStorage.getItem('cartData')) || []
  window.addEventListener('load', function () {
    appendData(kidsData)
    getItemCount(kidsData)
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
    cartItems();
  }
  
  function handlesortprice() {
    let selected = document.getElementById('sort_price').value
    if (selected == 'ascending') {
      let filterlist = kidsData.sort(function (a, b) {
        return a.price - b.price
      })
      appendData(filterlist)
    } else if (selected == 'descending') {
      let selected = document.getElementById('sort_price').value
      let filterlist = kidsData.sort(function (a, b) {
        return b.price - a.price
      })
      appendData(filterlist)
    }
  }
  function handlesortname() {
    let selected = document.getElementById('sort_name').value
    if (selected == 'ascending') {
      let filterlist = kidsData.sort(function (a, b) {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      appendData(filterlist)
    } else if (selected == 'descending') {
      let selected = document.getElementById('sort_price').value
      let filterlist = kidsData.sort(function (a, b) {
        if (a.name > b.name) return -1
        if (a.name < b.name) return 1
        return 0
      })
      appendData(filterlist)
    }
  }
  function handlesortbrand() {
    let selected = document.getElementById('sort_brand')
    let filterlist = kidsData.filter(function (ele) {
      return ele.brand == selected.value
    })
    if (filterlist.length > 0) {
      appendData(filterlist)
      getItemCount(filterlist)
    } else {
      appendData(kidsData)
      getItemCount(kidsData)
    }
  }
  
  function getItemCount(arr) {
    document.getElementById('item-count').innerText = arr.length
  }
  
  let gender = document.querySelectorAll('#gender>input')
  gender.forEach(function (ele) {
    ele.addEventListener('change', function () {
      if (event.target.checked == true) {
        let filteredlist = kidsData.filter(function (kid) {
          return kid.gender == ele.value
        })
        appendData(filteredlist)
        getItemCount(filteredlist)
      } else {
        appendData(kidsData)
        getItemCount(kidsData)
      }
    })
  })
  
  let category = document.querySelectorAll('#categories>input')
  category.forEach(function (ele,index,arr) {
    ele.addEventListener('change', function () {
      if (event.target.checked == true) {
        let filteredlist = kidsData.filter(function (kid) {
          return kid.category == ele.value
        })
        appendData(filteredlist)
        getItemCount(filteredlist)
      } else {
        appendData(kidsData)
        getItemCount(kidsData)
      }
    })
  })
  
  let discount = document.querySelectorAll('#discount>input')
  discount.forEach(function (ele) {
    ele.addEventListener('change', function () {
      if (event.target.checked == true) {
        let filteredlist = kidsData.filter(function (kid) {
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
        appendData(kidsData)
        getItemCount(kidsData)
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