let tableautask = [];
document.getElementById("bouton").addEventListener("click", function(){
    let task = document.getElementById("input").value;
    tableautask.push(`${task}`)
    console.log(`${tableautask}`);
})