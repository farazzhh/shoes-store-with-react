import styled from "styled-components";
import useClickListener from "../../components/custom hooks/useClickListener";

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
      <img src={`${process.env.PUBLIC_URL}/assets/images/png/user.png`} />

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
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  overflow: visible;

  img {
    width: 17px;
  }

  &:hover {
    @media screen and (min-width: 769px) {
      background: linear-gradient(
        to top,
        rgba(255, 105, 180, 0.2),
        rgb(255, 255, 255),
        rgba(255, 105, 180, 0.2)
      );
      box-shadow: 0 1px 5px rgba(107, 78, 78, 0.6);
      border-bottom: rgba(255, 105, 180, 1) 2px solid;
      transform: translateY(2px);

      ul#screen {
        height: ${({ submenuheight }) => submenuheight};
        box-shadow: none;
        border-bottom: none;
      }
    }
  }

  ul#mobile {
    height: ${({ submenuheight, isComponentVisible }) =>
      isComponentVisible && submenuheight};
    box-shadow: 0 1px 5px rgba(107, 78, 78, 0.6);
    border-bottom: none;
    left: -50px;
  }

  ul {
    opacity: 1;
    height: 0;
    background-color: rgba(255, 255, 255, 0.95);
    width: 150px;
    position: absolute;
    top: 30px;
    left: -35px;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
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

      &:not(:last-child) {
        border-bottom: lightgray 1px solid;
      }

      :hover {
        background: linear-gradient(
          to top,
          rgb(255, 255, 255),
          rgba(255, 105, 180, 0.1),
          rgb(255, 255, 255)
        );
        letter-spacing: 2px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    border-radius: 4px;
    box-shadow: none;
    height: 30px;
    margin-right: 2rem;
    background-color: rgba(255, 105, 180, 0.3);
    width: 40px;
  }
  @media all and (max-width: 370px) {
    margin-right: 1rem;
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
