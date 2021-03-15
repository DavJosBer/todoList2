import React, { useState, useEffect } from "react";
import { Todo } from "./toDo.js";
import { Form } from "./toDoForm.js";

//create your first component

export function Home() {
	const [todos, setTodos] = useState([{ label: "Add a Task", done: false }]);

	const addToDo = label => {
		const newToDos = [...todos, { label, done: false }];
		setTodos(newToDos);
		console.log(newToDos);
	};
	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	const fetchUrl = `https://assets.breatheco.de/apis/fake/todos/user/DavJosBer`;
	useEffect(() => {
		async function getToDO() {
			let result = await fetch(fetchUrl, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.catch(err => console.log(err));
			console.log(result);
		}
		getToDO();
	}, []);
	async function initToDo() {
		let result = await fetch(fetchUrl, {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.catch(err => console.log(err));
		console.log(result);
	}
	initToDo();
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
