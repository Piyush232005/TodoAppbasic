import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";


const Create = () => {

    const [todos, settodos] =  useContext(todocontext);


    const {
        register,
        handleSubmit,
        reset,
        formState:{ errors } 
    } = useForm()

    // const [title, settitle] = useState("");

    const SubmitHandler = (data) => {

        data.isCompleted = false;
        data.id = nanoid();
        console.log(data);

        
        const copytodos = [...todos];
        copytodos.push(data);
        settodos(copytodos);

        toast.success("Todo Created!")
        reset();
    };

    // console.log(errors.title.message);
    

    return (
        <div className="w-[65%] p-10 ">
            <h1 className=" mb-10 text-5xl font-thin">Set <span className="text-red-400">Reminder </span> For <br /> Task</h1>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <input
                    {...register("title",{
                        required:"Title can not be empty"
                    })}
                    className="border-b w-full text-2xl font-thin p-2 outline-0"
                    type="text"
                    placeholder="title"
                />

                <small className="text-red-400 font-thin">{errors?.title?.message}</small>

                <br />
                <br />
                <button className="text-xl px-10 py-2 mt-5 border rounded">Create Todo</button>
            </form>
        </div>
    );
};

export default Create;
