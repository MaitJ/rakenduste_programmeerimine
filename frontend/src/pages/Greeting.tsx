import React, {useState} from "react";

const Greeting: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);

    return(
        <>
            <h1>Greetings</h1>
            <h5>Current count: {counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>Press me</button>
        </>
    );
};

export default Greeting;