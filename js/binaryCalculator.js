var resultDiv = document.getElementById('res'),
    operator = '';


window.onload = () => { document.getElementById("btns").onclick = button; }

function button(event) {
    
    // Write in resultDiv :
    if (event.target.id != 'btnClr' && event.target.id != 'btnEql') {
        
        // event.target = button clicked
        resultDiv.innerHTML += (event.target).innerHTML;
        
        // Get the operator :
        if (event.target.id == 'btnSum' || event.target.id == 'btnSub' || event.target.id == 'btnMul' || event.target.id == 'btnDiv') {
            
            operator += (event.target).innerHTML;
            
        }
    }
    
    // Clear resultDiv and operator variable :
    else if(event.target.id == 'btnClr'){
        
        resultDiv.innerHTML = '';
        operator = '';
    
    }
    
    // Calculat and show the result in resultDiv :
    else if(event.target.id == 'btnEql'){
    
        let operands = (resultDiv.innerHTML).split(operator),
            result;
        
        // convert operands to decimal number :
        operands[0] = parseInt(operands[0],2);
        operands[1] = parseInt(operands[1],2);
        
        // operations
        switch (operator) {

        case '+':
            result = operands[0] + operands[1];
            operator = '';
            break;

        case '-':
            result = operands[0] - operands[1];
            operator = '';
            break;

        case '*':
            result = operands[0] * operands[1];
            operator = '';
            break;

        case '/':
            result = operands[0] / operands[1];
            operator = '';
            break;
        }
        if( isNaN(result)){
            resultDiv.innerHTML = 'Syntax Error'
        }
        else{
            
            // convert result to binary number and show it in resultDiv : 
            resultDiv.innerHTML = result.toString(2);
        }
    }
}