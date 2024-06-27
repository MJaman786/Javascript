let count = localStorage.getItem('count')||0;
function onBtnClicks(){
    let button = document.querySelector(".my-btn")
    count++
    localStorage.setItem('noOfTimesClicked', count)
    button.innerText = count;

    if(count % 2 == 0){
        button.style.backgroundColor = "green";
    }
    else{
        button.style.backgroundColor = "red";
    }
}
