import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const Instructors = () => {
    const {user} = useAuth();
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/instructors`, {
            method: 'GET'
        })
        .then(data => data.json())
        .then(data => {
            setInstructors(data)
        })
    }, [user])
    
    return (
        <div>
            <h1 className="text-center font-semibold text-3xl py-5 mt-10">Popular Instructors</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 ">
                {
                    instructors.map(inst => <div 
                    key={inst._id}
                    className="card w-96 glass">
                    <figure><img className=' h-[150px] w-[150px] mt-10 mx-auto  rounded-full' src={inst?.image} alt="car!"/></figure>
                    <div className="text-center">
                        <h2 className="font-bold pt-5 text-2xl uppercase">{inst?.name}</h2>
                        <p className='pb-8 text-gray-500'>{inst?.email}</p>
                    </div>
                    </div>)
                }
            </div>

            
        </div>
    );
};

export default Instructors;