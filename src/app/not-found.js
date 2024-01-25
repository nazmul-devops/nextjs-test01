import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-6xl  text-red-600 font-semibold'>404 | Not Found</h1>
            <Link href="/">
                <button className='btn btn-primary m-5'>Go To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;