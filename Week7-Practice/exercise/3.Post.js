// 
function postData() {

    url = "https://reqres.in/api/users"
    data = {
        "email": "dummy@gmail.com",
        "first_name": "Phil",
        "last_name": "Test"
    }

    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }


    fetch(url, params).then(response => response.json())
        .then(data => console.log(data));

}

postData();