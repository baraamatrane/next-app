import { useNavigation } from "next/navigation";
import React from "react";

async function ProductID() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5",
    {
      next: {
        revalidate: 80,
      },
    }
  );
  const data = await response.json();
  // const navigation = useNavigation();
  // const idproduct = navigation.query.productid;
  console.log("idproduct");
  console.log(data);
  return (
    <div key={data.id}>
      {/* <h6>product {idproduct}</h6> */}
      <br />
      {data.map((post) => {
        <div>
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>
        </div>;
      })}
    </div>
  );
}

export default ProductID;
