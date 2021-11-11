const Box = () => {

    const [count, setCount] = useState( 0)
    const [value, setValue] = useState( 'текст инпута')

    const increment = () => {
        setCount( count +1 )
    }

    const decrement = () => {
        setCount( count -1 )
    }

    const input = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h1>{count}</h1>
            <h1>{value}</h1>
            <input onInput={input}/>
        </div>
    )
}
