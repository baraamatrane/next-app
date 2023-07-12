import { Suspense } from "react";
import Postpage from "./postpage.js";

export default function PostDetails({ params }) {
  return (
    <div
      style={{
        Width: "70%",
        background: "#123",
        padding: "10px 5px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <Suspense>
        <Postpage params={params} />
      </Suspense>
    </div>
  );
}
