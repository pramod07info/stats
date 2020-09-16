import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import Header from '../header/Header';


const Layout = (props) => {
    useEffect(() => {
       
    },)
    return (
        <div>                      
            <Header></Header>
            {props.children}
        </div>
    )
}

export default Layout