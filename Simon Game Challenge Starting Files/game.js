var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var level= 0;

var userClickerPattern=[];

$(document).on("keydown", NextSequence);

$(".btn").click(function(){
    //alert($(this).attr('id'));
    userClickerPattern.push($(this).attr('id'));
    var name = ($(this).attr('id'))
    playSound(name);
    animatePress(name);
    if(userClickerPattern.length==gamePattern.length){
        
        checkanswer(level)
    }

});


function NextSequence(){
    $('#level-title').text("Level "+level); 
    userClickerPattern=[]
    randomNumber=Math.floor(Math.random()*4)
    
    randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var name = randomChosenColour;
    playSound(name);
    

    
}

function playSound(sn){
    var audio = new Audio("sounds/" + sn + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


function checkanswer(currentLevel){

    for (var i=0; i<=currentLevel;i++){

        //check if both arrays have the
        if(userClickerPattern[i]==gamePattern[i]){
            console.log(gamePattern[i]+" "+userClickerPattern[i])
            if(i==currentLevel){
                console.log("finished level");
                console.log(gamePattern+" "+userClickerPattern); 
                level=level+1;
                
                setTimeout(function () {
                    NextSequence();
                  }, 1000);
                break;
            }
            
        }
        else{
            if(i==currentLevel){
                setTimeout(function(){
                    $('#level-title').text("Game Over, Press Any Key to Restart"); 
                    playSound("wrong");
                    $('body').addClass("game-over");
                    setTimeout(function () {
                        $('body').removeClass("game-over");
                      }, 200);
        
                },400);
                startOver();
    
            }
        }
        
    }
}  

function startOver(){
    level=0;
    gamePattern=[];
    userClickerPattern=[];
}