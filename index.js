const array = [];

function display(playersField) {
    let tableBody = document.getElementById("players");
    tableBody.innerHTML = "";
    for (let i = 0; i < playersField.length; i++) {
        const name = array[i];
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }

}

function playerAdded(element) {

    const playerName = element.parentNode.children[0].innerText;
    if (array.length < 5) {
        document.getElementById("total-added-player").innerText = array.length + 1;
        array.push(playerName);
    } else {

        alert("You allready select 5 players");
    }
    display(array);
}


document.getElementById("calculate").addEventListener("click", function () {


    let input = document.getElementById("per-player").value;
    let subTotalElement = input * array.length;
    console.log(subTotalElement);
    let subTotal = document.getElementById("sub-total");
    subTotal.innerText = subTotalElement;

})

document.getElementById("calculate-total").addEventListener("click", function () {
    let managerString = document.getElementById("manager").value;
    let manager = parseInt(managerString);
    console.log(manager);
    let coachString = document.getElementById("coach").value;
    let coach = parseInt(coachString);
    console.log(coach);
    let totalStrint = document.getElementById("total");
    console.log(totalStrint);
    let subTotalString = document.getElementById("sub-total").innerText;
    let subTotal = parseInt(subTotalString);
    let totalElementString = subTotal + manager + coach;
    let totalElement = parseInt(totalElementString);
    total.innerText = totalElement;
})

