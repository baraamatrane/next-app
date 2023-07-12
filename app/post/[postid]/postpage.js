export default function Postpage({data}) {

  return (
    <>
      <h1 style={{ color: "white" }}>THE POST DETAILS : </h1>
      <div key={data.id}>
        <h3 style={{ color: "white" }}>{data.title}</h3>
        <p style={{ color: "white" }}>{data.body}</p>
        <p style={{ color: "white" }}>{data.id}</p>
      </div>
    </>
  );
}

export default async function getServerSideProps({ params }) {
  const response = await fetch(
    `http://localhost:3000/api/1`
  );
  const data = await response.json();
  return {
    props: {
      data,
    }
  }
}