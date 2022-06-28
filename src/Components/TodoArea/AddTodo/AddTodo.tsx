import "./AddTodo.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TodoModel, TodoPayloadModel } from "../../../Models/Todo";
import axios from "axios";
import globals from "../../../Services/Gloabals";
import notify from "../../../Services/Notification";
import moment from "moment";

function AddTodo(): JSX.Element {

    // Step 6 - Manage Your schema
    const schema = yup.object().shape({
        caption:
            yup.string()
                .required("Caption is required"),
        info:
            yup.string()
                .required("Info is required"),
        classification:
            yup.string()
                .required("Classification is required"),
        dueDate:
            yup.date()
                .min(new Date(), 'Umm... past due date? come on!')
                .default(new Date())
                .typeError("You must specify a due date")
                .required("due date is required")
                .nullable().default(() => new Date()),

    });

    // Step 7 - useHook for the rescue!!!!!!!!
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<TodoPayloadModel>({ mode: "all", resolver: yupResolver(schema) });

    //  Step 8 - Send to Remote as post request
    const yalla = async (todo: TodoPayloadModel) => {

        console.log(todo);
        console.log(JSON.stringify(todo));

        await axios.post<any>(globals.urls.tasks, todo)
            .then(res => { notify.success('Haha new task created!!!!!!') })
            .catch(err => { notify.error('Oppsy : ' + err.message) });
    }

    return (
        <div className="AddTodo flex-center-col">
            <h1>Add Task</h1>
            {/* Step 9 - handleSubmit your form  */}
            <form onSubmit={handleSubmit(yalla)} className="flex-center-col">
                <label htmlFor="caption">Caption</label>
                <input {...register("caption")} type="text" placeholder="caption" id="caption" />
                <span>{errors.caption?.message}</span>
                <label htmlFor="info">Info</label>
                <input  {...register("info")} type="text" placeholder="info" id="info" />
                <span>{errors.info?.message}</span>
                <label htmlFor="classification">Subject</label>
                <input  {...register("classification")} type="text" placeholder="classification" id="classification" />
                <span>{errors.classification?.message}</span>
                <label htmlFor="dueDate">Due date</label>
                <input  {...register("dueDate")} type="datetime-local" placeholder="dueDate" id="dueDate" />
                <span>{errors.dueDate?.message}</span>
                <button disabled={!isValid}>Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
