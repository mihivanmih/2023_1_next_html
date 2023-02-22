import React from 'react';
import dynamic from "next/dynamic";
import Head from "next/head";
import MainLayout from '@/layots/MainLayout';
const Coolours = dynamic(() => import('./coolours'),{ ssr: false })

const test = () => {
    return (
        <MainLayout title={ 'Color' }>
            <Head>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                      integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.4.2/chroma.min.js"
                        integrity="sha512-zInFF17qBFVvvvFpIfeBzo7Tj7+rQxLeTJDmbxjBz5/zIr89YVbTNelNhdTT+/DCrxoVzBeUPVFJsczKbB7sew=="
                        crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <Coolours />
        </MainLayout>
    );
};

export default test;
