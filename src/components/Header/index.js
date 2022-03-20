import Navigation from "../Nav";

function Header(props) {
  const {
    setAboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
  } = props;

  return (
    <header>
      {/* <h1>John Davis</h1> */}
      <Navigation
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setAboutSelected={setAboutSelected}
        setResumeSelected={setResumeSelected}
      ></Navigation>
    </header>
  );
}

export default Header;

