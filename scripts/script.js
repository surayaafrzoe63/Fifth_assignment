let alldata=[]
function loadData(url){
  fetch(url)
  .then((res)=>res.json())
  .then(data=>{
    alldata=data.data;
    displayData(alldata)
  })
}
loadData("https://phi-lab-server.vercel.app/api/v1/lab/issues")


function showSpinner(){
  spinner.classList.remove("hidden")
}

function hideSpinner(){
  spinner.classList.add("hidden")
}

// toggeling
const allFilterBtn = document.getElementById("all-btn")
const openFilterBtn = document.getElementById("open-btn")
const closedFilterBtn = document.getElementById("closed-btn")
const spinner= document.getElementById("loading-spinner")

allFilterBtn.addEventListener("click", () => {
  showSpinner()
  setTimeout(() => {
  allFilterBtn.classList.add("bg-primary", "text-white")
  openFilterBtn.classList.remove("bg-primary", "text-white")
  closedFilterBtn.classList.remove("bg-primary", "text-white")
  
  displayData(alldata)
  hideSpinner()
  }, 300)
})

openFilterBtn.addEventListener("click", () => {
  showSpinner()
   setTimeout(() => {
  openFilterBtn.classList.add("bg-primary", "text-white")
  allFilterBtn.classList.remove("bg-primary", "text-white")
  closedFilterBtn.classList.remove("bg-primary", "text-white")

   const openItems = alldata.filter(item => item.priority === "high" || item.priority === "medium")
  displayData(openItems)
  hideSpinner()
   }, 300)
})


closedFilterBtn.addEventListener("click", () => {
  showSpinner()
  setTimeout(() => {
  closedFilterBtn.classList.add("bg-primary", "text-white")
  allFilterBtn.classList.remove("bg-primary", "text-white")
  openFilterBtn.classList.remove("bg-primary", "text-white")
  const closedItems = alldata.filter(item => item.priority === "low")
  displayData(closedItems)
  hideSpinner()
   }, 300)
})


// json formate

function displayData(items) {
  const allContainer = document.getElementById('all-container')
  const issueCount = document.getElementById("issue-count")


  allContainer.innerHTML =""
  issueCount.innerText = items.length + " Issues"
  console.log(items);
  items.forEach((item) => {
    //priority color change
    let priorityColor = ""
    let image = ""
    
    if (item.priority === "high") {
      priorityColor = "bg-[#FEECEC] text-[#EF4444]"
      image = "assets/Open-Status.png"
      
    }
    else if (item.priority === "medium") {
      priorityColor = "bg-[#FFF6D1] text-[#F59E0B]"
      image = "assets/Open-Status.png"
      
    }
    else {
      priorityColor = "bg-[#EEEFF2] text-[#9CA3AF]"
        image = "assets/Status.png"}

        let borderTop=""

if (item.priority === "high" || item.priority === "medium") {
  borderTop = "border-t-3 border-[#00A96E]"
}
else {
  borderTop = "border-t-3 border-[#A855F7]"
}



  
    const div1 = document.createElement("div")
    div1.className = `card bg-base-100 shadow-sm p-2 h-full ${borderTop}`
    div1.innerHTML = `
          <div class="flex justify-between">
            <img  src="${image}" alt="">
            <div class="badge badge-error  border-none  ${priorityColor}">${item.priority}
            </div>
          </div>

      
          <div class="card-body text-left">
            <h2 class="text-[#1F2937] text-xl font-semibold text-[14px] line-clamp-2">
              ${item.title}
            </h2>
            <p class="text-[#64748B] text-xl text-[12px] line-clamp-3">${item.description}
            </p>
          </div>


        

            <div class="flex gap-2  border-b-2 border-gray-300 mb-2 pb-3">
            ${item.labels
        .map((label) => {
         let labelColor="" 
if(label === "bug"){
  labelColor = "bg-[#FEECEC] text-[#EF4444]"
 
}
else if(label === "help wanted"){
  labelColor = "bg-[#FFF6D1] text-[#F59E0B]"
 
}
else if(label === "enhancement"){
  labelColor = "bg-[#DEFCE8] text-[#00A96E]"
 

}
else{
  labelColor = "bg-[#FEECEC] text-[#EF4444]";
  image="assets/Vector (3).png"
}

         
          return `<span  class="badge badge-outline ${labelColor}">
        
      ${label}
    </span>`
        })
        .join("")
      }
            </div>
          <div class="space-y-1.5">
            <p class="text-[#64748B] text-[12px]">
              ${item.author}
            </p>
            <p class="text-[#64748B] text-[12px] ">
              ${item.createdAt}
            </p>
          </div>
  `
    allContainer.appendChild(div1)
  })

}


