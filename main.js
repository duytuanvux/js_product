$(document).ready(function(){

    var product_item = [
        {
            categoryName : "Điện thoại",
            detail : "ProductDetail",
            id : 1,
            imageUrl : "./img/item-img.jpg",
            info : "ProductInfo",
            manufactorureName : "SAMSUNG",
            name : "Samsung Galaxy S22 Ultra 5G",
            price : "30.990.000đ",
            ratingStar : 5
        }

    ]
    // Load lại thành phần vào trang chủ
    $('#nav').load('components/menu.html')
    $('#slide').load('components/slide.html')
    $('#banner').load('components/banner.html')
    
    // Không load() thì mới append được sản phẩm vào 
    // $('#product-list').load('components/products.html')

    // Generate các sản phẩm
    var product_item_length = product_item.length
    for ( i = 0; i < product_item_length ; i++){
        $('#product-list').append(`
        <div class="product-item">
            <div class="product-img">
            <img src="${product_item[i].imageUrl}" alt="">
            </div>
            <div class="product-info">
                <div class="item-name margin-5">${product_item[i].name}</div>
                <div class="item-manufacture margin-5">${product_item[i].manufactorureName}</div>
                <div class="star-rating margin-5"></div>
                <div class="item-price margin-5">${product_item[i].price}</div>
            </div>
    </div>
            
        `
        )
    }
})