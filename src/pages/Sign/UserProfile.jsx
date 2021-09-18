import styled from "styled-components";

const UserProfile = ({ bool }) => {
  const signOut = () => {
    console.log("test");
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

  const computSubMenuHeight = (menuItem) => {
    if (menuItem.subMenu) {
      return (menuItem.subMenu.length * 40).toString() + "px";
    }
  };

  return (
    <ProfileMenu submenuheight={() => computSubMenuHeight(menuItems.subMenu)}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/png/user.png`} />

      <ul>
        <li>{bool}</li>
        {menuItems.subMenu.map((item, index) => (
          <li key={index} onClick={item.click}>
            {item.name}
          </li>
        ))}
      </ul>
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
  border-bottom-left-radius: 2px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;

  img {
    width: 17px;
  }

  &:hover {
    overflow: visible;
    background: linear-gradient(
      to top,
      rgba(255, 105, 180, 0.2),
      rgb(255, 255, 255),
      rgba(255, 105, 180, 0.2)
    );
    box-shadow: 0 1px 5px rgba(107, 78, 78, 0.6);
    border-bottom: rgba(255, 105, 180, 1) 2px solid;
    transform: translateY(2px);

    /* ul is submenu */
  }
  @media screen and (min-width: 769px) {
    :hover {
      ul {
        height: ${({ submenuheight }) => submenuheight};
        opacity: 1;
      }
    }
  }
  ul {
    /* height: 0; */
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.95);
    border: 1px solid lightgray;
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
      border-bottom: lightgray 1px solid;
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
`;
