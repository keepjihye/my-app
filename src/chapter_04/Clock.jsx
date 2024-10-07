import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>리액트를 배워보는 시간~</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
