import React, { useState } from 'react';
// import { AiFillLike } from "react-icons/ai";??? Cant get it to show... 
function Like() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button style={{ marginTop: '30px', backgroundColor: "", width: "110px", height: "60px" }} className="btn btn-success" onClick={() => setCount(count + 1)}>Click To Like</button><h3>Likes {count}</h3>
        </div>
    );
}

export default Like;