import React from "react";
import { useState } from "react";

const Input = () => {
	const [inputValue, setinputValue] = useState("");
	const [Task, setTask] = useState([]);
	console.log(inputValue, Task);
	return (
		<div className="contenedor">
			<ul>
				<li>
					<input
						id="myInput"
						placeholder="Agregar tarea"
						onChange={(e) => {
							setinputValue(e.target.value);
						}}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTask(Task.concat(inputValue));
								setinputValue(" ");
							}
						}}
					/>
				</li>
				{Task.map((value, index) => {
					return (
						<li>
							{value}{" "}
							<button
								className="deleter"
								onClick={() => {
									return setTask(Task.filter)(
										(value, currentIndex) =>
											index !== currentIndex
									);
								}}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Input;
