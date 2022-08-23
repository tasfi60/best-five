


const list = [];

// players-cart
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

    element.style.color = "gray";

    element.disabled = true;

}
let totalPlayerCost = 0;
function playerExp(element) {

    const tp = document.getElementById('total-players');
    totalPlayerCost = tp.innerText * 1000;
    console.log(totalPlayerCost);

    const tpCost = document.getElementById('playerExp');
    tpCost.textContent = '';

    const tr1 = document.createElement("span");
    tr1.innerHTML = `<span class="text-white text-center fw-bold" style="border: hidden;">$${totalPlayerCost}</span>`;
    tpCost.appendChild(tr1);

}


// const cart = [];
// // products-cart

// function displayProduct()
// {
//     let totalPrice = 0;
//     const totalProducts = document.getElementById("total-players");
//     totalProducts.innerText = cart.length;

//     const cartContainer = document.getElementById("player-list");
//     cartContainer.textContent = '';

//     for(let i = 0; i < cart.length; i++)
//     {
//         // totalPrice += cart[i].pdPrice;

//         const tr = document.createElement("tr");
//         tr.innerHTML = `
//         <th>${i+1}</th>
//         <td>${cart[i].pdName}</td>
//         `;
//         cartContainer.appendChild(tr);
//     }
//     // const tr = document.createElement('tr');
//     // tr.innerHTML = `
//     // <th></th>
//     // <td>Total Price</td>
//     // <td>${totalPrice}</td>
//     // `;

//     // cartContainer.appendChild(tr);
// }



// function addToCart(element) {
//     const pdName = element.parentNode.children[0].innerText;
   
//     const pd = {
//         pdName: pdName
//     }

//     cart.push(pd);
    
//     displayProduct();
// }







// document.getElementById('select-btn').addEventListener('click',function(){
//     const playerlist = document.getElementById('player-list');
//     const li = document.createElement('li');

//     let name = [];
//     name = document.getElementsByClassName('p-name');

//     for(let i=0; i< name.length; i++)
//     {
//         if(i==)
//     }


    
//     // name.innerText = pname.length;
    
//     // for (let i = 0; i < pname.length; i++) {
//     //     console.log(pname[i].innerText);
//     // }

// })
