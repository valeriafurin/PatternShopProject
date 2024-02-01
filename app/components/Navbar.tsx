import Link from "next/link";
import Links from "./Links";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container-div h-16 bg-yellow">
        <Links label="Home" path="/"></Links>
        <Links label="About" path="about"></Links>
        <Links label="Blog" path="blog"></Links>
        <Links label="Shop" path="shop"></Links>
        <Links label="Cart" path="Cart"></Links>
        <div>Here the logo comes in</div>
      </div>
    </header>
  );
}
