import axios from "axios";
import { Notyf } from "notyf";
import { useEffect, useState } from "react";
import { TodoModel } from "../../../Models/Todo";
import globals from "../../../Services/Gloabals";
import notify from "../../../Services/Notification";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(): JSX.Element {

    const [tasks, setTasks] = useState<TodoModel[]>([]);

    useEffect(() => {
        axios.get<TodoModel[]>(globals.urls.tasks)
            .then((res) => {
                notify.success('Woho got my tasks!');
                setTasks(res.data);
            })
            .catch((err) => {
                notify.error(err.message);
            });
    }, []);

    return (
        <div className="TodoList">
            <h2>Todo List</h2>
            {/* {tasks.map(t => <p key={t.id}>{t.title}</p>)} */}
            <div className="flex-row-none-wrap-list">
                {
                    (tasks.length > 0)
                        ?
                        tasks.map(t => <TodoItem key={t.id} task={t} />)
                        :
                        <EmptyView msg='No Tasks For you' />
                }
                )


            </div>

        </div>
    );
}

export default TodoList;
