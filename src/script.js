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
const transactionTable = document.querySelector('.transaction-table-grid')
const modalContainer = document.querySelector('.modal-container')
const modalTitle = document.querySelector('.modal--title')
const modalText = document.querySelector('.modal--text')
const closeButton = document.getElementById('close')





let user = {
  "name": String,
  "balance": Number,
  "transactions": {
    "number": 1,
    "description": String,
    "amount": Number,
    "date": new Date().toLocaleDateString()
  }
}

function getUserData () {
  user.name = userName.value
  user.balance = parseInt(userBalance.value)

  if (user.name == "" || user.balance.value === NaN) {
    modalContainer.classList.add('show')
    modalTitle.textContent = 'Espera...'
    modalText.textContent = 'Ingresa tu nombre y tu dinero actual para continuar.'
    //alert("Ingresa tu nombre y tu dinero actual para continuar.")
  } else {
    userDataName.textContent = user.name
    userDataBalance.textContent = `$ ${user.balance}`
    enterData.classList.add('hide')
    transactionContainer.classList.remove('hide')
  }
}

function printTransaction () {
  if(transAmmount.value === "") {
    modalContainer.classList.add('show')
    modalTitle.textContent = 'Mmmmm...'
    modalText.textContent = 'Por favor ingresa una cantidad, para poder registrar tu transacción.'
    //alert('Por favor ingresa una cantidad, para poder registrar tu transacción.')
  } else if (transDescription.value === "") {
    modalContainer.classList.add('show')
    modalTitle.textContent = 'Mmmmm...'
    modalText.textContent = 'Por favor agrega una descripción de tu transacción para continuar.'
    //alert('Por favor agrega una descripción de tu transacción para continuar.')
  } else {
    //alert('movimiento registrado')

    user.transactions.description = transDescription.value
    user.transactions.amount = parseInt(transAmmount.value)


    const prints = Object.values(user.transactions)
    //console.log(prints);

    const printAmmount = document.querySelector('.item__new2')

    prints.forEach( function (element, index) {
      element  = document.createElement("P")
      element.textContent = prints[index]
      transactionTable.appendChild(element)

      element.classList.add('transaction-table--item__new')
      //element.classList.add(`item__new${index}`)
      

      
      if(transType.value == 0 && index == 2) {
      
        element.textContent = `- $${user.transactions.amount}`
        element.classList.add('red')
        user.balance -= user.transactions.amount
      }

      if(transType.value == 1 && index == 2) {
        element.textContent = `+ $${user.transactions.amount}`
        element.classList.add('green')
        user.balance += user.transactions.amount
      }
      
      //console.log(element);
    } )
    
    userDataBalance.textContent = `$ ${user.balance}`


    user.transactions.number ++

    transDescription.value = ''
    transAmmount.value = ''
  }
}



introButton.addEventListener('click', getUserData)
buttonAdd.addEventListener('click', printTransaction)
closeButton.addEventListener('click', function(){
  modalContainer.classList.remove('show')
})