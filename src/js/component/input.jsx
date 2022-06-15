import React from "react";
import { useState } from "react";

const Input = () => {
	const { Task, setTask } = useState("");
	return (
		<div className="contenedor">
			<input
				id="myInput"
				placeholder="Agregar tarea"
				value={Task}></input>
			<button className="myBtn">agregar</button>
		</div>
	);
};

export default Input;
