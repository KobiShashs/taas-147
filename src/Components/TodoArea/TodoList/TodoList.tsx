import { useEffect, useState } from "react";
import { TodoModel } from "../../../Models/Todo";
import notify from "../../../Services/Notification";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import TodoItem from "../TodoItem/TodoItem";
import { FaPlus } from "react-icons/fa";
import "./TodoList.css";
import { Link } from "react-router-dom";
import web from "../../../Services/WebApi";
import store from "../../../Redux/Store";
import { tasksDownloadedAction } from "../../../Redux/TasksAppState";

function TodoList(): JSX.Element {

    const [tasks, setTasks] = useState<TodoModel[]>(store.getState().tasksReducer.tasks);

    useEffect(() => {
        if (store.getState().tasksReducer.tasks.length === 0) {
            web.getAllTasks()
                .then((res) => {
                    notify.success('Woho got my tasks!');
                    // Update Component State (Local state)
                    setTasks(res.data);
                    // Update App State (Global State)
                    store.dispatch(tasksDownloadedAction(tasks));
                })
                .catch((err) => {
                    notify.error(err.message);
                });
        }
    }, [tasks]);

    return (
        <div className="TodoList flex-center-col">
            <h2>Todo List</h2>

            <Link className="link" to="add"><FaPlus size={56} /></Link>


            {/* {tasks.map(t => <p key={t.id}>{t.title}</p>)} */}
            <div className="flex-row-none-wrap-list">
                {
                    (tasks.length > 0)
                        ?
                        tasks.map(t => <TodoItem key={t.id} task={t} />)
                        :
                        <EmptyView msg='No Tasks For you' />
                }



            </div>

        </div>
    );
}

export default TodoList;
