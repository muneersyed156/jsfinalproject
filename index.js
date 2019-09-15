$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (data, status) {
      console.log(response)
      var response = data
      for (var i = 0; i < response.length; i++) {
            if (response[i].isAccessory) {
                  dynamicalaccessories(response[i])
                  console.log(response[i])
            }
            else {
                  dynamicalclothes(response[i])
            }
      }
})
if(window.localStorage.length==0){
      window.localStorage.setItem("productlist",'[]')
  }
  var tc=document.getElementById("count")
  var f=JSON.parse(window.localStorage.getItem('productlist'))
$(document).ready(function(){
      $('#caeraoul-cointer').slick({
            dots:true,
            infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplayspeed:2000
      })
})
var clo = document.getElementById("clo")
var acc = document.getElementById("acc")
function dynamicalaccessories(c) {
      var tb = document.createElement("button")
      var tbr = document.createElement("br")
      var tp1 = document.createElement("p")
      var tp2 = document.createElement("p")
      var tp3 = document.createElement("p")
      var ti = document.createElement("img")
      var ta=document.createElement("a")
      ta.setAttribute('href',"productdetails.html?product_id="+c.id)
      ti.src = c.preview
      ti.appendChild(tbr)
      ti.height = 200
      ti.width = 150
      var textNode1 = document.createTextNode(c.brand)
      var textNode2 = document.createTextNode(c.name)
      var textNode3 = document.createTextNode("Rs."+c.price)
      tp1.appendChild(textNode1)
      tp1.appendChild(tbr)
      tp2.appendChild(textNode2)
      tp2.appendChild(tbr)
      tp3.appendChild(textNode3)
      ta.appendChild(ti)
      tb.append(ta)
      tb.append(tp2)
      tb.append(tp1)
      tb.append(tp3)
      tb.id = c.id
      tp2.style.fontSize=14;
      tp1.style.fontSize=10;
      tp3.style.color="cyan"
      acc.append(tb)
}
function dynamicalclothes(c) {
      var tb = document.createElement("button")
      var tbr = document.createElement("br")
      var tp1 = document.createElement("p")
      var tp2 = document.createElement("p")
      var tp3 = document.createElement("p")
      var ti = document.createElement("img")
      var ta=document.createElement("a")
      ta.setAttribute('href',"productdetails.html?product_id="+c.id)
      ti.src = c.preview
      ti.appendChild(tbr)
      ti.height = 200
      ti.width = 150
      var textNode1 = document.createTextNode(c.brand)
      var textNode2 = document.createTextNode(c.name)
      var textNode3 = document.createTextNode("Rs."+c.price)
      tp1.appendChild(textNode1)
      tp1.appendChild(tbr)
      tp2.appendChild(textNode2)
      tp2.appendChild(tbr)
      tp3.appendChild(textNode3)
      ta.appendChild(ti)
      tb.append(ta)
      tb.append(tp2)
      tb.append(tp1)
      tb.append(tp3)
      tb.id = c.id
      tp2.style.fontSize=14;
      tp1.style.fontSize=10;
      tp3.style.color="cyan"
      clo.append(tb)
}
var c1=0
for(var i=0;i<f.length;i++){
      c1+=f[i].count
  }
 tc.textContent=c1
