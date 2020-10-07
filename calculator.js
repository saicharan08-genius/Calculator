const ERROR = 'Please enter a correct mathematical expression.';
const E = Math.E;
const PI = Math.PI;

const GREETINGS = [
	'hi',
	'hello',
	'how are you?',
	'namaste',
	'hey',
	'i am good',
	'i want to perform some calculation',
	'can you help?',
	'can you help me?',
	'help',
	'more help'
];

const GREETINGS_RESPONSES = [
	'Hi there',
	'Hello from the other side!',
	'I am good, how about you?',
	'Namaste!',
	'Hey buddy!',
	'That\'s great! So, what can I do for you?',
	'Sure, tell me an expression',
	'How can I help you?',
	'How can I help you?',
	'You can write an expression like 2*5*cos(30)*log(sin(90)) ',
	'you can use sin, cos, tan, log, sqrt, ^, +, *, /, -, +, pi, e, !(for factorial), %(for remainder)'
];

var f = [];
function factorial (n) {
  if (n === 0 || n === 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 

async function respond(inputText){
	if (GREETINGS.indexOf(inputText.toLowerCase()) > -1) {
		const idx = GREETINGS.indexOf(inputText.toLowerCase());
		Bot.send(GREETINGS_RESPONSES[idx]);
		return;
	}
	
	try{
		f = [];
		inputText = inputText
		//pi
		.replace(/pi/g, PI)
		//e
		.replace(/e/g, E)
		//log base E
		.replace(/log/g, "Math.log")
		//sin
		.replace(/sin/g, "Math.sin")
		//cos
		.replace(/cos/g, "Math.cos")
		//tan
		.replace(/tan/g, "Math.tan")
		//square root
		.replace(/sqrt/g, "Math.sqrt")
		//power
		.replace(/\^+/g, "**")
		
		//! - factorial
		.replace(/(\d+)!/g, "factorial($1)");

		const result = eval(inputText).toFixed(2);

if(isNaN(result)) {
Bot.send("Please re-check your expression, there seems to be a mathematical error");
			return;
		}

		Bot.send(`Your answer is ${result}`);
	}catch(e) {
		Bot.send(ERROR);
	}
 }
