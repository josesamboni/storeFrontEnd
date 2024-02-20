import { useSelector } from "react-redux";
import Navbar from "../components/NavBar";

export default function Account() {
  const { user, token } = useSelector((state) => state.authSlice);
  console.log(user);
  //const navigate = useNavigate();
  //const { data } = useGetOrderByIdQuery(id);
  //console.log(data)

  //   useEffect(() => {
  //     if (!token) {
  //       navigate("/login");
  //     }
  //   }, [token, navigate]);
  //   useGetOrderByIdQuery(token, { refetchOnMountOrArgChange: true });

  return (
    <div>
      <Navbar></Navbar>
      {user && (
        <div className="user-detail">
          <h2>Account Details </h2>
          <hr />
          <h4>Id: {user.id}</h4>
          <h4>First Name: {user.firstname}</h4>
          <h4>Last Name: {user.lastname}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Password: {user.password}</h4>
        </div>
      )}
   </div>
  );
}
