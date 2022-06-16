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
							if (e.Key == "Enter") {
								setTask(Task.concat(inputValue));
								setinputValue("");
							}
						}}></input>
				</li>
			</ul>
		</div>
	);
};

export default Input;
