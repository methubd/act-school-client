import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Login = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data, reset);
    };

    return (
        <div className="md:w-2/5 mx-auto px-10">
            <Helmet>
                <title>ACT SCHOOL | Login</title>
            </Helmet>

            <h1 className="font-semibold text-center text-3xl py-10">Please Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="bg-slate-200 py-2 w-full px-5 rounded-md my-2" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span className="text-sm text-red-500">Email is required</span>}

                <input className="bg-slate-200 py-2 w-full px-5 rounded-md my-2" {...register("password", { required: true })} placeholder="Password" />
                {errors.password && <span className="text-sm text-red-500">Name is required</span>}

                <div className="text-center">
                <input className="bg-gray-600 text-white px-8 py-2 rounded-sm my-5" type="submit" value="Login" />
                </div>
            </form>
            <p className="text-center pb-5"><small>New to ACT SCHOOL? <Link to="/register" className="text-blue-500">Please Register</Link> </small></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;