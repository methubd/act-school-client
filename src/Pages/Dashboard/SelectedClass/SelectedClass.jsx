import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    const {refetch, data: selectedClasses = []} = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClass`)
            // console.log('res Selected Class - ', res.data);
            return res.data;
        }
    })

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/selectedClass/${id}`)
                .then(data => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      refetch()
                })
              
            }
          })
        
    }
    
    return (
        <div className='h-screen w-full'>
            <h1 className="text-xl text-gray-500 py-5 bg-gray-100 text-center ">Selected Classes</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                            <label>
                                #
                            </label>
                            </th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map((item, index) => <tr
                                key={item._id}
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
                                            <img src={item.image} />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{item.course}</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    {item.instructorName}
                                    <br/>
                                    </td>
                                    <td>$ {item.price}</td>
                                    <td>
                                    <button className="btn btn-ghost btn-xs">pay</button>
                                    </td>
                                    <td>
                                    <button onClick={() => handleDelete (item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </td>
                                </tr>)
                            }
                        
                        </tbody>   
                    </table>
            </div>

        </div>
    );
};

export default SelectedClass;