function myfunc(score1,score2 ){
    var one = document.querySelector(".img1");
    var two = document.querySelector(".img2");
    var a = Math.floor(Math.random()*6+1);
    var b = Math.floor(Math.random()*6+1);
    // if(a == 2)
    //     one.setAttribute("src","images/dice2.png");
    // else if(a == 3)
    //     one.setAttribute("src","images/dice3.png");
    // else if(a == 4)
    //     one.setAttribute("src","images/dice4.png");
    // else if(a == 5)
    //     one.setAttribute("src","images/dice5.png");
    // else if(a == 6)
    //     one.setAttribute("src","images/dice6.png");
    one.setAttribute("src","images/dice"+a+".png");
    // if(b == 2)
    //     two.setAttribute("src","images/dice2.png");
    // else if(b == 3)
    //     two.setAttribute("src","images/dice3.png");
    // else if(b == 4)
    //     two.setAttribute("src","images/dice4.png");
    // else if(b == 5)
    //     two.setAttribute("src","images/dice5.png");
    // else if(b == 6)
    //     two.setAttribute("src","images/dice6.png");
    two.setAttribute("src","images/dice"+b+".png");
    if(a > b){
        document.querySelector(".container h1").textContent = "Player 1 Won!!";
        // score1++;
    } 
    else if(a < b){
        document.querySelector(".container h1").textContent = "Player 2 Won!!";
        // score2++;
    } 
    else
        document.querySelector(".container h1").textContent = "It's draw, refresh me again!";

    // alert("Player 1 score is: "+score1+" and player 2 score is: "+score2);
}

// var score1 = 0;
// var score2 = 0;
myfunc();
