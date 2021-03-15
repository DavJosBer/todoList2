import React from "react";
import PropTypes from "prop-types";

export const Todo = props => {
	const styles = {
		pointerEvents: "auto",
		backgroundColor: "red"
	};
	return (
		<>
			<li className="list-group-item d-flex justify-content-between align-items-center">
				{props.todo.label}
				<span
					className="btn"
					onClick={() => {
						props.deleteTodo(props.index);
					}}>
					X
				</span>
			</li>
		</>
	);
};
Todo.propTypes = {
	todo: PropTypes.object,
	deleteTodo: PropTypes.func,
	index: PropTypes.number
};
