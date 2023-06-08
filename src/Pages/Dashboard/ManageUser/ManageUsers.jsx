import { useEffect, useState } from "react";

const ManageUsers = () => {
    const [logUsers, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [])

    return (
        <div className="h-screen w-full">
            <h1 className="text-xl text-gray-500 py-5 bg-gray-100 text-center ">Manage Users </h1>
            <div className="flex justify-between">
                <p><small>Total Users: {logUsers?.length}</small></p>
                <p><small>Total Admin: 0</small></p>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            #
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        logUsers.map((user, index) => <tr
                            key={user._id}
                            >
                            <th>
                            <label>
                                {index + 1}
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={user ? user.image : null} />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{user.name}</div>
                                <div><p className="text-gray-500">Power: {user.role}</p></div>
                                </div>
                            </div>
                            </td>
                            <td>
                            {user.email}
                            </td>
                            <td><button className="btn btn-ghost btn-xs">Make Admin</button>
                            
                            </td>
                            <td>
                            <button className="btn btn-ghost btn-xs">Make Instructor</button>
                            </td>
                            <td>
                            <button className="btn btn-ghost btn-xs bg-red-500 text-white">Delete</button>
                            </td>
                        </tr>)
                    }


                    </tbody>                    
                </table>
                </div>
        </div>
    );
};

export default ManageUsers;