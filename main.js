let count = 0;
let gameOver = false;
const xImage = '<img src="/img/x.png" width="100px" height="100px">';
const oImage = '<img src="/img/o.png" width="100px" height="100px">';
function ticMark(position){
    if(gameOver){
        alert("This game is over!");
    }else{

        console.log("position " + position);
        console.log(document.getElementById(position).innerHTML);

        if(document.getElementById(position).innerHTML == '<img src="/img/square.png" width="100px" height="100px">'){
            if(count % 2 === 0){
                document.getElementById(position).innerHTML = xImage;
                if(winCheck(xImage)){
                    alert('X won');
                }
                document.getElementById("turn").innerHTML = "O turn";
            }else{
                document.getElementById(position).innerHTML = oImage;
                if(winCheck(oImage)){
                    alert('O won');
                }
                document.getElementById("turn").innerHTML = "X turn";
            }

            //GAME LOGIC

            count++;
        }else{
            alert("Pick an open spot!");
        }
    }
}

function winCheck(turn){


console.log("in win check " + document.getElementById("1").innerHTML);
console.log(turn);

    if((document.getElementById("1").innerHTML === document.getElementById("2").innerHTML && 
       document.getElementById("2").innerHTML === document.getElementById("3").innerHTML &&
       document.getElementById("3").innerHTML === turn) 
       ||
       (document.getElementById("4").innerHTML === document.getElementById("5").innerHTML && 
       document.getElementById("5").innerHTML === document.getElementById("6").innerHTML &&
       document.getElementById("6").innerHTML === turn)
       ||
       (document.getElementById("7").innerHTML === document.getElementById("8").innerHTML && 
       document.getElementById("8").innerHTML === document.getElementById("9").innerHTML &&
       document.getElementById("9").innerHTML === turn)
       ||
       (document.getElementById("1").innerHTML === document.getElementById("4").innerHTML && 
       document.getElementById("4").innerHTML === document.getElementById("7").innerHTML &&
       document.getElementById("7").innerHTML === turn)
       ||
       (document.getElementById("2").innerHTML === document.getElementById("5").innerHTML && 
       document.getElementById("5").innerHTML === document.getElementById("8").innerHTML &&
       document.getElementById("8").innerHTML === turn)
       ||
       (document.getElementById("3").innerHTML === document.getElementById("6").innerHTML && 
       document.getElementById("6").innerHTML === document.getElementById("9").innerHTML &&
       document.getElementById("9").innerHTML === turn)
       ||
       (document.getElementById("7").innerHTML === document.getElementById("8").innerHTML && 
       document.getElementById("8").innerHTML === document.getElementById("9").innerHTML &&
       document.getElementById("9").innerHTML === turn)
       ||
       (document.getElementById("1").innerHTML === document.getElementById("5").innerHTML && 
       document.getElementById("5").innerHTML === document.getElementById("9").innerHTML &&
       document.getElementById("9").innerHTML === turn)
       ||
       (document.getElementById("3").innerHTML === document.getElementById("5").innerHTML && 
       document.getElementById("5").innerHTML === document.getElementById("7").innerHTML &&
       document.getElementById("7").innerHTML === turn)
       ){
        gameOver = true;
        return true;
    }else{
        return false;
    }


}