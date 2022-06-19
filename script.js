let inpsearch=document.getElementById("inp-search");
let output=document.getElementById("output");

inpsearch.addEventListener("click", ()=>{
    let actorName=output.value;
    let finalURL=`https://www.breakingbadapi.com/api/characters?name=${actorName} `;
    console.log(finalURL);
    fetch(finalURL)
    .then((response)=> response.json())
    .then((data) => {
        result.innerHTML = `
        <img src="${data[0].img}" class="flag-img">
        <h2>${data[0].name} </h2>
        <div class="wrapper">
            <div class="data-wrapper"> 
                <h4>Birthday: </h4>
                <span>${data[0].birthday}</span>
            </div>
        </div>

        <div class="wrapper">
        <div class="data-wrapper"> 
            <h4>Status: </h4>
            <span>${data[0].status}</span>
        </div>
    </div>

    <div class="wrapper">
    <div class="data-wrapper"> 
        <h4>Quote: </h4>
        <span>${data[0].quote}</span>
    </div>
</div>

        `;
    });
});