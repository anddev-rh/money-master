const userName = document.querySelector('.user-name')
const userBalance = document.querySelector('.user-balance')
const introButton = document.querySelector('.intro-button')
const enterData = document.querySelector('.enter-data')
const userDataName = document.querySelector('.form--userdata__name')
const userDataBalance = document.querySelector('.form--userdata__balance-value')
const transactionContainer = document.querySelector('.transaction-container')
const buttonAdd = document.querySelector('.button-add')
const transDescription = document.querySelector('.trans-description')
const transAmmount = document.querySelector('.trans-ammount')
const transType = document.querySelector('.trans-type')

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
    transactionContainer.classList.remove('hide')
    console.log(user);
  }
}

function printTransaction () {
  if(transAmmount.value === "") {
    alert('Por favor ingresa una cantidad, para poder registrar tu transacción.')
  } else if (transDescription.value === "") {
    alert('Por favor agrega una descripción de tu transacción para continuar.')
  } else {
    alert('movimiento registrado')




  }
}



introButton.addEventListener('click', getUserData)


buttonAdd.addEventListener('click', printTransaction)