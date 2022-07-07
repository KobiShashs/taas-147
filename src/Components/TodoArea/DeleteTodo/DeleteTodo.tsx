import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import "./DeleteTodo.css";

function DeleteTodo(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const taskId = +(params.id || 0);

    const [id, setId] = useState<number>(taskId);


    const no = () => {
        navigate('/tasks');
    }

    const yes = () => {
        web.deleteTask(id)
            .then(res => {
                notify.success('woho deleted successfully');
                navigate('/tasks');
            })
            .catch(err => {
                notify.error(err.message);
                navigate('/tasks');
            });

    }

    return (
        <div className="DeleteTodo flex-center-col">
            <h1>Delete Task</h1>
            <h3>Are you sure you want to delete task #{id}?</h3>
            <div className="flex-row">
               
                <button className="button-danger" onClick={yes} >YES</button>
                <button className="button" onClick={no}>NO</button>
            </div>
        </div>
    );
}

export default DeleteTodo;
