import moment from "moment";
import { TodoModel } from "../../../Models/Todo";
import { MdDelete, MdModeEdit } from "react-icons/md";
import "./TodoItem.css";
import { Link } from "react-router-dom";

interface TodoItemProps {
    task: TodoModel;
}
function TodoItem(props: TodoItemProps): JSX.Element {
    return (
        <div className="TodoItem">
            <h2 className="single-line-only">{props.task.caption}</h2>

            <div className="card">
                <img src="https://cataas.com/cat/gif" alt={props.task.caption} />
                <span>{props.task.classification}</span>
                <span className="single-line-only">{props.task.info}</span>
                <span className="date">{moment(props.task.dueDate).format("DD/MM/yyyy")}</span>
                <div className="flex-around">
                    <Link className="link" to={`delete/${props.task.id}`}>
                        <MdDelete size={42} />
                    </Link>
                    <Link className="link" to={`update/${props.task.id}`}>
                        <MdModeEdit size={42} />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default TodoItem;
