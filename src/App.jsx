import Create from "./Component/Create";
import Read from "./Component/Read";
import "./index.css";

const App = () => {


    return (
        <div className="text-white flex w-screen h-screen bg-gray-700 p-10">
            <Create />
            <Read />
        </div>
    );
};

export default App;
