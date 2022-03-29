import { useState } from "react";
import Calculator from "./Calculator";

function Container() {

    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [operator, setOperator] = useState();

    function handleInputChange(event){
        const inputValue = event.target.value;
        // console.log(inputValue);
        if(event.target.name ==='value1'){
            setInput1(inputValue);
        }
        if(event.target.name === 'value2'){
            setInput2(inputValue);
        }
    }

    function operatorChange(event){
        if(event.target.name === 'operator' 
            && event.nativeEvent.data === '/'
            || event.nativeEvent.data === '*'
            || event.nativeEvent.data === '+'
            || event.nativeEvent.data === '-'
            || event.nativeEvent.data === null){
        if(event.target.value.length <= 1) {
            const inputValue = event.target.value;  
            setOperator(inputValue);
            }
        }
    }

    function doMath(input1, input2){
        if(operator === '+') { return input1 + input2 }
        if(operator === '-') { return input1 - input2 }
        if(operator === '/') { return input1 / input2 }
        if(operator === '*') { return input1 * input2 }
    }
   
  return (
    <div>
        <Calculator 
        value1={input1} 
        value2={input2} 
        operator={operator}
        onChange={(e)=>handleInputChange(e)} 
        total={doMath(parseInt(input1), parseInt( input2))}
        // total={operatorChange(parseInt(input1), parseInt( input2))}

        operatorChange={(e)=>operatorChange(e)}
        />
    </div>
  )
}

export default Container;