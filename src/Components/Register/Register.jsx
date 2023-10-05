import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters');
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions!!')
            return;
        }

        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="mt-10">
            <div className="mx-auto md:w-1/2 text-center ">
                <h2 className="text-3xl mb-5">Please, Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 border w-3/4 py-2 px-4" placeholder="Email" type="email" name="email" id="" required />
                    <br />
                    <div className="relative">
                        <input
                            className="border w-3/4 py-2 px-4"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="" required />
                        <span className="absolute -ml-8 mt-3" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />
                    <div className="">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a className="text-blue-600" href="">Terms and Conditions</a></label>
                    </div>
                    <br />
                    <input className="border btn btn-secondary w-3/4" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-500">{success}</p>
                }
                <p>Already have an account? Please <Link className="text-blue-500 underline" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;