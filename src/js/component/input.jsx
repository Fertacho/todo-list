import React from "react";
import { useState } from "react";

const Input = () => {
	const { inputValue, setinputValue } = useState("");
	const { Task, setTask } = useState([]);
	return (
		<div className="contenedor">
			<input
				id="myInput"
				placeholder="Agregar tarea"
				onChange={() => setinputValue(e.target.value)}
				value={inputValue}></input>
			<button onClick={() => setTask("blue")} className="myBtn">
				agregar
			</button>
		</div>
	);
};

export default Input;
