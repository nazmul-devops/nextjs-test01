import React from 'react';

const loading = () => {
    return (
        <div className='text-center my-10'>
            <span class="loading loading-dots loading-xs"></span>
            <span class="loading loading-dots loading-sm"></span>
            <span class="loading loading-dots loading-md"></span>
            <span class="loading loading-dots loading-lg"></span>
        </div>
    );
};

export default loading;