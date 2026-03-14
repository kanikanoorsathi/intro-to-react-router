import React, { use } from 'react';

const UserDetails2 = ({usersPromise}) => {
    const {name, username} = use(usersPromise)
    return (
        <div>
            <p><small>user Name: {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;