let randomNumber = Math.floor(Math.random() * 6);

// console.log(randomNumber);

let question = prompt("Ask your question.");

switch (randomNumber) {
    case 0:
        answer = "You are doomed.";
        break;
    case 1:
        answer = "It can't be too easy.";
        break;
    case 2:
        answer = "Try harder.";
        break;
    case 3:
        answer = "All good things come to an end.";
        break;
    case 4:
        answer = "Take it easy.";
        break;
    case 5:
        answer = "Come on, now.";
        break;
    default:
        answer = "You better figure something out.";
        break;
}

let outPut = `The question you asked was ${question}, my response is ${answer}`;

console.log(outPut);
