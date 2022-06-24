document.querySelector("#menu").addEventListener("click", function () {
    document.querySelector(".menu_page").style.opacity = "1";
})
document.querySelector("#cross").addEventListener("click", function () {
    document.querySelector(".menu_page").style.opacity = "0";
})

var arr=[
   {name:"Andhra Pradesh",img:"/images/1/andhra-pradesh-tourism.jpg",para:"Andhra Pradesh comprises two major regions, namely Rayalaseema in the south-west and Coastal Andhra bordering the Bay of Bengal in the east and north-east.",added:true},
   {name:"Arunachal Pradesh",img:"/images/1/Arunachal Pradesh.jpg",para:"Arunachal Pradesh is a state in Northeastern India. It was formed from the erstwhile North-East Frontier Agency (NEFA) region, and became a state on 20 .",added:true},
   {name:"Assam",img:"/images/1/Assam.webp",para:"Assam is a state in northeastern India, south of the eastern Himalayas along the Brahmaputra and Barak River valleys. Assam covers an area of 78,438 km2 ...",added:true},
   {name:"Bihar",img:"/images/1/Bihar.jpg",para:"Bihar is a state in eastern India. It is the third-largest state by population and twelfth-largest by territory, with an area of 94,163 km2 (36,357 sq mi).",added:true},
   {name:"Chhattisgarh",img:"/images/1/chhattisgarh.jpg",para:"Chhattisgarh is a landlocked and heavily forested state located in the region of Central India. Formerly part of Madhya Pradesh it was granted statehood on ...",added:true},
   {name:"Goa",img:"/images/1/goa.jpg",para:"Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.",added:true},
   {name:"Gujarat",img:"/images/1/Gujarat.webp",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},   
]

function showcase(elem){
   var temp="";

   elem.forEach(function(data,index){
      temp+=`
      <div class="cards">
      <div class="card">
      <ul class="ul">
          <li>
              <i id="${index}" class="ri-heart-line"></i>
          </li>
      </ul>
      <img src="${data.img}" alt="">
      <div class="con-text">
          <p>
              ${data.para}
          </p>
          
      </div>
  </div>
  <h2>
      ${data.name}
  </h2>
  </div>`
   })
document.querySelector(".flex").innerHTML=temp;
   
}
showcase(arr);



var cards=document.querySelector(".ul li i")
cards.addEventListener("click",function(dts){
   arr[dts.target.id].added = !arr[dts.target.id].added; 
   showcase(arr)
})
function showfilter(){
   var arr2=[]
   arr.forEach(function(hell){
      if(hell.added===true){
         arr2.push(hell)
      }
   })
   showcase(arr2)
}

var check=document.querySelector("#main2")
check.addEventListener("click",function(){
  showfilter()
})

var user=document.querySelector("#user");
flag=1
user.addEventListener("click",function(){
   if(flag==0){
    document.querySelector(".logout").style.display="none";
    flag=1;
   }
   else if (flag==1) {
    document.querySelector(".logout").style.display="initial";
    flag=0;
   } 
})
