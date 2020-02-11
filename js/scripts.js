console.log("Hello World");
console.log("hello from master")
var number = '0';
var sum = 0;
var difference = 0;
var product = 0;
var quotient = 0;
var exponent = 0;
var deciError = 0;
var running = 0;
var inOperation;
var memory = '0';
var valid = 1;
var refresh = 0;
var error = 0;
var operationArray = [];
var visual = document.querySelector('.on-screen');
var clear = document.querySelector('.clr');
var del = document.querySelector('.del');

del.addEventListener('click',
  function deleteInput() {
    if(number.length == 1) {
      number = '0';
      visual.innerHTML = number;
    }
    else {
      number = number.slice(0, -1);
      visual.innerHTML = number;
    }
  });

clear.addEventListener('click',
  function clearScreen(){
    number = '0';
    visual.innerHTML = number;
    running = 0;
    valid = 1;
    refresh = 1;
    error = 0;
    operationArray = [];
  }
);



var equal = document.querySelector('.equal');
equal.addEventListener('click',
  function endOperation(){
    if(valid == 1){
      switch (operationArray[operationArray.length - 1]) {
        case 'plus':
          inOperation = Number(number) + inOperation;
          if(inOperation.toString().length > 7){
            number = inOperation.toExponential(2).toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
          else{
            if(inOperation % 1 == 0) {
              number = inOperation.toString();
              visual.innerHTML = number;
            }
            else {
              inOperation = inOperation.toFixed(2);
              number = inOperation.toString();
              visual.innerHTML = number;
            }
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
        case 'minus':
          inOperation = inOperation - Number(number);
          if(inOperation.toString().length > 7){
            number = inOperation.toExponential(2).toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
          else{
            if(inOperation % 1 == 0) {
              number = inOperation.toString();
              visual.innerHTML = number;
            }
            else {
              inOperation = inOperation.toFixed(2);
              number = inOperation.toString();
              visual.innerHTML = number;
            }
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
        case 'multiply':
          inOperation = inOperation * Number(number);
          if(inOperation.toString().length > 7){
            number = inOperation.toExponential(2).toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
          else{
            if(inOperation % 1 == 0) {
              number = inOperation.toString();
              visual.innerHTML = number;
            }
            else {
              inOperation = inOperation.toFixed(2);
              number = inOperation.toString();
              visual.innerHTML = number;
            }
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
        case 'divide':
          inOperation = inOperation / Number(number);
          if(Number(number) == 0) {
            number = 'NaN';
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            error = 1;
            break;
          }
          if(inOperation % 1 != 0) {
            inOperation = inOperation.toFixed(2);
          }
          if(inOperation.toString().length > 7){
            number = inOperation.toExponential(2).toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
          else{
            number = inOperation.toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
        case 'root':
          inOperation = Math.sqrt(Number(number));
          if(inOperation % 1 != 0) {
            inOperation = inOperation.toFixed(2);
          }
          if(inOperation.toString().length > 7){
            number = inOperation.toExponential(2).toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
          else{
            number = inOperation.toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          } 
        case 'exponent':
          inOperation = Math.pow(inOperation, Number(number));
          if(inOperation % 1 != 0) {
            inOperation = inOperation.toFixed(2);
          }
          if(inOperation.toString().length > 7){
            number = inOperation.toExponential(2).toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
          else{
            number = inOperation.toString();
            visual.innerHTML = number;
            valid = 1;
            running = 0;
            sum = 0;
            difference = 0;
            product = 0;
            quotient = 0;
            refresh = 1;
            operationArray = [];
            break;
          }
        default:
          visual.innerHTML = number;
          valid = 1;
          running = 0;
          sum = 0;
          difference = 0;
          product = 0;
          quotient = 0;
          refresh = 1;
          operationArray = [];
          break;

      }
    }
    else {
      visual.innerHTML = number;
      valid = 1;
      running = 0;
      sum = 0;
      difference = 0;
      product = 0;
      quotient = 0;
      refresh = 1;
      operationArray = [];
    }
  }
);
var plus = document.querySelector('.plus');
plus.addEventListener('click',
  function addNumber(){
    if(valid == 1 && running == 0){
      inOperation = Number(number);
      number = '0';
      visual.innerHTML = number;
      running = 1;
      refresh = 1;
      sum = 1;
    }
    else if(valid == 1 && running == 1){
      if(product == 1){
        inOperation = inOperation * Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          product = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          product = 0;
        }
      }
      else if(quotient == 1){
        inOperation = inOperation / Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if(number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          quotient = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          quotient = 0;
        }
      }
      else if(difference == 1){
        inOperation = inOperation - Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          difference = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          difference = 0;
        }
      }
      else{
        inOperation = Number(number) + inOperation;
        if(inOperation > 9999999){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
        else{
          number = inOperation.toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
      }
    }
    else {
      number = 'Error';
      visual.innerHTML = number;
      error = 1;
    }
    operationArray.push('plus');
    sum = 1;
  }
);
var minus = document.querySelector('.minus');
minus.addEventListener('click',
  function subtractNumber(){
    if(valid == 1 && running == 0){
      inOperation = Number(number);
      number = '0';
      visual.innerHTML = number;
      running = 1;
      refresh = 1;
      difference = 1;
    }
    else if(valid == 1 && running == 1){
      if(product == 1){
        inOperation = inOperation * Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          product = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          product = 0;
        }
      }
      else if(quotient == 1){
        inOperation = inOperation / Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if(number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          quotient = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          quotient = 0;
        }
      }
      else if(sum == 1){
        inOperation = inOperation + Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          sum = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          sum = 0;
        }
      }
      else{
        inOperation = Number(number) + inOperation;
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        if(inOperation.toString().length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
        else{
          if (inOperation % 1 != 0) {
            inOperation = inOperation.toFixed(2);
          }
          number = inOperation.toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
      }
    }
    else {
      number = 'Error';
      visual.innerHTML = number;
      error = 1;
    }
    operationArray.push('minus');
    difference = 1;
  }
);
var divide = document.querySelector('.divide');
divide.addEventListener('click',
  function divideNumber(){
    if(Number(number) == 0) {
      number = 'NaN';
      visual.innerHTML = number;
      error = 1;
    }
    if(valid == 1 && running == 0){
      inOperation = Number(number);
      number = '0';
      visual.innerHTML = number;
      running = 1;
      refresh = 1;
      quotient = 1;
    }
    else if(valid == 1 && running == 1){
      if(product == 1){
        inOperation = inOperation * Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          product = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          product = 0;
        }
      }
      else if(difference == 1){
        inOperation = inOperation - Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          difference = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          difference = 0;
        }
      }
      else if(sum == 1){
        inOperation = inOperation + Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          sum = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          sum = 0;
        }
      }
      else {
        inOperation = inOperation / Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        if(inOperation.toString().length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
        else{
          number = inOperation.toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
      }
    }
    else {
      number = 'Error';
      visual.innerHTML = number;
      error = 1;
    }
    operationArray.push('divide');
    quotient = 1;
  }
);
var multiply = document.querySelector('.multiply');
multiply.addEventListener('click',
  function multiplyNumber(){
    if(valid == 1 && running == 0){
      inOperation = Number(number);
      number = '0';
      visual.innerHTML = number;
      running = 1;
      refresh = 1;
      product = 1;
    }
    else if(valid == 1 && running == 1){
      if(quotient == 1){
        inOperation = inOperation / Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if(inOperation.toString().length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          quotient = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          quotient = 0;
        }
      }
      else if(difference == 1){
        inOperation = inOperation - Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          difference = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          difference = 0;
        }
      }
      else if(sum == 1){
        inOperation = inOperation + Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          sum = 0;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          sum = 0;
        }
      }
      else{
        inOperation = inOperation * Number(number);
        if (inOperation % 1 != 0) {
          inOperation = inOperation.toFixed(2);
        }
        if(inOperation.toString().length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
        else{
          number = inOperation.toString();
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
        }
      }
    }
    else {
      number = 'Error';
      visual.innerHTML = number;
      error = 1;
    }
    operationArray.push('multiply');
    product = 1;
  }
);
var zero = document.querySelector('.zero');
zero.addEventListener('click',
  function zeroPress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '0';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
      number = number + '0';
      visual.innerHTML = number;
      valid = 1;
      }
    }
  }
);
var one = document.querySelector('.one');
one.addEventListener('click',
  function onePress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '1';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '1';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var two = document.querySelector('.two');
two.addEventListener('click',
  function twoPress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '2';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '2';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var three = document.querySelector('.three');
three.addEventListener('click',
  function threePress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '3';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '3';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var four = document.querySelector('.four');
four.addEventListener('click',
  function fourPress(){
    if(error == 1){

    }
    if((number == '0' && number.length == 1) || refresh == 1){
      number = '4';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '4';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var five = document.querySelector('.five');
five.addEventListener('click',
  function fivePress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '5';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '5';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var six = document.querySelector('.six');
six.addEventListener('click',
  function sixPress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '6';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '6';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var seven = document.querySelector('.seven');
seven.addEventListener('click',
  function sevenPress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '7';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '7';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var eight = document.querySelector('.eight');
eight.addEventListener('click',
  function eightPress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '8';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '8';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var nine = document.querySelector('.nine');
nine.addEventListener('click',
  function ninePress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = '9';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        number = number + '9';
        visual.innerHTML = number;
        valid = 1;
      }
    }
  }
);
var deci = document.querySelector('.deci');
deci.addEventListener('click',
  function deciPress(){
    if(error == 1){

    }
    else if((number == '0' && number.length == 1) || refresh == 1){
      number = number + '.';
      visual.innerHTML = number;
      valid = 1;
      refresh = 0;
    }
    else {
      if(number.length >= 7){
        visual.innerHTML = number;
        valid = 1;
      }
      else{
        for(let i = 0; i < number.length; i++) {
          if(number[i] == '.') { deciError = 1; }
        }
        if(deciError == 1) {
          visual.innerHTML = number;
          valid = 1;
          deciError = 0;
        }
        else {
          number = number + '.';
          visual.innerHTML = number;
          valid = 1;
          deciError = 0;
        }
      }
    }
  }
);
var store = document.querySelector('.sto');
store.addEventListener('click',
  function storeValue(){
    if(error == 1){

    }
    else{
      memory = number;
    }
  }
);
var useMemory = document.querySelector('.stoVar');
useMemory.addEventListener('click',
  function useValue(){
    if(error == 1){

    }
    else if(number.length + memory.length > 7){

    }
    else if(refresh == 1){
      number = memory;
      visual.innerHTML = number;
      valid = 1;
    }
    else{
      number = number + memory;
      visual.innerHTML = number;
      valid = 1;
    }
  }
);

var root = document.querySelector('.root');
root.addEventListener('click', 
  function squareRootNumber() {
    if(valid == 1){
      inOperation = Number(number);
      inOperation = Math.sqrt(inOperation);

      if(inOperation % 1 == 0) {
        number = inOperation.toString();
        visual.innerHTML = number;
        refresh = 1;
      }
      else {
        inOperation = inOperation.toFixed(2);
        number = inOperation.toString();
        visual.innerHTML = number;
        refresh = 1;
      }
    }
    else {
      number = 'Error';
      visual.innerHTML = number;
      error = 1;
    }
  }
);

var square = document.querySelector('.square');
square.addEventListener('click', 
  function squareNumber() {
    if(valid == 1){
      inOperation = Number(number);
      inOperation = inOperation * inOperation;

      if(inOperation.toString().length > 7) {
        inOperation = inOperation.toExponential(2);
        number = inOperation.toString();
        visual.innerHTML = number;
        refresh = 1;
      }
      else {
        number = inOperation.toString();
        visual.innerHTML = number;
        refresh = 1;
      }
    }
    else {
      number = 'Error';
      visual.innerHTML = number;
      error = 1;
    }
  }
);

var expo = document.querySelector('.expo');
expo.addEventListener('click', 
  function expoNumber() {
    if(valid == 1 && running == 0){
      inOperation = Number(number);
      number = '0';
      visual.innerHTML = number;
      running = 1;
      refresh = 1;
      exponent = 1;
    }
    else if(valid == 1 && running == 1){
      if(quotient == 1){
        inOperation = inOperation / Number(number);
        number = inOperation.toString();
        if(inOperation.toString().length > 7){
          number = inOperation.toString().substr(0, 6);
        }
        if(inOperation > 9999999){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          quotient = 0;
        }
      }
      else if(difference == 1){
        inOperation = inOperation - Number(number);
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          difference = 0;
        }
      }
      else if(sum == 1){
        inOperation = inOperation + Number(number);
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          sum = 0;
        }
      }
      else if(multiply == 1){
        inOperation = inOperation * Number(number);
        number = inOperation.toString();
        if (number.length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
        }
        else {
          visual.innerHTML = number;
          refresh = 1;
          valid = 0;
          multiply = 0;
        }
      }
      else{
        inOperation = Math.pow(inOperation, Number(number));
        if(inOperation.toString().length > 7){
          number = inOperation.toExponential(2).toString();
          visual.innerHTML = number;
        }
        else{
          if(inOperation % 1 == 0) {
            number = inOperation.toString();
            visual.innerHTML = number;
            refresh = 1;
          }
          else {
            inOperation = inOperation.toFixed(2);
            number = inOperation.toString();
            visual.innerHTML = number;
            refresh = 1;
          }
          valid = 0;
        }
      }
    }
    else {
      number = 'Error';
      visual.innerHTML = number;
      error = 1;
    }
    operationArray.push('exponent');
    product = 1;
  });