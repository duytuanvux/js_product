function getListItem_index() {
    var listManufacturer = localStorage.getItem('manufacturer_list') ? JSON.parse(localStorage.getItem('manufacturer_list')) : []
    $.get('https://641c4706b556e431a86a4a2e.mockapi.io/cellPhone-obj',function(product_item,status) {
        for ( i = 0; i < product_item.length ; i++){
            var manufacturer = listManufacturer.find(manu => manu.id === product_item[i].manufacturerName)
            $('#product-list').append(`
            <div class="product-item">
                <div class="product-img">
                <img src="${product_item[i].imageUrl}" alt="">
                </div>
                <div class="product-info">
                    <div class="item-name margin-5">${product_item[i].name}</div>
                    <div class="item-manufacture margin-5">${manufacturer ? manufacturer.manufaceturer : ""}</div>
                    <div class="star-rating margin-5"></div>
                    <div class="item-price margin-5">${product_item[i].price} đồng</div>
                </div>
        </div>   
            `
            )
        }
    }
    )
}

function getListItem_admin() {
    $('tbody').empty()
    var listManufacturer = localStorage.getItem('manufacturer_list') ? JSON.parse(localStorage.getItem('manufacturer_list')) : []
    $.get('https://641c4706b556e431a86a4a2e.mockapi.io/cellPhone-obj',function(product_item,status){
        for (i = 0; i < product_item.length; i++){
            var manufacturer = listManufacturer.find(manu => manu.id === product_item[i].manufacturerName)
            $('tbody').append(`
            <tr>
            <th scope="row" class="id">${product_item[i].id}</th>
            <td class="name">${product_item[i].name}</td>
            <td class="price">${product_item[i].price}</td>
            <td class="info">${product_item[i].info}</td>
            <td class="detail">${product_item[i].detail}</td>
            <td class="ratingStar">${product_item[i].ratingStar}</td>
            <td class="imageUrl">${product_item[i].imageUrl}</td>
            <td class="manufacturerName">${manufacturer ? manufacturer.manufaceturer : ""}</td>
            <td class="categoryName">${product_item[i].categoryName}</td>
            <td class=""><button type="button" class="btn btn-warning open-modal" onClick="openEditModal(${product_item[i].id})">Edit</button></td>
            <td class=""><button type="button" class="btn btn-danger open-modal" onClick="removeItem(${product_item[i].id})">Delete</button></td>
            </tr>
            `)
        }
    })
}

function getListManufacturer() {
    $.get('https://641c4706b556e431a86a4a2e.mockapi.io/manufacturer-obj', function(manufacturer_list,status){
            for( i = 0; i < manufacturer_list.length; i++) {
                $('#manufacturer-input').append(`
                <option value="${manufacturer_list[i].id}" >${manufacturer_list[i].manufaceturer}</option>
                `)
            }
            localStorage.setItem('manufacturer_list', JSON.stringify(manufacturer_list))
    })
}

function openEditModal(id) {
    $.get(`https://641c4706b556e431a86a4a2e.mockapi.io/cellPhone-obj/${id}`, function (product_item, status) {
        $('#id').val(product_item.id)
        $('#name').val(product_item.name)
        $('#price').val(product_item.price)
        $('#info').val(product_item.info)
        $('#detail').val(product_item.detail)
        $('#ratingStar').val(product_item.ratingStar)
        $('#imageUrl').val(product_item.imageUrl)
        $('#manufacturerName').val(product_item.manufacturerName)
        $('#categoryName').val(product_item.categoryName)
        $('#myModal').show();
        localStorage.setItem('idEditing', id);
    })

}

function removeItem(id) {
    $.ajax({url: `https://641c4706b556e431a86a4a2e.mockapi.io/cellPhone-obj/${id}`, 
    method: 'DELETE', 
    success: function (res) {
        getListItem();
    }})
}

$(document).ready(function(){
    getListManufacturer();
    getListItem_admin();
    getListItem_index();
    function resetForm() {
        $('#id').val('')
        $('#name').val('')
        $('#price').val('')
        $('#info').val('')
        $('#detail').val('')
        $('#ratingStar').val('')
        $('#imageUrl').val('')
        $('#manufacturerName').val('')
        $('#categoryName').val('')
    }
    
    // Load lại thành phần vào trang chủ
    $('#nav').load('components/index/menu.html')
    $('#slide').load('components/index/slide.html')
    $('#banner').load('components/index/banner.html')
    
    // Không load() thì mới append được sản phẩm vào 
    // $('#product-list').load('components/products.html')


    // Load lại vào thành phần trang admin
    $('#admin-nav').load('components/admin/admin-menu.html')
    $('#admin-sidebar').load('components/admin/admin-sidebar.html')
    
    
   

    // Thêm sản phẩm
    $('#btn-add-new').click(function () {
         var id  = $('#id').val()
         var name  = $('#name').val()
         var price  = $('#price').val()
         var info  = $('#info').val()
         var detail  = $('#detail').val()
         var ratingStar  = $('#ratingStar').val()
         var imageUrl  = $('#imageUrl').val()
         var manufacturerName  = $('#manufacturer-input').val()
         var categoryName  = $('#categoryName').val()
            var itemData = {
            id,
            name,
            price,
            info,
            detail,
            ratingStar,
            imageUrl,
            manufacturerName,
            categoryName,
        }
        
        $('#myModal').hide()

        getListItem_admin();
        resetForm();
    })
   
    $('.submit-btn').click(function(){
        var idEditing = localStorage.getItem('idEditing');
        var id  = $('#id').val()
         var name  = $('#name').val()
         var price  = $('#price').val()
         var info  = $('#info').val()
         var detail  = $('#detail').val()
         var ratingStar  = $('#ratingStar').val()
         var imageUrl  = $('#imageUrl').val()
         var manufacturerName  = $('#manufacturer-input').val()
         var categoryName  = $('#categoryName').val()
            var itemData = {
            id,
            name,
            price,
            info,
            detail,
            ratingStar,
            imageUrl,
            manufacturerName,
            categoryName,
        }
        if(idEditing) {
            $.ajax({
                url : `https://641c4706b556e431a86a4a2e.mockapi.io/cellPhone-obj/${idEditing}`,
                method : 'PUT',
                data : itemData,
                success: function (res) {
                    $('#myModal').hide()
                    getListItem_admin();
                    localStorage.removeItem('idEditing');
                }
            })
        }
        else {
            $.ajax({
                url : `https://641c4706b556e431a86a4a2e.mockapi.io/cellPhone-obj`,
                method : 'POST',
                data : itemData,
                success: function(res) {
                   
                    $('#myModal').hide()
                    getListItem_admin();
                }
            })
        }
    })

   $('.open-modal').click(function(){
    $('#myModal').show()
   })
   $('#btn-close-modal').click(function(){
    $('#myModal').hide()
   })
   $(window).on('click', function(e) {
    if ($(e.target).is('.modal')) {
        $('.modal').hide();
      }
   })
   
})