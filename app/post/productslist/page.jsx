"use client";

export default function Postpage({ data }) {
  console.log(data);
  return (
    <>
      <h1 style={{ color: "white" }}>THE POST DETAILS:</h1>
      <div key={data.id}>
        <h3 style={{ color: "white" }}>{data.title}</h3>
        <p style={{ color: "white" }}>{data.body}</p>
        <p style={{ color: "white" }}>{data.id}</p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
