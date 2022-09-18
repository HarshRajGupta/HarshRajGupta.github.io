import { memo } from "react";
import Styled from "styled-components";
// import PersonIcon from "@mui/icons-material/Person";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import Hamburger from "../components/Hamburger";
import { useAlert } from "react-alert";

function TopBar({ menuOpen, setMenuOpen, isDark, setDark }) {
  const alert = useAlert().show;
  return (
    <Container className={!menuOpen && "active"} isDark={isDark}>
      <Hamburger
        showMenu={menuOpen}
        setMenu={setMenuOpen}
        isDark={isDark}
        setDark={setDark}
      />
      <Wrap>
        <LeftBar>
          <MyName isDark={isDark} href="#home">
            harsh.
          </MyName>
          <Item>
            <CallIcon
              className="icon"
              onClick={() => {
                navigator.clipboard.writeText("+917607642202");
                alert(`Mobile Number has been copied on the clipboard`);
              }}
            />
            <ItemText
              onClick={() => {
                navigator.clipboard.writeText("+917607642202");
                alert(`Mobile Number has been copied on the clipboard`);
              }}
            >
              +91 7607642202
            </ItemText>
          </Item>
          <Item>
            <EmailIcon
              className="icon"
              onClick={() => {
                navigator.clipboard.writeText("1amHarsh.RG@gmail.com");
                alert(`Email id has been copied on the clipboard`);
              }}
            />
            <ItemText
              onClick={() => {
                navigator.clipboard.writeText("1amHarsh.RG@gmail.com");
                alert(`Email id has been copied on the clipboard`);
              }}
            >
              1amHarsh.RG@gmail.com
            </ItemText>
          </Item>
          <Item>
            <DownloadIcon
              className="icon"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1g0lGlqeTgYr0o5zz8gMmHQZ7w8mkkwMa"
                )
              }
            />
            <ItemText
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1g0lGlqeTgYr0o5zz8gMmHQZ7w8mkkwMa"
                )
              }
            >
              Resume
            </ItemText>
          </Item>
        </LeftBar>
        <RightBar>
          <HamBurger
            onClick={() => {
              setMenuOpen(!menuOpen);
              // setDark(!isDark);
            }}
            className={menuOpen && "active"}
          >
            <span></span>
            <span></span>
            <span></span>
          </HamBurger>
        </RightBar>
      </Wrap>
    </Container>
  );
}

const Wrap = Styled.div`
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
`;

const LeftBar = Styled.div`
    grid-template-columns: auto auto auto auto;
    align-items: center;
    grid-gap: 70px;
    @media (max-width: 1280px) {
        grid-gap: 16px;
    }
	width: max-content;
`;

const MyName = Styled.a`
    font-size: 42px;
    font-weight: 600;
    text-decoration: none;
    font-family: Poppins;
    @media (max-width: 540px) {
        font-size: 24px;
    }
	@media (max-width: 414px) {
        font-size: 21px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
    }
	color: ${({ isDark }) => (isDark ? "#00c4cc" : "rgba(2, 12, 23, 0.9)")};
`;
const Item = Styled.div`
    grid-template-columns: auto auto;
    grid-gap: 4px;
    align-items: center;
    cursor: default;
	.icon {
		width: 24px;
		@media (max-width: 414px) {
        	width: 20px;
    	}
    	@media (max-width: 300px) {
        	width: 16px;
    	}
	}
`;
const ItemText = Styled.div`
    font-family: Poppins;
    font-size: 14px;
	@media (max-width: 414px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
    }
    font-weight: 600;
	cursor: pointer;
	@media (max-width: 1280px) {
        display: none;
    }
`;
const RightBar = Styled.div``;

const HamBurger = Styled.div`
    width: 24px;
	@media (max-width: 414px) {
		width: 20px;
	}
    grid-gap: 1.4px;
    height: 18px;
	@media (max-width: 414px) {
		height: 16px;
	}
    cursor: pointer;
    overflow: hidden;
    align-items: center;
    span {
        width: 100%;
        height: 2.5px;
		@media (max-width: 414px) {
			height: 2px;
		}
        /* background-color: #15023a; */
		background-color: #00c4cc;
        transform-origin: right;
        transition: all 1.5s ease;
        border-radius: 256px;
    }
    &.active {
        height: 32px; 
        grid-gap: 1px; 
        span { 
            &:first-child { 
                /* background-color: #fff;  */
                transform: rotate(-45deg);
            } 
            &:nth-child(2) {
                display: none;
            } 
            &:last-child {
                /* background-color: #fff;  */
                transform: rotate(45deg);
            }
        }
    }
`;

const Container = Styled.div`
    width: 100vw;
    height: 70px;
    position: fixed; 
    top: 0;
    z-index: 2;
    transform: width 0s, height 0s;
    transition: all 0.25s ease-in-out;
	background: ${({ isDark }) =>
    isDark ? "rgba(2, 12, 23,0.5)" : "rgba(255, 255, 255, 0.1)"};
	color: ${({ isDark }) => (isDark ? "#5cb6f9" : "#15023a")};
    @media (max-width: 540px) {
        height: 56px;
    }
`;

export default memo(TopBar);