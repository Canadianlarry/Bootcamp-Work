const fetch_btn=document.getElementById('myBtn');
const fox_result=document.getElementById('result');
fetch_btn.addEventListener('click',getData);


function getData(){
        url="https://randomfox.ca/floof/";
        fetch(url)
            .then((response)=>{
            console.log("Promise done");
             return response.json();})
            .then((data)=>{
           fox_result.innerHTML=`<img src=${data.image} alt="fox"/>`
            });
    }

    getData();