import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
    isAdmin: boolean;
    clickCount: number;
    incrementCount: () => void;
    resetCount: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [clickCount, setClickCount] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (clickCount >= 10) {
            setIsAdmin(true);
        }
    }, [clickCount]);

    const incrementCount = () => {
        setClickCount(prev => prev + 1);
    };

    const resetCount = () => {
        setClickCount(0);
        setIsAdmin(false);
    };

    return (
        <AdminContext.Provider value={{ isAdmin, clickCount, incrementCount, resetCount }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
}; 