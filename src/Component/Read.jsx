import { Fragment } from "react";
import { toast } from "react-toastify";

const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;


    const DeleteHandler = (id)=> {
        const filtertodo = todos.filter((todo) => todo.id !=id);
        settodos(filtertodo);
        toast.error("Todo Deleted!")
    }

    const rendertodos = todos.map((todo) => {
        return (
            <li
                key={todo.id} className="mb-2 flex justify-between item-center p-4 bg-gray-900"
            >
                <span className="text-xl font-thin">{todo.title} </span>
                <button className = "font-thin text-red-400"
                onClick={() =>DeleteHandler(todo.id)}>Delete</button>
            </li>
        );
    });

    

    return (
        <div className="w-[35%] ">
            <h1 className=" mb-10 text-5xl font-thin p-10"><span className="text-red-400">Pendings </span>Todos</h1>
            <ol>{rendertodos}</ol>
        </div>
    );
};

export default Read;
