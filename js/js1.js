const list = [];
let num = 0;


// players-cart----
function displayPlayers() {

    const totalPlayers = document.getElementById("total-players");
    totalPlayers.innerText = list.length;

    const listContainer = document.getElementById("playerList");
    listContainer.textContent = '';

    for (let i = 0; i < list.length; i++) {

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th class="text-white text-center">${i + 1}</th>
        <td class="text-white text-center" >${list[i].pLName}</td>
        `;
        listContainer.appendChild(tr);
    }
}
cnt = 0;
function addList(element) {
    cnt++;
    
    element.disabled = true;

    if (cnt > 5) {
        alert('you can not select more than 5 players!');
        return;
    }
    const pLName = element.parentNode.children[0].innerText;

    const pL = {
        pLName: pLName
    }
    if (list.length < 5) {
        list.push(pL);
    }
    displayPlayers();

    

}




//player expenses----
document.getElementById('calculate-btn').addEventListener('click',function(){

    const expensesperplayer = document.getElementById('expense-calculation');
    const expenseAmountString = expensesperplayer.value;
    const expenseAmount = parseFloat(expenseAmountString);

    const totalexpense = document.getElementById('expense');
    const totalexp = totalexpense.innerText;
    totalexpense.innerText = expenseAmount;

    const totalexpenseofplayers = expenseAmount*cnt;
    totalexpense.innerText = totalexpenseofplayers;
   
    expensesperplayer.value = '';
     num = totalexpenseofplayers;

})


//Total-cost----

document.getElementById('btn-total').addEventListener('click',function(){

    const Manager_cost = document.getElementById('managercost');
    const costofmanagerString = Manager_cost.value;
    const costofmanager = parseFloat(costofmanagerString);

    const Coach_cost = document.getElementById('coachcost');
    const costofcoachString = Coach_cost.value;
    const costofcoach = parseInt(costofcoachString);

    const totalamount = document.getElementById('totalcost');
    const total = totalamount.innerText;

    const totalcost = costofmanager + costofcoach + num;
    totalamount.innerText = totalcost;
    Manager_cost.value = '';
    Coach_cost.value = '';
    

})


