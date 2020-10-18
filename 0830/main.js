const cards = document.getElementsByClassName("card");
const overlay = document.getElementsByClassName("body--overlay")[0];
for(let i = 0; i < cards.length; i++){
    cards[i].onclick = function(event){
        console.log(event.target);
        overlay.style.width = "100%";
        setTimeout(function(){
            window.location = "https://www.google.nl"
        }, 750);
    } 
}