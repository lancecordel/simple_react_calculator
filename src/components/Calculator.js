
function Calculator(props) {
  return (
    <div>
    <div className="container">
        <h3>Add, Subtract, Mulitply and Divide with React!</h3>

        <form className="add">
        <input className="number" 
        type="number" name="value1" 
        placeholder="..enter a number here" 
        value={props.value1} 
        onChange={props.onChange}
        />
        <span>
            <input id='operator'
            name='operator'
            value={props.operator} 
            type='text' 
            placeholder="??" 
            onChange={props.operatorChange}
            />
         </span>
        <input className="number" 
        type="number" 
        name="value2" 
        placeholder=".....and here" 
        value={props.value2} 
        onChange={props.onChange}
        />
        <p>Type +, -,  *,  or / in the <span>green</span> box!</p>
        <h3>{props.value1} &nbsp; {props.operator}  &nbsp; {props.value2} &nbsp; = &nbsp; {props.total}</h3>
        </form>
</div>
    </div>
  )
}

export default Calculator;