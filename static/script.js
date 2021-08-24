document.getElementById('button-addon2').addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector('.box2').innerHTML="<p>Loading...</p>";
    let val=document.getElementById('inp').value;
    let url=`http://numbersapi.com/${val}`;
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        document.querySelector('.box2').innerHTML=`<p>${data}</p>`
    })
})