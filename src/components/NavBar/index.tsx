import { NavLink } from "react-router-dom";
import { useInitialState } from "../../hooks/useInitialState";
import { NAV_LABELS } from "../../common/constants";
import "./styles.scss";
import { Badge, Button } from "react-bootstrap";

const Navbar = () => {
  const { users, authUser, handleLogin } = useInitialState();
  const navLinkClass = ({ isActive }: any) => {
    return isActive ? "nav-tab active-nav-tab" : "nav-tab";
  };

  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <ul className="navbar-menu">
          {NAV_LABELS.map((item, index) => {
            return (
              <li className="navbar-container-menu-item">
                <NavLink
                  key={index}
                  to={`${item.urlTab}`}
                  end
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-container-right">
        {authUser && (
          <>
            <span className='navbar-container-logout'>
              <h4>
                <Badge>{(users as any)[authUser]?.name}</Badge>
              </h4>
              <Button onClick={() => handleLogin("")}>Logout</Button>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
