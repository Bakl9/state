
const box = () => {

    const [count,stateCount] = useState( 1)

    const decrement = () => {
        stateCount(count + 1)
    }

    const increment = () => {
        stateCount(count - 1)
    }

    return (
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h1>{count}</h1>
        </div>
    )
}
