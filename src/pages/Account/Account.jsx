import { Avatar } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Account = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='bg-[#2d6262] mt-0'>
            <div className='p-4 lg:ml-5'>
                <Avatar alt="Remy Sharp" sx={{ width: 86, height: 86, }} src={user.photoURL ? user.photoURL : 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1692720433~exp=1692721033~hmac=761eb865f6a68d777e137845df78aa91c0e2ef0f7cad8ec51dac5e1ff71d2c65'} />
            </div>
            <h1 className='font-bold lg:ml-10 pb-2 text-white'>{user?.displayName}</h1>
        </div>
    );
};

export default Account;