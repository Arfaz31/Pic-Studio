// import { useContext } from "react";
// import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "./UseAxiosSecure";
// import { AuthContext } from "../Pages/Provider/AuthProvider";

// const UseRole = () => {
//     const {user, loading} = useContext(AuthContext)
//     const [axiosSecure] = UseAxiosSecure()
//     const {data:isAdmin = [], isLoading:isAdminLoading} = useQuery({
//         queryKey:['isAdmin'],
//         enabled: !loading,
//         queryFn: async ()=>{
//             const res = await axiosSecure.get(`/users/role/${email}`)
//             console.log("response admin", res)
//             return res.data
//         }
//     })
//     return [isAdmin, isAdminLoading]
// };

// export default UseRole;