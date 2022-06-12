import React from "react";
import Item from "./item.jsx";
import Input from "./input.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="contenedor">
			<Input />
			<Item />
		</div>
	);
};

export default Home;
