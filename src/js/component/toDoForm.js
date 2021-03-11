import React, { useState } from "react";
import PropTypes from "prop-types";

export const Form = ({ addToDo }, props) => {
	const [input, setInput] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		if (!input) return;
		addToDo(input);
		setInput("");
	};
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="d-flex justify-content-between">
				<input
					type="text"
					className="form-control text-center"
					placeholder="Add a ToDo"
					onChange={event => setInput(event.target.value)}
					value={input}
				/>
				<button
					className="btn btn-secondary ml-1"
					onClick={props.addToDo}>
					Add
				</button>
			</form>
		</>
	);
};
Form.propTypes = {
	addToDo: PropTypes.func
};
