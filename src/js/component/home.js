import React, { useState } from "react";
import { Todo } from "./toDo.js";
import { Form } from "./toDoForm.js";

//create your first component
const tasks = [
	{
		name: "Add a Task",
		status: false
	}
];

export function Home() {
	const [todos, setTodos] = useState(tasks);

	const addToDo = name => {
		const newToDos = [...todos, { name }];
		setTodos(newToDos);
		console.log(newToDos);
	};
	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	return (
		<div className="text-center mt-5 row">
			<div className="card mx-auto">
				<div className="card-header bg-white">
					<Form addToDo={addToDo} />
				</div>
				<div className="card-body">
					<ul className="list-group">
						{todos.map((todo, index) => (
							<Todo
								key={index}
								index={index}
								todo={todo}
								deleteTodo={deleteTodo}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
