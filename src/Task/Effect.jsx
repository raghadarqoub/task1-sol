import { useEffect , useState } from "react";
function Effect() {
    const [counter , setCounter] = useState(0);
    useEffect(() => {
        console.log("update");
    }, [counter]);
    const update =() => {
        setCounter(counter + 1);
    }
    return (
    <div>
    <h1>{counter}</h1>
    <button onClick={update}>Click</button>
    </div>
    )
}
export default Effect
