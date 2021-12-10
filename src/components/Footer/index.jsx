import React from "react";

const Footer = () => {
    return(
        <footer className="w-full flex h-50 bg-white py-10 px-20 justify-between shadow-inner">
            <div className="">
                <button className="block bg-white px-4 py-2 rounded-md tracking-wide mt-4">
                    <img src="https://score-advisor.com/wp-content/uploads/2018/04/Deutsche_Bank_logo_without_wordmark.png"  className=" items-center h-20" alt="logo"/>
                </button>
            </div>
            <div className="w-full flex flex-col text-sm text-gray-600 justify-end text-center">
                Matthieu François / Nicolas Gretten / Erwan Nutz
            </div>
        </footer>
    )
}

export default Footer;
