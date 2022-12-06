console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3")
let nextTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")

let turn = "X";
let isgameOver = false;




//game start
// document.querySelector('.imgbox3').getElementsByTagName('img')[0].style.width = '300px';
// let image = document.getElementsByTagName('img');

// function photoSwitch(){

//     // begin your CSS animation by applying class
//     img.setAttribute("class", "some-animation");

//     // have javascript wait 5s before switching the image source
//     setTimeout(function(){
//         img.src = "gameon.gif";
//     },2000);
// }

// photoSwitch();

// Function to change turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X"
}

// Function to check for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "  
            isgameOver = true;
            gameover.play();
            document.querySelector('.imgbox1').getElementsByTagName('img')[0].style.width = '300px';
            document.querySelector(".line").style.width ="20vw"; 
            document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
   
    })
   
}



// Game Logic

// music.play();

//first of all we got all boxes having class name box
let boxes = document.getElementsByClassName("box");


Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',() => { 
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            nextTurn.play();
            checkWin();
           
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText = 'Turn for' + turn;

            }
        }
    })
})


//add onClick listener to reset button

reset.addEventListener('click',() => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    isgameOver = false;
    document.querySelector(".line").style.width ="0vw"; 
    document.getElementsByClassName("info")[0].innerText = 'Turn for' + turn;
    document.querySelector('.imgbox1').getElementsByTagName('img')[0].style.width = '0px';
   

})

//Function to check for a tie game
// const checkTie = () => {
//     let boxtext = document.getElementsByClassName('boxtext')
//     let wins = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6],
//     ]
    

//     wins.forEach(e => {
        
//         if( 
//             (boxtext[e[0]].innerText !== " ") &&
//             (boxtext[e[1]].innerText !== " ") &&
//             (boxtext[e[2]].innerText !== " ") &&
//             (boxtext[e[3]].innerText !== " ") &&
//             (boxtext[e[4]].innerText !== " ") &&
//             (boxtext[e[5]].innerText !== " ") &&
//             (boxtext[e[6]].innerText !== " ") &&
//             (boxtext[e[7]].innerText !== " ") &&
//             (boxtext[e[8]].innerText !== " ") 
//         ){

//             if(!((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) &&
//                 !((boxtext[e[3]].innerText === boxtext[e[4]].innerText) && (boxtext[e[4]].innerText === boxtext[e[5]].innerText) && (boxtext[e[3]].innerText !== "")) &&
//                 !((boxtext[e[6]].innerText === boxtext[e[7]].innerText) && (boxtext[e[7]].innerText === boxtext[e[8]].innerText) && (boxtext[e[6]].innerText !== "")) &&
//                 !((boxtext[e[0]].innerText === boxtext[e[3]].innerText) && (boxtext[e[3]].innerText === boxtext[e[6]].innerText) && (boxtext[e[0]].innerText !== "")) &&
//                 !((boxtext[e[1]].innerText === boxtext[e[4]].innerText) && (boxtext[e[4]].innerText === boxtext[e[7]].innerText) && (boxtext[e[1]].innerText !== "")) &&
//                 !((boxtext[e[2]].innerText === boxtext[e[5]].innerText) && (boxtext[e[5]].innerText === boxtext[e[8]].innerText) && (boxtext[e[2]].innerText !== "")) &&
//                 !((boxtext[e[0]].innerText === boxtext[e[4]].innerText) && (boxtext[e[4]].innerText === boxtext[e[8]].innerText) && (boxtext[e[0]].innerText !== "")) &&
//                 !((boxtext[e[2]].innerText === boxtext[e[4]].innerText) && (boxtext[e[4]].innerText === boxtext[e[6]].innerText) && (boxtext[e[2]].innerText !== "")) 
//                 ){
                
                
//                 document.querySelector('.info').innerText = 'Game Tie';
//                 isgameOver = true;

//                 document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = '300px';
//             }


//         }
        
//     })
    
// }
