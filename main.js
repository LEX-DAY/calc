 let firstNumber = '';
 let secondNumber = '';
 let sign = '';
 let result = false;

 const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
 const action = ['-', '+', 'x','/','%'];

 const outResult = document.querySelector('.calc-screen p');

 function clearAll() {
    firstNumber = '';
    secondNumber = '';
    sign = '';
    result = false;
    outResult.textContent = 0;
 }



 document.querySelector('.ac').onclick = clearAll;


 document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac 
    if (event.target.classList.contains('ac')) return;
    


    outResult.textContent = '';

    // получаем нажатую кнопку
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или . 
    if (digit.includes(key)) {
        if ( secondNumber === '' && sign === '' ) {
            
        firstNumber += key
        console.log(firstNumber,secondNumber, sign);
        outResult.textContent = firstNumber;
            
        } 
        else if (firstNumber !== '' && secondNumber !== '' && result) {
            secondNumber = key;
            result = false;
            outResult.textContent = secondNumber;
        } else {
            secondNumber += key;
            outResult.textContent = secondNumber
        }
    }


    // если нажата кнопка + - / *
    if (action.includes(key)) {
        sign = key;
        outResult.textContent = sign;
        console.log(firstNumber,secondNumber,sign);
        return
    }

    // нажата кнопка = 
    if (key === '='){
        if (secondNumber === '')
            secondNumber = firstNumber;
       
        switch (sign) {
            case "+":
                firstNumber = (+firstNumber) + (+secondNumber);
                break;
            case "-":
                firstNumber = (+firstNumber) - (+secondNumber);
                break;
            case "x":
                firstNumber = (+firstNumber) * (+secondNumber);
                break;
            case "/":
                if (secondNumber === '0') {
                    outResult.textContent = 'Error';
                    firstNumber =''
                    secondNumber = ''
                    sign = ''
                    return; 
                }
                firstNumber = (+firstNumber) / (+secondNumber);
                break;

            case "%":
                firstNumber = ((+firstNumber)/100) * (+secondNumber);
                break;
              
        }
            

        result = true;
        outResult.textContent = firstNumber;
        console.log(firstNumber,secondNumber,sign);
    }
}

    
   