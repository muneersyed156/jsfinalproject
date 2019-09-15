var a=window.location.search
a=a.split("=")

var f=JSON.parse(window.localStorage.getItem('productlist'))
var id=a[1]
var d=document.getElementById("main-image")
var sp=document.getElementById("sidepart")
var price
var name
var pre
var ct=document.getElementById("count")
var c1=0
for(var i=0;i<f.length;i++){
    c1+=f[i].count
}
ct.innerHTML=c1
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+(id).toString(),function(data){
console.log(data) 
price=data.price
name=data.name
pre=data.preview   
createdynamically(data)
})
function createdynamically(c){
    var ti=document.createElement("img")
    ti.src=c.preview
    ti.width=400
    ti.height=500
  d.appendChild(ti)
  var tp=document.createElement("p")
  tp.appendChild(document.createTextNode(c.name))
  tp.style.fontSize=36
  tp.style.marginTop=0
  sp.appendChild(tp)
  var tp=document.createElement("p")
  tp.appendChild(document.createTextNode(c.brand))
  tp.appendChild(document.createElement("br"))
  tp.style.fontSize=20
  sp.appendChild(tp)
  var tp=document.createElement("p")
  tp.appendChild(document.createTextNode("Price: "+c.price))
  tp.appendChild(document.createElement("br"))
  tp.style.color="cyan"
  sp.appendChild(tp)
var tp=document.createElement("p")
tp.appendChild(document.createTextNode("Description"))
tp.style.fontSize=26
sp.appendChild(tp)
  var tp=document.createElement("p")
  tp.appendChild(document.createTextNode(c.description))
  tp.appendChild(document.createElement("br"))
  tp.style.color="grey"
  sp.appendChild(tp)
  var tp=document.createElement("p")
  tp.appendChild(document.createTextNode("Product Preview"))
  tp.style.fontSize=20
  sp.appendChild(tp)
  preview(c.photos)
}
var ig=[]
var h=1
function preview(c){
    var td=document.createElement("div")
    for(var i=0;i<c.length;i++){
        var tb=document.createElement("button")
        tb.id=h
        h+=1
        tb.classList.add("btim")
        tb.addEventListener("click",imagechange)
        var ti=document.createElement("img")
        ig.push(c[i])
        ti.src=c[i]
        ti.height=100;
        ti.width=70;
        tb.appendChild(ti)
        td.appendChild(tb)
    }
    sp.appendChild(td)
    tb=document.createElement("button")
    tb.classList.add("ctbtn")
    tb.id=c.name
    tb.addEventListener("click",addtolocalstorage)
    tb.appendChild(document.createTextNode("Add To Cart"))
    sp.appendChild(tb)
    
}
function imagechange(){
    d.removeChild(d.lastChild)
    var k= ig[this.id-1]
    var ti=document.createElement("img")
    ti.src=k
    ti.width=400
    ti.height=500
  d.appendChild(ti)
}


function addtolocalstorage(){  
    if(f.length==0){
        var l={
            "id":id,
            "name":name,
            "price":price,
            'count':1,
            'preview':pre
        }
        f.push(l)
    }
    else if(f.length!=0){
        var w=0
        for(var i=0;i<f.length;i++){
            if(f[i].id==id){
                f[i].count=(parseInt(f[i].count))+1
                w+=1
            }
        }
        if(w==0){
            var l={
                "id":id,
                "name":name,
                "price":price,
                "count":1,
                "preview":pre
            }
            f.push(l)
        }
    }
   /* if(f.length==0){
        var l={
            "id":id,
            "name":name,
            "price":price,
            "count":1
        }
        productlist.push(l)
    }
    else if(productlist.length!=0){
        if(search(productlist,id)){
            for(var i=0;i<productlist.length;i++){
                if(productlist[i].id==id){
                    var e=parseInt(productlist[i].count)
                    e+=1
                    productlist[i].count=e
                }
            }
            console.log(productlist)
        }
        else{
            var l={
                "id":tid,
                "name":name,
                "price":price,
                "count":1
            }
            productlist.push(l)   
        }
    }*/
    
    window.localStorage.setItem('productlist',JSON.stringify(f))
    check()
}
function check(){
    var ct=document.getElementById("count")
var c1=0
    var h=JSON.parse(window.localStorage.getItem('productlist'))
    for(var i=0;i<h.length;i++){
        c1+=h[i].count
    }
    ct.innerHTML=c1
    console.log(ct.innerHTML)
}
