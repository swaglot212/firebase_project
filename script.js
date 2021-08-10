let button = document.querySelector("#submit");
let database = firebase.database().ref();

button.onclick = function(event) {
    event.preventDefault();
    let username = "Hendrix";
    let message = "I love";
    let value = {
        NAME: username,
        MESSAGE: message,
    }
    database.push(value);
}


database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    let row = rowData.val();
    console.log(row.NAME);
}
