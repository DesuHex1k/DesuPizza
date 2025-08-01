import type {Metadata} from "next";
import "../globals.css";
import {Header} from "@/components/shared/header";


export const metadata: Metadata = {
    title: "DesuPizza",
    description: "DesuPizza - Натхненно Японією – створено з душею",
};

export default function HomeLayout(
    {children, modal}: Readonly<{ children: React.ReactNode; modal: React.ReactNode}>) {
    return (

        <main className="min-h-screen">
            <Header/>
            {children}
            {modal}
        </main>
    );
}
