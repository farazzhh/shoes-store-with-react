import styled from "styled-components";
import useClickListener from "../custom hooks/useClickListener";
import { faUserCircle as userIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import ReactCircleModal from "react-circle-modal";
import { PublicLink } from "../../components/PublicComponents/PublicButton";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  // close the window when click outside the window
  const { ref, isComponentVisible, handleClickToggle } =
    useClickListener(false);

  const listProfileMenu = (onClick) => <li onClick={onClick}>{user.name}</li>;
  let menuItems = null;

  // rendering the items of submenu by login or not
  if (user) {
    menuItems = [
      {
        name: "Signout",
        click: () => {
          logout({
            returnTo: window.location.origin,
          });
        },
      },
    ];
  } else {
    menuItems = [
      {
        name: "Login",
        click: loginWithRedirect,
      },
    ];
  }

  // Computing height of Profile's submenu for css
  const computeSubMenuHeight = (menuItem) => {
    if (menuItem) {
      if (user) {
        return (menuItem.length * 40 + 40).toString() + "px";
      } else {
        return (menuItem.length * 40).toString() + "px";
      }
    }
  };

  return (
    <ProfileMenu
      submenuheight={() => computeSubMenuHeight(menuItems)}
      isComponentVisible={isComponentVisible}
      onClick={handleClickToggle}
    >
      <Icon icon={userIcon} />

      {/* Menu for Mobile view  */}

      <MobileViewMenu>
        <ul ref={ref} id="mobile">
          {user && <ProfilePage />}
          {menuItems.map((item, index) => (
            <li key={index} onClick={item.click}>
              {item.name}
            </li>
          ))}
        </ul>
      </MobileViewMenu>

      {/* Menu for Screen view  */}
      <ScreenViewMenu>
        <ul id="screen">
          {user && <ProfilePage />}
          {menuItems.map((item, index) => (
            <li key={index} onClick={item.click}>
              {item.name}
            </li>
          ))}
        </ul>
      </ScreenViewMenu>
    </ProfileMenu>
  );
};
export default UserProfile;

export const ProfileMenu = styled.div`
  height: 30px;
  width: 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  list-style: none;
  margin-left: 0.5rem;
  color: #000;
  padding: 6px 0px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  overflow: visible;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    margin-left: 0;
    display: flex;
    align-items: center;
    width: 40px;
  }

  &:hover {
    @media screen and (min-width: 769px) {
      box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
      border-bottom: #870a30 1px solid;
      transform: translateY(1px);

      ul#screen {
        height: ${({ submenuheight }) => submenuheight};
        /* box-shadow: none; */
        border-bottom: none;
      }
    }
  }

  svg {
    font-size: 20px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    ul#mobile {
      height: ${({ submenuheight, isComponentVisible }) =>
        isComponentVisible && submenuheight};
      box-shadow: 0 1px 5px rgba(107, 78, 78, 0.6);
      border-bottom: none;
      left: -56px;
      top: 60px;
    }
  }

  ul {
    opacity: 1;
    height: 0;
    background-color: #fff;
    width: 150px;
    position: absolute;
    top: 30px;
    left: -35px;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    li {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      font-size: 12px;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      width: 100%;
      text-align: center;
      transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;

      &:not(:last-child) {
        border-bottom: #d3d3d3 1px solid;
      }

      &:not(:first-child):hover {
        background: -webkit-linear-gradient(
          to top,
          rgba(255, 255, 255, 0.1),
          rgba(135, 10, 47, 0.1),
          rgba(255, 255, 255, 0.1)
        ); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(
          to top,
          rgba(255, 255, 255, 0.1),
          rgba(135, 10, 47, 0.1),
          rgba(255, 255, 255, 0.1)
        ); /* Opera 11.10+ */
        background: linear-gradient(
          to top,
          rgba(255, 255, 255, 0.1),
          rgba(135, 10, 47, 0.1),
          rgba(255, 255, 255, 0.1)
        );
        letter-spacing: 2px;
      }
      &:first-child {
        color: #870a2f;
        font-weight: 500;
        text-transform: capitalize;
        cursor: default;
      }
    }
  }
`;

export const MobileViewMenu = styled.div`
  /* display: block;
  @media small and (max-width: 768px) {
    display: none;
  } */
`;
export const ScreenViewMenu = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ProfilePage = () => {
  const { user, logout } = useAuth0();

  return (
    <ReactCircleModal
      backgroundColor="gray"
      toogleComponent={(onClick) => <li onClick={onClick}>{user.name}</li>}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <Modal>
          <ModalWrapper>
            <img src={user.picture} alt="user Profile" />
            <span style={{ textAlign: "center" }}>
              you are signing as <span>{user.nickname}</span>
            </span>
            <BorderBottom color="lightgray" />
            <div className="userContent">
              <span>
                Name : <span>{user.given_name}</span>
              </span>
              <span>
                Family : <span>{user.family_name}</span>
              </span>
              <span>
                email : <p>{user.email}</p>
              </span>
              <span>
                gender : <span>{user.gender}</span>
              </span>
            </div>
            <BorderBottom color="lightgray" />
            <div className="buttonWrapper">
              <PublicLink
                transparency="true"
                fontWeight="400"
                onClick={() =>
                  logout({
                    returnTo: window.location.origin,
                  })
                }
              >
                Logout
              </PublicLink>
              <PublicLink onClick={onClick} fontWeight="400">
                Close
              </PublicLink>
            </div>
          </ModalWrapper>
        </Modal>
      )}
    </ReactCircleModal>
  );
};

const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
const ModalWrapper = styled.div`
  background-color: whitesmoke;
  width: 320px;
  height: 500px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 15px;

  @media screen and (max-width: 330px) {
    width: 250px;
  }
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.4);
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.4);
  }
  & > span {
    color: gray;
    font-size: 14px;
    span {
      color: #000;
      display: block;
      font-size: 18px;
      text-transform: capitalize;
    }
  }
  .userContent {
    display: grid;
    /* place-items: center; */
    grid-gap: 10px;
    span {
      font-size: 14px;
      font-weight: 300;
      color: #808080;

      span {
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 400;
        color: #000;
        border: none;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: #000;
        display: inline;
      }
    }
  }

  .buttonWrapper {
    display: flex;
    column-gap: 20px;
  }
`;
