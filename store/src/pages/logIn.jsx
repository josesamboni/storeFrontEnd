// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { useLoginMutation } from "../api/api"; // connect with mutation from api

// const loginForm = () => {
//   const navigate = Navigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [login, { isLoading, isError }] = useLoginMutation();

//   const formChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const loginForm = async (e) => {
//     e.preventDefault();
//     try { 
//         const result = await login(form);
//         if (result.error) {
//             setMessage(result.error.data.message);
//         } else {
//             setMessage("");
//             navigate("/account");
//         }
//     } catch (error) { 
//         console.error('error:', error);
//     }
//   }

//   return (
//     <>
//       {isLoading && <p>Loading...</p>}

//       <form onSubmit={loginForm} className="form">
//           <h1 className="display">Log in</h1>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={formChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//               name="password"
//               onChange={formChange}
//             />
//           </div>
//         <button type="submit" className="button">
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>
//         {isError && <p className="text-danger">{message}</p>}
//         <p>
//           No account? <Link to="/register">Sign Up</Link>
//         </p>
//       </form>
//     </>
//   );
// };

// export default loginForm;