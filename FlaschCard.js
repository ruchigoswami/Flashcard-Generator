var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var Inquirer = require("Inquirer");

var initialPrompt = function() {
	Inquirer.prompt([{
		type: "list",
		message: "What do you want to do?",
		choices: ["Basic Flash Card", "Cloze Flash Card",],
		name: "action",
	}]).then(function (inquirerResponse){
		if (inquirerResponse.action === "Basic Flash Card"){
			var question = new BasicCard("Who was the first president of the United States?", "George Washington");
			question.activityLog();
			console.log(question.front);
			setTimeout(function(){ console.log(question.back); }, 3000);
		} else if (inquirerResponse.action === "Cloze Flash Card"){
			var question = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
			question.activityLog();
			console.log(question.partial);
			setTimeout(function(){ console.log(question.cloze); console.log(question.text);}, 3000);
		}
	});
};

initialPrompt();

