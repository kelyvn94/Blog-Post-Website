import { useState } from "react";
const Homepage = () => {
    const [name, setName] = useState("Kelvin");
    const [age, setAge] = useState(24);

    const handleClick = (fname) => {
        setName("James");
        setAge(30);
    }
    return ( 
        <div class= "homepage">
            <h2>HomePage</h2>
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Homepage;