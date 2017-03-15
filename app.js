var questions = [
{question: " What was Quentin Tarantino's first feature length film? ", 
answer: "My Best Friend\'s Birthday",
possibleAnswer: ["Reservoir Dogs", "My Best Friend\'s Birthday", "Pulp Fiction", "Bottle Rocket"]},
{question: " What two films did Tarantino write before he was able to direct his first major feature? ", 
answer: "True Romance and Natural Born Killers",
possibleAnswer: ["True Romance and Natural Born Killers", "Eight Crazy Nights and Basic Instinct", "The English Patient and From Dusk Till Dawn", "Riding in Cars with Boys and Erin Brockovich"]},
{question: " Which actor joined Reservoir Dogs, appeasing the producers and allowing Tarantino to have a larger budget?",
answer: "Harvey Keitel",
possibleAnswer: ["Bruce Willis", "Tim Roth", "Harvey Keitel", "Michael Madson"]},
{question: " In the Tarantino universe, John Travolta's character in Pulp Fiction, Vincent Vega, is the brother to which 'Reservoir Dog'?",
answer: "Mr. Blonde",
possibleAnswer: ["Mr. Blonde", "Mr. Orange", "Mr. Pink", "Mr. Brown"]},
{question: " Samuel L. Jackson, who has appeared in more Tarantino films than any other actor, first appeared in which film?",
answer: "Pulp Fiction",
possibleAnswer: ["Jackie Brown", "Inglorious Basterds", "Kill Bill Vol. 2", "Pulp Fiction"]},
{question: " Which fading actor's career was revitalized in Pulp Fiction?", 
answer: "John Travolta",
possibleAnswer: ["John Travolta", "Uma Thurman", "Bruce Willis", "Tim Roth"]},
{question: " Which actress starred in Jackie Brown as the title character, and was Tarantino's only choice for the role?",
answer: "Pam Grier",
possibleAnswer: ["Leslie Uggams", "Chaka Kahn", "Pam Grier", "Lola Falana"]},
{question:" For which actress did Tarantino write Kill Bill Vol. 1 and 2?",
answer: "Uma Thurman",
possibleAnswer: ["Uma Thurman", "Rosario Dawson", "Pam Grier", "Bridget Fonda"]},
{question:" Which film took Tarantino the longest to write?",
answer:"Inglorious Basterds",
possibleAnswer: ["Pulp Fiction", "Kill Bill", "Hateful Eight", "Inglorious Basterds"]},
{question: " Which film did Tarantino create alongside Robert Rodriguez's Grindhouse to pay homage to thedouble features of the 70s?",
answer: "Death Proof",
possibleAnswer: ["Death Proof", "Jackie Brown", "Pulp Fiction", "Reservoir Dogs"]},
];

var currentQuestion = -1;

var questionNumber = 0

var obj;

var rightAnswers = 0;

var wrongAnswers = 0;

function nextQuestion() {
	$(".response").html("")
	currentQuestion +=1;
	obj = questions[currentQuestion];
	questionNumber +=1
	if(currentQuestion < questions.length){
		var html = "<form>" +
		"<h1>" + questionNumber + "/10" + obj.question + "</h1>" + "<br>" +
		"<label>Answer</label>" + "<br>"; 
		for(i=0; i<4; i++){
			html += '<input type="radio" name="answer" value="'+ obj.possibleAnswer[i] + '"';
			if(i==0){
				html += " checked>";
			}
			else {
				html += ">";
			};
			html += obj.possibleAnswer[i] +  
			"<br>";
		};
		html += "<br>" +
		"<button id= 'submitQuestion'>Submit</button>" +
		"</form>";
		$("#main").html(html);

		$("#submitQuestion").click(function(evt){
			evt.preventDefault();
			checkAnswer();
		});
	}
	else {
		$("#submitQuestion").click(function(evt){
			evt.preventDefault();
			checkAnswer();
		});
		endOfQuiz();
	}
}

function startQuiz() {
	$('#start').click(function(){
		nextQuestion();
	});
}

function endOfQuiz(){
	$(".score").html("You got " + rightAnswers + " right and " + wrongAnswers + " wrong.  Good job!");
	$("#main").html("");
}

function checkAnswer(){
	var userAnswer = $("input:radio[name='answer']:checked").val();
	console.log(userAnswer, obj.answer);
	if (userAnswer === obj.answer){
		rightAnswers +=1;
		$(".response").html("You got the right answer!" + "<button>Next</button>");
	}
	else {
		wrongAnswers +=1;
		$(".response").html("You suck at this, the right answer is " + obj.answer + "<button>Next</button>");
	};
	$(".response button").click(function(){
	nextQuestion();
});
}

startQuiz();