import React from "react";

const Input = () => {
	return (
		<div className="contenedor">
			<input id="myInput" placeholder="Agregar tarea"></input>
			<button onclick="Item()" class="myBtn">
				agregar
			</button>
		</div>
	);
};

export default Input;
