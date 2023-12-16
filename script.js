//// Make parenthesis work
////  fix "eval"

function addChar (newChar){
    var inputElement = document.getElementById("display");
    if (inputElement.value.length < 15){
        inputElement.value += newChar;
    }
    var funnyNumber = getFunnyNumber();
    console.log(funnyNumber);
}

function toggleBrackets() {
    var operators = ['+', '-','/','*'];
    var input = document.getElementById("display");
    var lastChar = input.value.charAt(input.value.length - 1);
    // console.log (lastChar);
    var openParenthesesCount = 0;
    var closedParenthesesCount = 0;
    for (currentChar of input.value) {
        if (currentChar == '('){
            openParenthesesCount++;
        }
        else if (currentChar == ')'){
            closedParenthesesCount++;
        }
    }
    if (operators.includes(lastChar) || openParenthesesCount <= closedParenthesesCount) {
        addChar('(');
    }
    else {
        addChar (')');
    }
}

function getFunnyNumber (){
    return 69;
}

function getAnswer (){
    var input = document.getElementById ("display");
    if (input.value == "9+10" || input.value == '10+9'){
        input.value = '21';
    }
    else {
        input.value = math.evaluate (input.value);
    }
}