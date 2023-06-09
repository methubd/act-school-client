import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const Classes = () => {
    const {user} = useAuth();
    const [classes, setInstructors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/classes`, {
            method: 'GET'
        })
        .then(data => data.json())
        .then(data => {
            setInstructors(data)
        })
    }, [user])

    return (
        <div>
            <h1 className="text-center font-semibold text-3xl py-5 mt-10">Popular Classes</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 ">
                {
                    classes.map(cls => <div 
                    key={cls._id}
                    className="card w-96 glass">
                    <figure><img className='h-[200px] w-[400px] mx-auto  rounded-t-2xl' src={cls?.image} alt="car!"/></figure>
                    <div className="text-center">
                        <h2 className="font-bold pt-5 text-2xl uppercase">{cls?.course}</h2>
                        <p className='text-gray-500'>Instructor: {cls?.instructorName}</p>
                        <p className=' text-gray-500p'>Available Seats: {cls?.seats}</p>
                        <p className='text-3xl'>$ {cls?.price}</p>
                        <button className="bg-red-500 px-8 py-2 my-3 text-white hover:bg-slate-900 rounded-lg">Select</button>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;