import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

import Base from "./screens/base";
import Index from "./screens/index";
import ListView from "./screens/listView";
import Login from "./screens/login";
import SignUp from "./screens/signUp";
import AccountRecovery from "./screens/accountRecovery";
import DbTest from "./screens/dbTest";

export default function App() {
    return (
        <TailwindProvider utilities={utilities}>
            <Base>
                {/* <Login /> */}
                {/* <Index /> */}
                {/*<ListView />*/}
                {/* <MenuList/> */}
                {/* <SignUp/> */}
                {/*<AccountRecovery/>*/}
                <DbTest />
            </Base>
        </TailwindProvider>
    );
}
