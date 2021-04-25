//showing the data on the homepage
homepg=document.getElementById('homePageLoad')
window.onload=showProducts
function showProducts() {
    
    cardBody=document.getElementById('cardMaking')
    console.log("card bodyyyyyyyyyyyyyyyyyyyyyyyy",cardBody)
    result1=localStorage.getItem('Products')
    res1=JSON.parse(result1);
    console.log(res1)
    var cproducts=res1.map((ele,i,arr)=>{
        // console.log("im coming here",ele)
        
        let divcol4=document.createElement('div')
        divcol4.className="col-4"
        cardBody.appendChild(divcol4)

        let divcard=document.createElement('div')
        divcard.className="card"
        divcol4.appendChild(divcard)

        let atagimg=document.createElement('a')
        atagimg.href="#"
        divcard.appendChild(atagimg)
        let imgatag=document.createElement('img')
        imgatag.src=ele.productImage
        imgatag.className="card-img-top"
        imgatag.alt="image not available"
        atagimg.appendChild(imgatag)

        let divcardbody=document.createElement('div')
        divcardbody.className="card-body row"
        divcard.appendChild(divcardbody)

        let divcoltitle=document.createElement('div')
        divcoltitle.className="col"
        divcardbody.appendChild(divcoltitle)

        let atagtitle=document.createElement('a')
        atagtitle.href="#"
        divcoltitle.appendChild(atagtitle)
        let spantitle=document.createElement('span')
        spantitle.className="card-title h6 text-dark"
        spantitle.innerHTML=ele.productname
        atagtitle.appendChild(spantitle)

        let divcolprice=document.createElement('div')
        divcolprice.className="col"
        divcardbody.appendChild(divcolprice)

        let spanprice=document.createElement('span')
        spanprice.className="mr-3 h4 text-right font-weight-bold ml-5"
        spanprice.innerHTML=ele.productPrice+":-"
        divcolprice.appendChild(spanprice)

    })
}
