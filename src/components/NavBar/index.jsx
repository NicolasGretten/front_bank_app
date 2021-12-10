import React from "react";
import {Link, navigate} from "@reach/router";
import {Button} from "react-bootstrap";
import {logout} from "../../services/Auth";

const NavBar = () => (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow-md">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex-1 justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-800"
                            to='/'>
                            <img className="mx-auto h-20" src="https://t2e4n3j3.rocketcdn.me/wp-content/uploads/2021/08/Deutsche-Bank.jpg"  alt="test"/>
                        </Link>
                    </div>
                    <ul className="flex flex-auto justify-center space-x-4 text-sm font-semibold">
                        <li><Link to="/" className="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">Mes comptes</Link></li>
                        <li><Link to="/payment" className="px-2 xl:px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200">Virements</Link></li>
                    </ul>
                    <div className={"lg:flex flex-1 items-center"} id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Button
                                    onClick={()=>{
                                        logout().then()
                                    }}
                                >
                                    <div className="p-2 rounded hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current text-gray-800"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </div>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
export default NavBar;