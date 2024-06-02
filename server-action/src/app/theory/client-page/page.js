// "use client";

// import fetchListOfProduct from "@/actions";
// import { useEffect, useState } from "react";

// export default function ClientPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function getListOfProducts() {
//     setLoading(true);
//     const data = await fetchListOfProduct();
//     console.log(data);
//     if (data) {
//       setProducts(data);
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     getListOfProducts();
//   }, []);
//   if (loading) return <h1>Loading data! Please wait</h1>;

//   return (
//     <div>
//       <h1>Client page server actions example</h1>
//       <ul>
//         {products && products.length > 0 ? (
//           products.map((item) => <li key={item.id}>{item.title}</li>)
//         ) : (
//           <h2>No products found</h2>
//         )}
//       </ul>
//     </div>
//   );
// }
