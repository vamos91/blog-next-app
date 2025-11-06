'use client'
//import { useRouter } from 'next/navigation';

import { ReactNode } from 'react';

interface AdminInterface {
    children: ReactNode,

}

const Adminlayout = ({ children }: AdminInterface) => {
    const user = { token: true, admin: false }
   // const router = useRouter()
    return (
        <div>
            {
               user.admin ? children : null
            }
        </div>
    );
};

export default Adminlayout;