import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const onSubmit = data => {
        const {password, confirm} = data;
        if(password !== confirm){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Password not matched',
                showConfirmButton: false,
                timer: 1500
              })
              return;
        }
        console.log(data);
        reset()
    };
    

    return (
        <div className="md:w-3/4 mx-auto px-10">
            <Helmet>
                <title>ACT SCHOOL | Register</title>
            </Helmet>

            <h1 className="font-semibold text-center text-3xl py-10">Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="bg-slate-200 py-2 w-full px-5 rounded-md my-2" {...register("name", { required: true })} placeholder="Your Full Name" />
                {errors.name && <span className="text-sm text-red-500">Name is required</span>}

                <input className="bg-slate-200 py-2 w-full px-5 rounded-md my-2" {...register("email", { required: true })} placeholder="Valid Email" />
                {errors.email && <span className="text-sm text-red-500">Email is required</span>}

                <input className="bg-slate-200 py-2 w-full px-5 rounded-md my-2" {...register("password", { required: true })} placeholder="Password" />
                {errors.password && <span className="text-sm text-red-500">Name is required</span>}

                <input className="bg-slate-200 py-2 w-full px-5 rounded-md my-2" {...register("confirm")} placeholder="Confirm Password" />

                <input className="bg-slate-200 py-2 w-full px-5 rounded-md my-2" {...register("image", {required: true})} placeholder="Image URL" />
                {errors.image && <span className="text-sm text-red-500">Image URL is required</span>} <br />
                <div className="text-center">
                <input className="bg-gray-600 text-white px-8 py-2 rounded-sm my-5" type="submit" value="Register" />
                </div>
            </form>
            <p className="text-center pb-5"><small>Already have an account? <Link to="/login" className="text-blue-500">Please Login</Link> </small></p>
        </div>
    );
};

export default Register;