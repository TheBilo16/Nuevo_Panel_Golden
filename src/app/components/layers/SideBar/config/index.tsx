import React from "react";
import { AiOutlineHome , AiOutlineTable } from "react-icons/ai";
import { TiCogOutline } from "react-icons/ti";
import { Ilist } from "../interfaces";

const configSideBar : Ilist[] = [
    {
        type : "normal",
        icon : <AiOutlineHome />,
        title : "Dashboard",
        link : "/"
    },
    {
        type : "multiple",
        icon : <AiOutlineTable />,
        title : "Tablas",
        subitems : [
            {
                icon : <AiOutlineTable />,
                title : "Table a",
                link : "/"
            },
            {
                icon : <AiOutlineTable />,
                title : "Table b",
                link : "/"
            }
        ]
    },
    {
        type : "normal",
        icon : <TiCogOutline />,
        title : "Configuracion",
        link : ""
    }   
]

export default configSideBar;