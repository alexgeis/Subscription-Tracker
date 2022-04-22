import "../Footer/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

function Footer({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };
  return (
    <div className="btn-group">
      <ul className="footerButtons">
        <li className="footer-items">
            <Link to="/welcome">
              <button
                type="button"
                className="btn btn-secondary btn-sm">
                Home
              </button>
            </Link>
        </li>
        <li className="footer-items">
          <div>
            {AuthService.loggedIn() ? (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                id="logout"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link className="btn btn-secondary btn-sm" to="/">
                  Login
                </Link>
                <Link className="btn btn-secondary btn-sm" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
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
