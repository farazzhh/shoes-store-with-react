import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import React from "react";
import ReactCircleModal from "react-circle-modal";
import { faUserCircle as userIcon } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../components/Header/SlideShowElement";
import { PublicLink } from "../../components/PublicComponents/PublicButton";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
const ProfilePage = () => {
  const { user, logout } = useAuth0();

  return (
    <ReactCircleModal
      backgroundColor="gray"
      toogleComponent={(onClick) => (
        <PublicLink transparency="true" onClick={onClick} fontWeight="400">
          Hello {user.given_name} 👋🏻
          {/* <Icon icon={userIcon} /> */}
        </PublicLink>
      )}
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

export default ProfilePage;

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
  &>span{
    color: gray;
    font-size: 14px;
    span{
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
