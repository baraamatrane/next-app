import Todo from "@/app/components/todo";
import "@/app/globals.css";
import ProductID from "./[productid]";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className="nav-bar">
        <Link href="/products">
          <h2>Products</h2>
        </Link>
        <Link href="/products/newproduct">
          <h2>New Products</h2>
        </Link>
      </div>
      <br />
      <br></br>
      <br />
      <h2>{children}</h2>
    </div>
  );
}
