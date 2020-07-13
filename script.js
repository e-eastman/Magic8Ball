$(document).ready(function(){

var magic8Ball = {};
magic8Ball.answerList = [ "It is certain", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Cannot predict now", "Don't count on it", "No", "Outlook not so good", "Very doubtful" ];
$("#answer").hide();

//define Method
	magic8Ball.askQuestion = function(question){ 	
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	//create a random number
	var randomNumber = Math.random(); 
	var randomNumberForAnswer = randomNumber * this.answerList.length;
	var randomIndex = Math.floor(randomNumberForAnswer);
	var answer = this.answerList[randomIndex];
	
	$("#answer").text( answer );
	console.log(question);
	console.log(answer);			  
};

	var onClick = function() {
	var question = prompt("Ask a Yes/No Question");
	magic8Ball.askQuestion(question);
	$("#answer").hide();
	$("#answer").fadeIn(4000);
	$("#8ball").effect( "shake" );
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");       
	};

	//wait half a second before showing prompt
	setTimeout(function(){
		//show prompt
		var question = prompt("Ask a yes or no question");
		magic8Ball.askQuestion(question)}, 500);
		$("#questionButton").click( onClick );
});
