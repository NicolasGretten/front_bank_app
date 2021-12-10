import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import {useForm} from "react-hook-form";
import axios from "../services/axios";
import {navigate, useLocation} from "@reach/router";
import Loader from "react-loader-spinner";

const Payment = () => {
    const [accounts, setAccounts] = useState([]);
    const [checked, setChecked] = useState(false);
    const [defaultAccount, setDefaultAccount] = useState(null);

    const url = useLocation();
    const params = new URLSearchParams(url.search)

    const {
        register, handleSubmit,
    } = useForm();

    const getAccounts = async () => {
        try{
            const response = await axios.get(`/client/find/${localStorage.getItem('id')}`);
            setAccounts(response.data.accounts);
        } catch(e){
            console.error(e);
        }
    }

    const postPayment = async (form) => {
        console.log(form)
        // try{
        //     const response = await axios.post(`/account/transfer`, form);
        //     if (response.status === 200){
        //         navigate('/')
        //     }
        // } catch(e){
        //     alert(e)
        // }
    }

    useEffect(() => {
        if (params.get('id')){
            setDefaultAccount(params.get('id'));
        }
        else{
            setDefaultAccount(true);
        }

    }, [params]);

    useEffect(() => {
        getAccounts()
    }, []);

    return (
        <>
            <Layout>
                <div className="pt-10 pb-5 pl-20 pr-20">
                    <h1 className="font-black text-2xl text-left uppercase text-blue-800 font-mono pl-10 pt-5 pb-5">Virements</h1>
                    <form onSubmit={handleSubmit(postPayment)}>
                        <div className="col grid grid-cols-3 bg-white p-6 rounded-2xl border border-gray-50 shadow-md">
                            <div className="col-1 bg-white grid gap-4 p-6 rounded-2xl border border-gray-50 shadow-md">
                                {defaultAccount
                                ?
                                    (
                                        <>
                                            <label className="text-center">Compte a prélever</label>
                                            <select
                                                className="rounded p-1 border border-blue-800 rounded text-center bg-white"
                                                required
                                                defaultValue={defaultAccount?params.get('id'):null}
                                                {...register("idAccountTransmitter")}
                                            >
                                                <option  disabled value={null}>{`choisissez un compte`}</option>
                                                {accounts.map((e) => (
                                                    <option value={e.numeroCompte} selected={defaultAccount === e.numeroCompte ? true : false}>{`${e.wording} - 
                                        ${e.solde} €`}</option>
                                                ))}
                                            </select>
                                            <label className="text-center">Montant</label>
                                            <input
                                                className="p-1 border border-blue-800 rounded text-center"
                                                type="number"
                                                required
                                                {...register("amount")}
                                            />
                                        </>

                                    )
                                :
                                    (
                                    <div className="flex flex-col items-center mt-6 mb-5">
                                        <Loader
                                        type="ThreeDots"
                                        color="#0000FF"
                                        height={160}
                                        width={160}
                                        />
                                    </div>
                                    )
                                }

                            </div>
                            <div className="col-1 bg-white p-6 rounded-2xl grid items-center justify-center">
                                <FontAwesomeIcon icon={faLongArrowAltRight} className="text-blue-800" size="8x" />
                            </div>
                            <div className="col-1 bg-white grid gap-4 p-6 rounded-2xl border border-gray-50 shadow-md">
                                <div className="col">
                                    <input type="checkbox" defaultValue={checked} onChange={() => setChecked(!checked)}/>
                                    <label className="ml-2">Virement interne</label>
                                </div>
                                {
                                    checked
                                    ?
                                        (
                                            <>
                                                <label className="text-center">Compte interne à transférer</label>
                                                <select
                                                    className="rounded p-1 border border-blue-800 rounded text-center bg-white"
                                                    required
                                                    {...register("idAccountRecipient")}
                                                >
                                                    {accounts.map((e) => (
                                                        <option value={e.numeroCompte}>{`${e.wording} - 
                                        ${e.solde} €`}</option>
                                                    ))}
                                                </select>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <label className="text-center">Compte externe à transférer</label>
                                                <input
                                                    className="p-1 border border-blue-800 rounded text-center"
                                                    required
                                                    type="text"
                                                    {...register("idAccountRecipient")}
                                                />
                                            </>
                                        )
                                }
                            </div>
                            <div className="mt-5 col-span-3 flex flex-row-reverse">
                                <Button
                                    type="submit"
                                    className="rounded shadow bg-blue-800 p-3 text-white"
                                >
                                    Valider
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
}
export default Payment;