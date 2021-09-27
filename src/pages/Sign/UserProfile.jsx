import styled from "styled-components";
import useClickListener from "../../components/custom hooks/useClickListener";
import { faUserCircle as userIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const UserProfile = ({ bool }) => {
  const { ref, isComponentVisible, handleClickToggle } =
    useClickListener(false);

  const signOut = () => {
    localStorage.setItem("userData", JSON.stringify({}));
    window.location.reload();
  };

  const menuItems = {
    name: `${bool}`,
    subMenu: [
      { name: "Profile", click: null },
      { name: "Signout", click: signOut },
    ],
  };

  const computeSubMenuHeight = (menuItem) => {
    if (menuItem.subMenu) {
      return (menuItem.subMenu.length * 40 + 40).toString() + "px";
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
          <li>Hi {bool}</li>
          {menuItems.subMenu.map((item, index) => (
            <li key={index} onClick={item.click}>
              {item.name}
            </li>
          ))}
        </ul>
      </MobileViewMenu>

      {/* Menu for Screen view  */}
      <ScreenViewMenu>
        <ul id="screen">
          <li>Hi {bool}</li>
          {menuItems.subMenu.map((item, index) => (
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
      left: -50px;
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
