import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageClasses = () => {
    const [classes, setClasses] = useState([])
    const [axiosSecure] = useAxiosSecure()
    console.log(classes);   

    useEffect(() => {
        const loadClasses = async () => {
            const serverResponse = await axiosSecure.get('/classs')
            console.log(serverResponse);
            setClasses(serverResponse.data)
            return serverResponse.data;
        }
        loadClasses();
    }, [axiosSecure])

    return (
        <div className='h-screen w-full'>
            <h1 className="text-xl text-gray-500 py-5 bg-gray-100 text-center ">Manage Instructors Classes : {classes.length}</h1>

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
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        classes.map((cls,index) => <tr
                        key={cls._id}
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
                                    <img src={cls?.image} />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{cls?.course}</div>
                                <div className="text-sm opacity-50">Price: $ {cls?.price}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            {cls?.instructorName}
                            <br/>
                            <span className="badge badge-ghost badge-sm">{cls.instructorEmail}</span>
                            </td>
                            <td>
                                {/* TODO: add event handler and get data to a new field of existing table */}
                                <form action="">
                                <input className="bg-gray-200 py-2 px-2" type="text" name="feedback" placeholder="Feedback" />
                                </form>

                            <button className="btn btn-ghost btn-xs text-green-700">Approve</button>
                            <button className="btn btn-ghost btn-xs text-red-600">Deny</button> <br />
                            </td>
                        </tr>)
                    }
                         
                    </tbody>                    
                </table>
                </div>
        </div>
    );
};

export default ManageClasses;