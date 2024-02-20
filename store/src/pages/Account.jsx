// import  { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setToken } from "../app/userSlice";
// import LogIn from "./logIn";
// import { useGetOrderByIdQuery } from "../api/api";

// export default function account() {
//   const { token, user } = useSelector((state) => state.userSlice);
//   const navigate = useNavigate();
//   const { data } = useGetOrderByIdQuery(id);
//   //console.log(data)

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);
//   useGetOrderByIdQuery(token, { refetchOnMountOrArgChange: true });

//   return (
//     token &&
//     user && (
//       <div className="accountPage">
//         <div className="container">
//           <header className="d-flex justify-content-center py-3">
//             <ul className="nav nav-pills">
//               <li className="nav-item">
//                 <button className="nav-link" onClick={() => navigate("/")}>
//                   Home
//                 </button>
//               </li>
//               {!token && (
//                 <li className="nav-item">
//                   <button
//                     className="nav-link"
//                     onClick={() => navigate("/login")}
//                   >
//                     Login
//                   </button>
//                 </li>
//               )}
//               {token && (
//                 <li className="nav-item">
//                   <button
//                     className="nav-link"
//                     onClick={() => {
//                       dispatch(setToken(null));
//                       navigate("/");
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//             </ul>
//           </header>
//         </div>
//         <div className="userInfo">
//           <blockquote className="blockquote text-center">
//             <p className="mb-2">
//               Welcome {user.firstname || "User"} {user.lastname || "User"}!
//             </p>
//             <footer className="blockquote-footer">
//               <cite title="Source Title">{user.email}</cite>
//             </footer>
//           </blockquote>
//         </div>
//         <div className="store">
//           {!user.books.length && (
//             <div style={{ display: "grid", justifyItems: "center" }}>
//               <h1 className="display-3">Empty Cart</h1>
             
//             </div>
//           )}
//           {user.products.map((product) => {
//             return (
//               <div
//                 key={product.id}
//                 className="card"
//                 style={{ width: "18rem", margin: "5px" }}
//               >
//                 <img
//                   src={product.coverimage}
//                   className="card-img-top"
//                   alt={product.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text">{product.author}</p>
//                 </div>
//                 <button
//                   id={product.id}
//                   className="btn btn-primary"
//                   onClick={returnProduct}
//                 >
//                   Return
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     )
//   );
// }