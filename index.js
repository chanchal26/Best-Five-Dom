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


