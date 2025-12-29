const hour = document.getElementById("hour");
const mint = document.getElementById("mint");
const sec = document.getElementById("sec");


function updateTime() {
  const date = new Date()
  updateHour = date.getHours();
  updateMinutes = date.getMinutes();
  updateSeconds = date.getSeconds();

  hour.style.transform = `rotate(${updateHour*30}deg)`;
  mint.style.transform = `rotate(${updateMinutes*6}deg)`;
  sec.style.transform = `rotate(${updateSeconds*6}deg)`;



}



setInterval(updateTime,1000)


const btn = document.getElementById("themeBtn")

btn.addEventListener("click",()=> { 
  const body = document.querySelector("body")

  body.classList.toggle("dark")
})