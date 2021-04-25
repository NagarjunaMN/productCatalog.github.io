// -------------------Adding Data to Local Storage   --------------------------------------

var form = document.getElementById("myForm");
var imagePath
let productImage=document.getElementById('imagess')
productImage.addEventListener("change", function() {
    changeImage(this);
  });
  function changeImage(input) {
    var reader;
  
    if (input.files && input.files[0]) {
      reader = new FileReader();
  
      reader.onload = function(e) {
        imagePath=e.target.result
        
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }



function addProducts(e) {
    // e.preventDefault(); 
    let productName=document.getElementById('name').value
    let productPrice=document.getElementById('price').value
    let productDescription=document.getElementById('description').value

    if    (imagePath == undefined||imagePath == null){
        imagePath=""
    }else{
        imagePath=imagePath
    }

    var prodLocalStorage = JSON.parse(localStorage.getItem('Products') || '[]')

    prodLocalStorage.push({"productname":productName,"productPrice":productPrice,
    "productDescription":productDescription,"productImage":imagePath});

    localStorage.setItem('Products', JSON.stringify(prodLocalStorage))

    
    // console.log(result)  


}

form.addEventListener('submit', addProducts);

// -------------------------------------------------------------------------------------------------------------

// retrieving the data and adding them to the table

window.onload=updateProducts
function updateProducts() {
    tableBody=document.getElementById('tableBody')
    result=localStorage.getItem('Products')
    res=JSON.parse(result);

var ppproducts=res.map((ele,i,arr)=>{
        console.log("i came here")
        let row=document.createElement('tr')
        tableBody.appendChild(row)

        let data1=document.createElement('td')
        row.appendChild(data1)

        let imgTag=document.createElement('img')
        imgTag.src=ele.productImage
        imgTag.height="40"
        imgTag.width="40"
        data1.appendChild(imgTag)

        let data2=document.createElement('td')
        data2.innerHTML=ele.productname
        row.appendChild(data2)
        
        let data3=document.createElement('td')
        data3.innerHTML=ele.productDescription
        row.appendChild(data3)

        let data4=document.createElement('td')
        data4.innerHTML=ele.productPrice
        row.appendChild(data4)

        let remove=document.createElement('td')
        row.appendChild(remove)

        let antag=document.createElement('a')
        antag.innerHTML="Remove"
        antag.href="#"
        antag.onclick=function() {
          console.log("im in remoce func",i)
          console.log("im in remoce func",arr)
          arr.splice(i,1)
          localStorage.setItem('Products', JSON.stringify(arr))
          self.location = "/catalogue";
        }
        remove.appendChild(antag)

})    
}


//----------------------------------------------------------------------------------------