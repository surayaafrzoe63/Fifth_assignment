document.getElementById('login-btn').addEventListener('click', function () {
  const inputName = document.getElementById('input-name')
  const show = inputName.value
  console.log(show)
const pinInput=document.getElementById('input-pin')
const pin=pinInput.value
console.log(pin)

if(show=='admin' && pin=='admin123'){
 
 window.location.assign('home.html')
// window.location.assign('/h')
}
else{alert('Login failed')}
})