import { ReactSVG } from "react-svg";

function Header() {
  return (
    <header>
      <ReactSVG src="src/assets/globe.svg" className="logo" />
      <span className="title">my travel journal.</span>
    </header>
  );
}

export default Header;
