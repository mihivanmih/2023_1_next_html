import React from 'react';
import Head from "next/head";
import Navbar from "@/components/navbar/navbar";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    children: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name={'description'} content={ description }/>
                <meta name={'robots'} content={"index, follow"}/>
                <meta name={'keywords'} content={keywords}/>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
            </Head>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
