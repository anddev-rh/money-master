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
    alert("Ingresa tu nombre y tu dinero actual para continuar.")
  } else {
    userDataName.textContent = user.name
    userDataBalance.textContent = `$ ${user.balance}`
    enterData.classList.add('hide')
    transactionContainer.classList.remove('hide')
  }
}

function printTransaction () {
  if(transAmmount.value === "") {
    alert('Por favor ingresa una cantidad, para poder registrar tu transacción.')
  } else if (transDescription.value === "") {
    alert('Por favor agrega una descripción de tu transacción para continuar.')
  } else {
    //alert('movimiento registrado')

    user.transactions.description = transDescription.value
    user.transactions.amount = parseInt(transAmmount.value)

    const prints = Object.values(user.transactions)
    //console.log(prints);



    prints.forEach( function (element, index) {
      element.index  = document.createElement("P")
      element.textContent = prints[index]
      //transactionTable.appendChild(element.index)
      
      let sign
      if (transType.value == 0) {
        sign = "-"
        element[2].style.color = '#C60000'
        user.balance -= user.transactions.amount
      }
      
      
      console.log(element);
    } )
    
/*     let sign 
    if (transType.value == 0) {
      sign = "-"
      printAmmount.style.color = '#C60000'
      user.balance -= user.transactions.amount
    } else {
      sign = "+"
      printAmmount.style.color = '#008E0E'
      user.balance += user.transactions.amount
    } */

    /* let num = user.transactions.number
    user.transactions.description = transDescription.value
    user.transactions.amount = parseInt(transAmmount.value)
    
    
    let printNum = document.createElement("P")
    let printDescription = document.createElement("P")
    let printAmmount = document.createElement("P")
    let printDate = document.createElement("P")

    let sign 
    if (transType.value == 0) {
      sign = "-"
      printAmmount.style.color = '#C60000'
      user.balance -= user.transactions.amount
    } else {
      sign = "+"
      printAmmount.style.color = '#008E0E'
      user.balance += user.transactions.amount
    }
    //console.log(transType.value);
    


    userDataBalance.textContent = `$ ${user.balance}`

    printNum.textContent = num
    printDescription.textContent = user.transactions.description
    printAmmount.textContent = sign + user.transactions.amount 
    printDate.textContent = user.transactions.date.toLocaleDateString()

    //console.log(printNum);

    //printNum.classList.add('transaction-table--item')


    printNum.classList.add('transaction-table--item__new')
    printDescription.classList.add('transaction-table--item__new')
    printAmmount.classList.add('transaction-table--item__new')
    printDate.classList.add('transaction-table--item__new')

    transactionTable.appendChild(printNum)
    transactionTable.appendChild(printDescription)
    transactionTable.appendChild(printAmmount)
    transactionTable.appendChild(printDate) */

    user.transactions.number ++

  }
}



introButton.addEventListener('click', getUserData)


buttonAdd.addEventListener('click', printTransaction)