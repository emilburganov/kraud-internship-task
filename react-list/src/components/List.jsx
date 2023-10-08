import {useEffect, useState} from "react";
import ListItem from "./ListItem.jsx";

const List = ({title}) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTodos = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setTodos(data);
        } catch {

        }

        setLoading(false);
    }

    useEffect(() => {
        getTodos()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="list">
            <h1>{title}</h1>
            {todos.map((todo) =>
                <ListItem key={todo.id} item={todo}/>
            )}
        </div>
    );
};

export default List;