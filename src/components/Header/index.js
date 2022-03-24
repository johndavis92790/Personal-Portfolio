import Navigation from "../Nav";

function Header(props) {
  const { setNavSelection } = props;

  return (
    <header>
      <Navigation
        setNavSelection={setNavSelection}
      ></Navigation>
    </header>
  );
}

export default Header;

