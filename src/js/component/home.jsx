import React from "react";
import Item from "./item.jsx";
import Input from "./input.jsx";

//create your first component
const Home = () => {
	return (
		<div className="contenedor">
			<Input />
			<AddItem />
		</div>
	);
};

export default Home;
