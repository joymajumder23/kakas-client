import { Link } from "react-router-dom";
import logo from "../../../../assets/images/Kakas.png";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
const Login = () => {
    const {signIn, googleLogin} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // google 
    const handleGoogle = () => {
        googleLogin();
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-full lg:text-left">
                        <img className="w-24 md:w-52" src={logo} alt="" />
                        <h1 className="text-5xl font-bold mb-4">Login now</h1>
                    </div>
                    <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered rounded-none" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered rounded-none" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <div className="flex w-full flex-col border-opacity-50">
                                    <input className="btn bg-red-600 text-white rounded-none" type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogle} className="btn"><FcGoogle></FcGoogle> Google</button>
                        <p className='p-6 text-center'>New Here? <Link className='font-semibold' to="/register">Create a New Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;