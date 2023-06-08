import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {

    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin];
}

export default useAdmin;