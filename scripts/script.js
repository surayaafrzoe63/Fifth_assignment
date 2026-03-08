// const button=document.querySelectorAll(".filter-btn")
// button.forEach(btn=>{
//   btn.addEventListener("click",()=>{
//     button.forEach(b=>{
//       b.classList.remove("bg-primary", "text-white");
      
//       b.classList.add("text-[#64748B]");

//     })
//      btn.classList.add("bg-primary", "text-white");
      
//       btn.classList.remove("text-[#64748B]");

//   })

// })

// toggeling
const allFilterBtn=document.getElementById("all-btn")
const openFilterBtn=document.getElementById("open-btn")
const closedFilterBtn=document.getElementById("closed-btn")

allFilterBtn.addEventListener("click",()=>{
  allFilterBtn.classList.add("bg-primary", "text-white")
  openFilterBtn.classList.remove("bg-primary", "text-white")
  closedFilterBtn.classList.remove("bg-primary", "text-white")
})
openFilterBtn.addEventListener("click",()=>{
  openFilterBtn.classList.add("bg-primary", "text-white")
  allFilterBtn.classList.remove("bg-primary", "text-white")
  closedFilterBtn.classList.remove("bg-primary", "text-white")
})
closedFilterBtn.addEventListener("click",()=>{
  closedFilterBtn.classList.add("bg-primary", "text-white")
  allFilterBtn.classList.remove("bg-primary", "text-white")
   openFilterBtn.classList.remove("bg-primary", "text-white")
})


// json formate
function loadData (url){
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>displayData(data.data))
}
loadData("https://phi-lab-server.vercel.app/api/v1/lab/issues")

function displayData(items){
  const cardContainer=document.getElementById('card-container')
    console.log(items);}

