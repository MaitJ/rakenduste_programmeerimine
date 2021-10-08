import { useState } from "react";

const Home: React.FC = () => {
    const [isShowing, setIsShowing] = useState<boolean>(false);

    return(
        <section>
            <h1>Home</h1>
            <button onClick={() => setIsShowing(!isShowing)}>Press me</button>
            {isShowing && <p>Short circuit on op</p>}
        </section>
    );
}

export default Home;