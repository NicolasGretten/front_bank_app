import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {getUser, logUser} from "../services/Auth";
import Loader from "react-loader-spinner";

const Login = () => {
    const [loginLoading, setLoginLoading] = useState(false);

    const {
        register, handleSubmit,
    } = useForm();

    const login = async (data) => {
        setLoginLoading(true);
        await logUser(data);
        await getUser(localStorage.getItem('id'));
        setLoginLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <div className="w-full mt-1 mb-10 mx-auto">
                            <img className="mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Deutsche_Bank_logo.svg/250px-Deutsche_Bank_logo.svg.png"  alt="test"/>
                        </div>
                        {loginLoading
                            ? (
                                <div className="flex flex-col items-center mt-6 mb-5">
                                    <Loader
                                        type="ThreeDots"
                                        color="#0000FF"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                            )
                            : (
                                <form onSubmit={handleSubmit(login)}>
                                    <div className="flex flex-col">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light" htmlFor="email">email</label>
                                        <input
                                            name="email"
                                            id="email"
                                            key="email"
                                            type="input"
                                            className="border placeholder-black border-purple-300 rounded-lg p-2 w-full mt-2 focus:border-primary"
                                            {...register('email')}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3 flex flex-col">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light" htmlFor="password">Mot de passe</label>
                                        <input
                                            name="password"
                                            id="password"
                                            key="password"
                                            type="password"
                                            className="border placeholder-black border-purple-300 rounded-lg p-2 w-full mt-2 focus:border-primary"
                                            {...register('password')}
                                            required
                                        />
                                    </div>
                                    <button
                                        color="primary"
                                        className=" mt-5 w-full py-4 p-2 bg-blue-800 rounded text-white"
                                    >
                                        Connexion
                                    </button>
                                </form>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
