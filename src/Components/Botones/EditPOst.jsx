import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { Button } from 'primereact/button';
import './ButtonDemo.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export function EditPost ({id}) {
    const navigate = useNavigate()

    const dispatch =useDispatch()

    function handleDelete(e){
        e.preventDefault(); 
        navigate("/")       
    }

        return (
            <div className="button-demo">
                <div className="card">
                    <span className="p-buttonset">                       
                        <Button onClick={(e)=>{handleDelete(e)}} label="edit" />                       
                    </span>                 
                   
                </div>
            </div>
        )
}
                
