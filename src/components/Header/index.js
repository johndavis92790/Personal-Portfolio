import Navigation from "../Nav";

//Parent to the nav component, just in case I want to add something to the header later that isn't a part of the navbar
function Header() {
  return (
    <header>
      <Navigation
      ></Navigation>
    </header>
  );
}

export default Header;

