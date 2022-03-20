import Nav from "../Nav";

function Header(props) {
  const {
    setAboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
  } = props;

  return (
    <header>
      <h1>John Davis</h1>
      <Nav
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setAboutSelected={setAboutSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
    </header>
  );
}

export default Header;

