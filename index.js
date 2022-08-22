// const btn = document.getElementsByClassName("select-btn");
// let playerField = document.getElementsByClassName("player-field");
// function addtoev() {
//     for (let i = 0; i < btn.length; i++) {
//         btn[i].addEventListener("click", function () {
//             let playerName = btn[i].parentElement.children[0].innerHTML;
//             for (let c = 0; c < playerField.length; c++) {
//                 playerField[c].innerHTML = playerName;
//             }
//         });
//     }
// }
// window.addEventListener("load", function () {
//     addtoev();
// });

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


    array.push(playerName);
    if (array.length <= 5) {
        document.getElementById("total-added-player").innerText = array.length;

    } else {

        alert("You allready select 5 players");
    }

    display(array);
    const button = document.getElementsByClassName("select-btn");
    button.disable = true;
}
