import React from "react"
import { Outlet } from 'react-router-dom';
import NavLink from "../components/NavLink";
import NavLogo from "../components/NavLogo";
import Button from "../components/Button";
import Footer from "./Footer";



export default function Nav() {
    return (
        <div>
            <div className="relative w-[1300px] h-[48px] my-6 z-10">

                <NavLogo />


                <div className="absolute top-[13px] left-[770px] w-[505px] h-[19px]">
                    <NavLink />
                </div>

                <div>
                    <Button text='Login' />
                </div>

            </div>

            <div className="container mx-auto p-4">
                <Outlet />
            </div>

            <Footer />

        </div>
    )
}