import React, {useState} from "react";

function MyDemo() {

    const [name, setName] = useState("enter name above");

    const handleNameInput = () => {
        setName(document.getElementById("myName").value)
    }

    const [answer, setAnswer] = useState();

    return(
        <div>
            <input id="myName"></input>
            <button onClick={handleNameInput}>Submit Name</button>
            <p>Name: {name}</p>
            <p>Answer: {answer}</p>
            <label><input name="rb" type="radio" value="Yes" onChange={(e) => setAnswer(e.target.value)}/>Yes</label>
            <label><input name="rb" type="radio" value="No" onChange={(e) => setAnswer(e.target.value)}/>No</label>
        </div>
    );
}

export default MyDemo