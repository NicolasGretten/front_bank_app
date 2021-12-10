import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Layout = (props) => {
    const {children} = props;
    return (
        <main className="w-full min-h-screen">
            <NavBar/>
            <div className="min-h-screen">
                {children}
            </div>

            <Footer />
        </main>
    );
}
export default Layout;