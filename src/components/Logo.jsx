import { Link } from "react-router-dom";
Link;
const Logo = () => {
  return (
    <>
      <Link to="/" className="cursor-pointer">
        <img
          src="https://themesflat.co/html/modave/images/logo/logo.svg"
          alt="logo"
          width={144}
          height={25}
        />
      </Link>
    </>
  );
};

export default Logo;
