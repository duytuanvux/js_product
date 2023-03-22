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
        },
        {
            categoryName : "Điện thoại",
            detail : "ProductDetail",
            id : 2,
            imageUrl : "./img/item-img.jpg",
            info : "ProductInfo",
            manufactorureName : "Apple",
            name : "iPhone 14 Pro Max 256Gb Navy Blue",
            price : "25.990.000đ",
            ratingStar : 5
        },
        {
            categoryName : "Điện thoại",
            detail : "ProductDetail",
            id : 3,
            imageUrl : "./img/item-img.jpg",
            info : "ProductInfo",
            manufactorureName : "OPPO",
            name : "Oppo Reno8 T5G",
            price : "10.990.000đ",
            ratingStar : 4
        },
        {
            categoryName : "Điện thoại",
            detail : "ProductDetail",
            id : 4,
            imageUrl : "./img/item-img.jpg",
            info : "ProductInfo",
            manufactorureName : "Xiaomi",
            name : "Xiaomi Redmi 12C",
            price : "3.190.000đ",
            ratingStar :3
        },
        {
            categoryName : "Điện thoại",
            detail : "ProductDetail",
            id : 4,
            imageUrl : "./img/item-img.jpg",
            info : "ProductInfo",
            manufactorureName : "Unknown",
            name : "Vivo Y35",
            price : "6.290.000đ",
            ratingStar :3
        },


    ]
    // Load lại thành phần vào trang chủ
    $('#nav').load('components/index/menu.html')
    $('#slide').load('components/index/slide.html')
    $('#banner').load('components/index/banner.html')
    
    // Không load() thì mới append được sản phẩm vào 
    // $('#product-list').load('components/products.html')


    // Load lại vào thành phần trang admin
    $('#admin-nav').load('components/admin/admin-menu.html')
    $('#admin-sidebar').load('components/admin/admin-sidebar.html')
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

    // Generate sản phẩm vào admin
    for (i = 0; i < product_item_length; i++){
        
        $('tbody').append(`
        <tr>
        <th scope="row">${product_item[i].id}</th>
        <td>${product_item[i].name}</td>
        <td>${product_item[i].price}</td>
        <td>${product_item[i].info}</td>
        <td>${product_item[i].detail}</td>
        <td>${product_item[i].ratingStar}</td>
        <td>${product_item[i].imageUrl}</td>
        <td>${product_item[i].manufactorureName}</td>
        <td>${product_item[i].categoryName}</td>
        <td><button type="button" class="btn btn-warning">Edit</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>

        </tr>
        `)
    }
})