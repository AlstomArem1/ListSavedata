import axios from "axios";
import {useState, useEffect} from "react";

    let List = [
        {
            id: 1,
            name: "products 1"
        },
        {
            id: 2,
            name: "products 2"
        },
        {
            id: 3,
            name: "products 3"
        },
        {
            id: 4,
            name: "products 4"
        },
    ]
    export const getProducts = () => {
        return List;
    };
    export const getProductsById = (id) => {
        return List.find((item) => item.id === id);
    };
   
