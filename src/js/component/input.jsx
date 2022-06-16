import React from "react";
import { useState } from "react";

const Input = () => {
	const { inputValue, setinputValue } = useState("");
	const { Task, setTask } = useState([]);
	return (
		<div className="contenedor">
			<ul>
				<li>
					<input
						id="myInput"
						placeholder="Agregar tarea"
						onChange={() => setinputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTask(Task.concat(inputValue));
								setinputValue(" ");
							}
						}}></input>
				</li>
				{Task.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Input;
