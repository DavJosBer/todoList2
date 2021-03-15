import React from "react";
import { Todo } from "./toDo.js";
import { Form } from "./toDoForm.js";
import PropTypes from "prop-types";

const Fetch = props => {
    const fetchUrl = `https://assets.breatheco.de/apis/fake/todos/user/DavJosBer`;
    async function initToDo(){
        let result = await fetch(fetchUrl, {
            method: "POST",
            body: JSON([]),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).catch(err => console.log(err));
        console.log(result)
    }
    initToDo()
    return(
        <>
        
        </>
    )
}