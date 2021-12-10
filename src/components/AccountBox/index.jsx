import React from "react";
import {Link} from "@reach/router";

const AccountBox = (props) => {

    const { index, nb, balance, wording} = props;
    return(
        <>
            <div className="col-span-3 bg-white p-6 rounded-2xl border border-gray-50 shadow-md border-gray-100">
                <div className="flex flex-col space-y-6 md:h-full md:justify-between">
                    <div className="flex justify-between">
                            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                {`${wording}`}
                            </span>
                        <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Solde
                            </span>
                    </div>
                    <div className="flex gap-2 md:gap-4 justify-between items-center">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center gap-4">
                                <p className="text-lg text-gray-800 tracking-wider">{`N° ${nb}`}</p>
                            </div>
                        </div>
                        <h2 className="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                            {`${balance} €`}
                        </h2>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                        <Link to={`/payment?id=${nb}`}
                           className="bg-blue-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-800">
                            {`Transférer de l'argent`}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountBox;