var a=JSON.parse(window.localStorage.getItem("productlist"))
var ct=document.getElementById("count")
var c=0
var cost=0
for(var i=0;i<a.length;i++){
    c+=a[i].count
    cost+=(a[i].count)*(a[i].price)
}
var cost1=document.getElementById("cost")
cost1.innerHTML="Total Amount:"+" "+cost
ct.innerHTML=c
var tt=document.createElement("p")
var tl=document.getElementById("tl")
tt.appendChild(document.createTextNode("Total Items:"+a.length))
tt.style.fontSize=24;
tl.appendChild(tt)
for(var i=0;i<a.length;i++){
    var tr=document.createElement("tr")
    var td=document.createElement("td")
    var ti=document.createElement("img")
    ti.src=a[i].preview
    ti.height=150
    ti.width=100
    td.appendChild(ti)
    tr.appendChild(td)
    var td=document.createElement("td")
    tp1=document.createElement("p")
    tp1.appendChild(document.createTextNode(a[i].name))
    tp1.id="name"
    td.appendChild(tp1)
    tp2=document.createElement("p")
    tp2.appendChild(document.createTextNode("X"+a[i].count))
    tp2.id="count1"
    td.appendChild(tp2)
    tr.appendChild(td)
    tp3=document.createElement("p")
    tp3.appendChild(document.createTextNode("Rs"+a[i].price))
    tp3.id="price"
    td.appendChild(tp3)
    tr.appendChild(td)
    tl.appendChild(tr)
}
