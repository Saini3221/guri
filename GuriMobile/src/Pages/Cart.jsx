// import { useEffect, useState, useContext } from 'react';
// // import Axios from 'axios';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { UserContext } from "../Context/UserContext";
// // import { useCart } from "../Context/CartContext"; // Import CartContext

// function Cart() {
//   const { user } = useContext(UserContext);
//   // const { cartItems } = useCart(); // Access cartItems from CartContext
//   const [totalAmount, setTotalAmount] = useState(0);
//   const userId = localStorage.getItem('userId'); // Get user ID from local storage or any auth method

//   useEffect(() => {
//     // Calculate total amount based on cartItems from context
//     const calculateTotal = () => {
//       // const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
//       // setTotalAmount(total);
//     };

//     calculateTotal();
//   }, [cartItems]); // Recalculate total whenever cartItems change

//   return (
//     <div className="h-screen flex flex-col justify-between">
//       <Navbar />

//       <div className="w-full h-full flex gap-[3%]">
//         {/* Cart items */}
//         <div className="bg-gray-600 w-[65%] mx-[1%] h-fit flex flex-col items-center">
//           {user ? (
//             cartItems.length > 0 ? (
//               cartItems.map(item => (
//                 <div key={item.productId} className="bg-white w-full p-4 m-2 flex justify-between">
//                   <div>
//                     <h1>{item.name}</h1> {/* Changed to item.name */}
//                     <p>Price: ₹{item.price}</p>
//                     <p>Quantity: {item.quantity}</p>
//                     <p>Total Price: ₹{item.totalPrice}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <h1 className="text-white">Your cart is empty</h1>
//             )
//           ) : (
//             <h1 className="text-white">Please log in to view your cart</h1> // Message when user is not logged in
//           )}

//           <div className="flex justify-end w-full">
//             <button className="text-white bg-orange-700 px-[4%] py-[2%]" disabled={!userId}>
//               PLACE ORDER
//             </button>
//           </div>
//         </div>

//         {/* Price details */}
//         <div className="bg-white w-[30%] h-[50%] fixed right-[1%] ">
//           <div className="p-[5vh]">
//             <div className="font-bold text-gray-500">
//               <h1>PRICE DETAILS</h1>
//             </div>

//             <div className="flex justify-between">
//               <div>
//                 <h1>Price</h1>
//                 <h1>Discount</h1>
//                 <h1>Delivery Charges</h1>
//               </div>
//               <div>
//                 <h1>₹{totalAmount}</h1>
//                 <h1>₹</h1> {/* Example discount */}
//                 <h1>Free</h1>
//               </div>
//             </div>

//             <div className="font-bold">
//               <h1>Total Amount ₹{totalAmount} </h1> {/* Adjust according to your discount logic */}
//             </div>

//             <div className="text-green-500">
//               <h1>You will save ₹ on this order</h1> {/* Example savings */}
//             </div>
//           </div>
//         </div>
//         {/* End Price details */}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Cart;
