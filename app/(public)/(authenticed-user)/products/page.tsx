'use client'

import { useEffect, useState } from "react";

interface UserInterface{
    id: string,
    email: string
}

const Product = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const users = await fetch('/api/users')
            const userJson = await users.json()
            console.log(userJson)
            setUsers(userJson)
        }
        getData()
    }, [])

    return (
        <div>
            je suis la page produit
            {
                users && users.map((item: UserInterface) => (
                    <p key={item.id}>{item.email}</p>
                ))
            }
       </div>
    );
};

export default Product;