var k=window.localStorage.removeItem('productlist')
var a=JSON.parse(window.localStorage.getItem("productlist"))
var ct=document.getElementById("count")
var c=0
var cost=0
for(var i=0;i<a.length;i++){
    c+=a[i].count
}
ct.innerHTML=c