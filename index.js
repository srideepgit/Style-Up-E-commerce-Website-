window.addEventListener("load",function(){
    cartItems()
  })
  
  //crausers data and functionality
  let crauser1 = [
    'https://assets.ajio.com/cms/AJIO/WEB/12062022-D-unisex-topbanner-p4-brands-startingat299.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/12062022-D-unisex-topbanner-p5-brands-under2999.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/12062022-D-unisex-topbanner-p6-trends-brands-flat70.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/12062022-D-unisex-topbanner-p3-brands-4060.jpg',
  ]
  let img = document.querySelector('#image_url')
  let imgNum = 0
  let prev = document
    .querySelector('.prev')
    .addEventListener('click', function () {
      if (imgNum == 0) {
        imgNum = crauser1.length - 1
      } else {
        imgNum--
      }
      img.src = crauser1[imgNum]
    })
  let next = document
    .querySelector('.next')
    .addEventListener('click', function () {
      if (imgNum == crauser1.length - 1) {
        imgNum = 0
      } else {
        imgNum++
      }
      img.src = crauser1[imgNum]
    })
  
  let crauser2 = [
    'https://assets.ajio.com/cms/AJIO/WEB/14062022-D-unisex-topbannercarousel-p1-brands-min60.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/14062022-D-unisex-topbannercarousel-p2-performax-upto70.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/14062022-D-unisex-topbannercarousel-p3-bestofbrands-min70.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/14062022-D-unisex-topbannercarousel-p4-brands-upto700offon1000.jpg',
  ]
  let img2 = document.querySelector('#image2_url')
  let img2Num = 0
  let prev1 = document
    .querySelector('.prev1')
    .addEventListener('click', function () {
      if (img2Num == 0) {
        img2Num = crauser2.length - 1
      } else {
        img2Num--
      }
      img2.src = crauser2[img2Num]
    })
  let next2 = document
    .querySelector('.next1')
    .addEventListener('click', function () {
      if (img2Num == crauser2.length - 1) {
        img2Num = 0
      } else {
        img2Num++
      }
      img2.src = crauser2[img2Num]
    })
  // products products_grid added here
  let products_grid1 = [
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/88c205c0-2349-4669-9d5b-6405e992b06e1654411440468-image_jpeg8576396.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/ac58b269-49f0-4df6-8e6c-594ff77ee4fd1652964575134-Bed_Linen_and_Furnishing_Min_60_-Story-home_-_Cortina-.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/42f7a82e-e84a-4fb9-9cca-55264b28807c1654411495335-image_png_71119225.png',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/a92b7453-33c0-4647-acf1-b3f714f5b7a51654411511670-image_png_1947551086.png',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/db7f6d21-887c-4b73-951a-9c2c6e0f72361654411580266-image_png518016767.png',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/6cba5e10-9064-48a3-a7f3-44f868eb953b1654411595064-image_png1749342016.png',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/3293d206-5c8e-46fd-941c-645afabe0fa81654411618745-image_png_1639462581.png',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/49d6e51c-6bf7-4bb8-a7ef-86616f750b2d1654411638152-image_png_79518292.png',
  ]
  let products_grid2 = [
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/48f59438-2806-47c5-bc44-e6b6882865c71653643704628-QL_Watches.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fcb5c92a-f48b-4959-af1d-a18e05cf4f4e1653643704557-QL_TrackPants.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/26176aa9-ebc4-42f6-8977-a468286082521653643704138-QL_-Skincare.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2d883965-5d34-4bf8-99e2-b263c8920d651653643704260-QL_GroomingEssentials.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/306481ec-1b07-46a5-81f9-210fa4ee21481653643704251-QL_Fragrances.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a1adaa79-f742-45a1-9ad6-59fedd33aa421653643704538-QL_Tops_Tees.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/77eee7e0-9638-4ddc-8726-b0ea0f9d9d591653643704145-QL_ActivewearW.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/8507ccd1-92ee-4e1b-a8e1-b9468a246b401653643704242-QL_FormalShoes.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d3d0683b-3616-40c4-89d8-5fd3273ac80d1653643704226-QL_Flip-Flops.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9c3501e3-22b0-47b0-b60a-2de70f3c8f951653643704178-QL_Bras_Briefs.jpg',
  ]
  let grid1 = document.getElementById('products_grid1')
  let grid2 = document.getElementById('products_grid2')
  
  addProductsGrid(products_grid1,grid1)
  addProductsGrid(products_grid2,grid2)
  
  function addProductsGrid(arr,grid) {
    arr.forEach(function (ele) {
      let card = document.createElement('div')
      let image_url = document.createElement('img')
      image_url.setAttribute('src', ele)
      card.append(image_url)
      grid.append(card)
    })
  }
  
  function cartItems(){
    let temp = JSON.parse(localStorage.getItem('cartData')) || []
    let items=0
    temp.forEach(function(ele){
      items+=ele.quantity
    })
    document.getElementById("cart-items").innerText=items
  }