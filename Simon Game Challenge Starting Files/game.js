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
    userClickerPattern=[]
    randomNumber=Math.floor(Math.random()*4)
    
    randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var name = randomChosenColour;
    playSound(name);
    

    
}

function playSound(sn){
    self.name=sn;
    var audio = new Audio("sounds/" + self.name + ".mp3");
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
                $('#level-title').text("Level "+level); 
                setTimeout(function () {
                    NextSequence();
                  }, 1000);
                break;
            }
            
        }
        else{
            alert("end");

        }
        
    }
}  
