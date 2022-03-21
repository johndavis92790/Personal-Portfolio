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

