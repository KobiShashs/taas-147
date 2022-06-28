import About from "../../PagesArea/About/About";
import Donate from "../../PagesArea/Donate/Donate";
import AddTodo from "../../TodoArea/AddTodo/AddTodo";
import DeleteTodo from "../../TodoArea/DeleteTodo/DeleteTodo";
import EditTodo from "../../TodoArea/EditTodo/EditTodo";
import TodoList from "../../TodoArea/TodoList/TodoList";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
        
			{/* <TodoList/> */}
            {/* <AddTodo/> */}
            {/* <EditTodo/> */}
            {/* <DeleteTodo/> */}
            {/* <About/> */}
            <Donate to='Daniel' bank={12} branch={250} account={123456}  />
        </div>
    );
}

export default Main;
