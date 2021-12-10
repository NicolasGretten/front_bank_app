import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import AccountBox from "../components/AccountBox";
import Loader from "react-loader-spinner";
import axios from "../services/axios";

const Account = () => {

    const [accounts, setAccounts] = useState(null);

    const getAccounts = async () => {
        try{
            const response = await axios.get(`/client/find/${localStorage.getItem('id')}`);
            setAccounts(response.data.accounts);
        } catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        getAccounts().then()
    }, []);

    return (
        <>
            <Layout>
                <div className="pt-10 pb-10 pl-20 pr-20">
                    {!accounts
                        ?(
                            <div className="flex flex-col items-center mt-6 mb-5">
                                <Loader
                                    type="ThreeDots"
                                    color="#0000FF"
                                    height={160}
                                    width={160}
                                />
                            </div>
                        )
                        :(
                            <>
                                <h1 className="font-black text-2xl text-left uppercase text-blue-800 font-mono pl-10 pb-5">Mes comptes</h1>
                                <div className="grid gap-6 p-5">
                                    {accounts?.map((e, i) => (
                                        <AccountBox index={i} nb={e.numeroCompte} balance={e.solde} wording={e.wording}/>
                                    ))}
                                </div>
                            </>
                        )
                    }

                </div>
            </Layout>
        </>
    );
}
export default Account;