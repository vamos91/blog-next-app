import { ReactNode } from 'react';
import Header from '@/components/Header';

interface RootLayoutInterface{
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutInterface) => {
    const user = {admin: false}
    return (
        <div>
            <Header isAdmin={user.admin} />
            {children}
        </div>
    );
};

export default RootLayout