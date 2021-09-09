import React, { FC, ReactChild, ReactNode, useEffect } from 'react';
import { useActions } from 'hooks/useActions';
import { NextPage } from 'next';

interface AppWrapperProps {
    children: ReactChild | ReactNode | NextPage
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
    const reduxActions = useActions();

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            const userStringified = localStorage.getItem('user')

            if (userStringified) {
                reduxActions.setUser(JSON.parse(userStringified));
                reduxActions.setIsAuth(true);
            }
        }
    }, []);

    return (
        <>
          {children}
        </>
    )
}

export default AppWrapper
