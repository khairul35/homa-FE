import { Props, User } from './props';
import styles from './index.module.css';
import UserDetail from './detail';
import React from 'react';

const Component = (props: Props) => {

    const { onBack, handleRowClick, createNewUser, users, show, detailProps } = props;

    if (show == 'list') {
        return (
            <div className="bg-bg-color min-h-screen overflow-auto pb-5">
                <div className="bg-white border-b-2 border-black">
                    <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                        <a
                            className="text-blue-600 cursor-pointer"
                            onClick={() => onBack()}
                        >
                            Organization Setting
                        </a>
                        &nbsp;&gt; Users ({users.length})
                    </h1>
                </div>
                <div className="mt-0 p-10 pl-20 pr-20 items-center">
                    <div className='border-b border-gray-300 text-xl font-semibold p-5 pl-20'>
                        <div className="text-right">
                            <button className="btn btn-primary" onClick={createNewUser}>Create new user</button>
                        </div>
                    </div>
                    <div>
                        <table className="table mt-2 border-b border-black">
                            <thead>
                                <tr style={{ backgroundColor: '#8ABCDE', color: '#000' }}>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white'>
                                {
                                    users.map((user: User) => (
                                        <React.Fragment key={user.id}>
                                            <tr
                                                key={user.id}
                                                onClick={() => handleRowClick(user)}
                                                className="cursor-pointer hover:bg-blue-50"
                                            >
                                                <td>{user.firstName} {user.lastName}</td>
                                                <td>@{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.role}</td>
                                            </tr>
                                        </React.Fragment>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    
    if (show == 'detail') {
        return (
            <>
                <UserDetail {...detailProps} />
            </>
        )
    }
            
}

export default Component;
