import React, {useState} from "react";

const Greeting: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);

    return(
        <section className="content-container">
            <h1>Greetings</h1>
            <h5>Current count: {counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>Press me</button>
        </section>
    );
};

export default Greeting;