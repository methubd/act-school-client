import { useEffect, useState } from "react";
import useClasses from "../../../Hooks/useClasses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const EnroledClass = () => {
    const [classes, refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();
    const [paidClasses, setPaidClasses] = useState();

    useEffect(() => {
        axiosSecure.get('/payments')
        .then(res => {
            console.log(res.data);
        })
    }, [axiosSecure])

    
    return (
        <div className="h-screen w-full">
            <h1 className="text-xl text-gray-500 py-5 bg-gray-100 text-center ">Enrolled Class</h1>
        </div>
    );
};

export default EnroledClass;