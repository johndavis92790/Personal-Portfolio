

function Nav(props) {

  const {
    setAboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
  } = props;

  return (
    <nav>
      <ul>
        <li>
          <span
            onClick={() => {
              setPortfolioSelected(false);
              setContactSelected(false);
              setAboutSelected(true);
              setResumeSelected(false);
            }}
          >
            About Me
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              setPortfolioSelected(false);
              setContactSelected(true);
              setAboutSelected(false);
              setResumeSelected(false);
            }}
          >
            Contact
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              setPortfolioSelected(true);
              setContactSelected(false);
              setAboutSelected(false);
              setResumeSelected(false);
            }}
          >
            Portfolio
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              setPortfolioSelected(false);
              setContactSelected(false);
              setAboutSelected(false);
              setResumeSelected(true);
            }}
          >
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
