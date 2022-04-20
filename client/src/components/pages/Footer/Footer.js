import "../Footer/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div className="btn-group">
      <ul className="footerButtons">
        <li className="footer-items">
          <button type="button" className="btn btn-secondary btn-sm" id="welcome">
            <a
              href="#home"
              onClick={() => handlePageChange("Welcome")}
              className={currentPage}
            >
              Home
            </a>
          </button>
        </li>
        <li className="footer-items">
          <button type="button" className="btn btn-secondary btn-sm" id="logout">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={currentPage}
            >
              Logout
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

//move this code to AppContainer:

//const [currentPage, setCurrentPage] = useState("Home");

//   const renderPage = ({ currentPage, handlePageChange }) => {
//     if (currentPage !== "Home") {
//       return <Home />;
//     }
//   };
//  const handlePageChange = (page) => setCurrentPage(page);
