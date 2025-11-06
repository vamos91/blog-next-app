'use client'

//import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface AuthenticatedlayoutInterface{
    children: ReactNode,

}

const Authenticatedlayout = ({ children }: AuthenticatedlayoutInterface) => {
    //const router = useRouter()
    const user = {token: true}
    return (
        <div>
            {
                user.token ? children : null
            }
        </div>
    );
};

export default Authenticatedlayout;