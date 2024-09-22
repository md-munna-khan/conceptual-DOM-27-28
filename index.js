// getting all the value


// add event listener for calculate button

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click",function(){

    const income =parseFloat(document.getElementById("income").value)
   
    const software =parseFloat(document.getElementById("software").value)
   
    const courses =parseFloat(document.getElementById("courses").value)
   
    const internet =parseFloat(document.getElementById("internet").value);

if(income <0 || isNaN(income)){
   document.getElementById("income-error").classList.remove("hidden")
   return;
}




   const totalExpenses = software + courses + internet;
   const balance = income - totalExpenses;

   const totalExpensesElement = document.getElementById("total-expenses");
   totalExpensesElement.innerText =totalExpenses.toFixed(2)
   const balanceElement = document.getElementById("balance");
   balanceElement.innerText = balance.toFixed(2)



   const result = document.getElementById("results");result.classList.remove("hidden")



const historyItem = document.createElement("div")
historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";
historyItem.innerHTML = `

<p class ="text-xs text-gray-500"> ${new Date().toLocaleDateString()}</p>
<p class ="text-xs text-gray-500">income:$${income.toFixed(2)}</p>
<p class= "text-xs text-gray-500">Expenses:$${totalExpenses.toFixed(2)}</p>
<p class = "text-xs text-gray-500">Balance:$${balance.toFixed(2)}</p>


`

const historyContainer = document.getElementById("history-list")
historyContainer.insertBefore(historyItem,historyContainer.firstChild)
})
// add event listener for savings button
const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click",function(){
const savingPercentace = parseFloat(document.getElementById("savings").value);
console.log(savingPercentace)


const income =parseFloat(document.getElementById("income").value)
   
const software =parseFloat(document.getElementById("software").value)

const courses =parseFloat(document.getElementById("courses").value)

const internet =parseFloat(document.getElementById("internet").value)

 const totalExpenses = software + courses + internet;
   const balance = income - totalExpenses;
const savingsAmount = (savingPercentace * balance)/100;
const totalSavingsAmount = document.getElementById("savings-amount");
const remainingBalance = balance-savingsAmount
totalSavingsAmount.innerText = savingsAmount.toFixed(2)

const remainingElement = document.getElementById("remaining-balance")
remainingElement.innerText = remainingBalance.toFixed(2)
})

// history tab functionality
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click",function(){
   historyTab.classList.add('text-white','bg-gradient-to-r','from-blue-500', 'to-purple-600' );

   historyTab.classList.remove("text-gray-600")
   assistantTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500', 'to-purple-600' );
   assistantTab.classList.add("text-gray-600")
   document.getElementById("expense-form" ).classList.add("hidden")


   document.getElementById("history-section" ).classList.remove("hidden")
})
 
assistantTab.addEventListener("click",function(){
   assistantTab.classList.add('text-white','bg-gradient-to-r','from-blue-500', 'to-purple-600');
historyTab.classList.remove(
   'text-white','bg-gradient-to-r','from-blue-500', 'to-purple-600'
)
document.getElementById("expense-form" ).classList.remove("hidden")
document.getElementById("history-section" ).classList.add("hidden")
})

// live validation for input
document.getElementById("income").addEventListener("input",function(){
   const inputValue = parseFloat(document.getElementById("income").value)
   if(isNaN(inputValue)|| inputValue <= 0){


      document.getElementById("income-error").classList.remove("hidden")
      return;
   }
})