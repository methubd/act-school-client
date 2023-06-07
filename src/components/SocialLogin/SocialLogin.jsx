import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from 'react-icons/fa';



const SocialLogin = () => {
    const {googleLogin} = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogleLogin} className="text-3xl pb-10"> <FaGoogle /> </button>
        </div>
    );
};

export default SocialLogin;