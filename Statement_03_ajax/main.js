function DisplayData() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let html = ` <center>
    <table border='2px'>
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
                <td>${element?.name}</td>
                <td>${element?.phone}</td>
                <td>${element?.div || "11"}</td>
            </tr>
        `
    })

    html += '</tbody> </table></center>';

    const w = open()
    w.document.body.innerHTML = html;
}

function addAndDisplayData(data) {
    let arr = JSON.parse(localStorage.getItem('users')) || []; // if array not present in localStorage then take empty array
    arr.unshift(data); // add element at the start of array
    localStorage.setItem('users', JSON.stringify(arr));
    DisplayData();
}

document.forms.registrationForm.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let div = document.getElementById('div').value;

    let postObj = { name, phone, div };

    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: JSON.stringify(postObj),
        contentType: "application/json",

        success: function (newUser) {
            addAndDisplayData(postObj)
        },
        error: function (error) {
            console.log(error)
            addAndDisplayData(postObj)
        }
    });

}