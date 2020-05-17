import React from "react";
import { FaAddressBook, FaAccusoft } from "react-icons/fa";
import { Ilist } from "../interfaces";

const configSideBar : Ilist[] = [
    {
        type : "normal",
        icon : <FaAddressBook />,
        title : "Template 1"
    },
    {
        type : "normal",
        icon : <FaAddressBook />,
        title : "Template 2"
    },
    {
        type : "multiple",
        icon : <FaAddressBook />,
        title : "Template Multiple",
        subitems : [
            {
                icon : <FaAccusoft />,
                title : "Table a"
            },
            {
                icon : <FaAccusoft />,
                title : "Table b"
            }
        ]
    }
]

export default configSideBar;