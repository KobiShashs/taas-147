import axios from "axios";
import { TodoModel, TodoPayloadModel } from "../Models/Todo";
import globals from "./Gloabals";

class WebApi {

    private url = globals.urls.tasks;

    public async addTask(task: TodoPayloadModel):Promise<any> {
        return await axios.post<TodoModel>(this.url, task);
    }

    public async updateTask(id: number, task: TodoPayloadModel):Promise<any> {
        return await axios.put<any>(this.url + id, task);
    }

    public async deleteTask(id: number):Promise<any> {
        return await axios.delete<any>(this.url + id);
    }

    public async getAllTasks():Promise<any> {
        return await axios.get<TodoModel[]>(this.url);
    }

    public async getSingleTask(id: number):Promise<any> {
        return await axios.get<TodoModel>(this.url + id);
    }

    public async countTasks():Promise<any> {
        return await axios.get<number>(this.url + 'count');
    }





}
const web = new WebApi();
export default web;