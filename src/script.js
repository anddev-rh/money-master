const userName = document.querySelector('.user-name')
const userBalance = document.querySelector('.user-balance')
const introButton = document.querySelector('.intro-button')
const enterData = document.querySelector('.enter-data')
const userDataName = document.querySelector('.form--userdata__name')
const userDataBalance = document.querySelector('.form--userdata__balance-value')


let user = {
  "name": String,
  "balance": Number,
  "transactions": {
    "number": 1,
    "description": String,
    "amount": Number,
    "date": new Date()
  }
}

function getUserData () {
  user.name = userName.value
  user.balance = parseInt(userBalance.value)

  if (user.name == "" || user.balance == NaN) {
    alert("Ingresa tu nombre y tu dinero actual para continuar.")
  } else {
    userDataName.textContent = user.name
    userDataBalance.textContent = `${user.balance}`
    enterData.classList.add('hide')
    console.log(user);
  }
}


introButton.addEventListener('click', getUserData)


