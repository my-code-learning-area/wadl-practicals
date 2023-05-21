function FetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.onload = () => {
        let response = xhr.responseText;
        let arr = JSON.parse(localStorage.getItem('users'));
        if (!arr) {
            localStorage.setItem("users", response);
        }
        // DisplayData();
    };
}

function DisplayData() {
    let tbody = document.getElementById("tbody");
    let users = JSON.parse(localStorage.getItem("users"));
    let html = `
    <table>
    <thead>
        <tr>
            <th>
                Name
            </th>
            <th>
                Phone-Number
            </th>
            <th>
                Division
            </th>
        </tr>
    </thead>
    <tbody>
    `;
    users.forEach(element => {
        html += `
        <tr>
        <td>${element.name}</td>
        <td>${element.phone}</td>
        <td>${element.div}</td>
        </tr>
        `
    })

    html += '</tbody> </table>';

    tbody.innerHTML = html;

    const w = open()
    w.document.body.innerHTML = html;
}

FetchData();

document.getElementById("btn").addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let div = document.getElementById('div').value;
    let postObj = { name, phone, div };
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
    xhr.setRequestHeader('Content-type', 'application/json', 'charset=UTF-8');
    xhr.send(JSON.stringify(postObj));
    xhr.onload = () => {
        if (xhr.status == 201) {
            let arr = JSON.parse(localStorage.getItem('users'));
            arr.unshift(postObj);
            localStorage.setItem('users', JSON.stringify(arr));
            DisplayData();
        }
    };
});

