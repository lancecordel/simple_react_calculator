
function Calculator(props) {
  return (
    <div>
    <div className="container">
        <h1>Add with React!</h1>

        <form className="add">
        <input type="number" name="value1"  value={props.value1} onChange={props.onChange}/>
        <span>
            <input id='operator'
            name='operator'
            value={props.operator} 
            type='text' 
            placeholder=" +" 
            onChange={props.operatorChange}
            />
         </span>
        <input type="number" name="value2" value={props.value2} onChange={props.onChange}/>
        <span>=</span>
        <h3>{props.total}</h3>
        </form>
</div>
    </div>
  )
}

export default Calculator;