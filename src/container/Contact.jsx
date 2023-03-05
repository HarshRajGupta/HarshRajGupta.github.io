import { lazy, memo, useState, useRef } from 'react';
import { Spinner } from '../components';
import emailjs from '@emailjs/browser';
import Styled from 'styled-components';
import { useAlert } from 'react-alert';
import Fade from 'react-reveal/Fade';

const Map = lazy(() => import('../components/Map'));

function Contact({ isDark }) {
	const alert = useAlert().show;
	const form = useRef();
	const [status, setStatus] = useState(
		localStorage.getItem('M$Ppl3R#3p&Bz994C93t'),
	);
	if (status === null) setStatus('send');
	const [formData, setFormData] = useState({
		user_email: localStorage.getItem('VoTshS53jhSV22E^SRo@'),
		message: localStorage.getItem('I#S&hsG02P8Q0i^70!9e'),
	});
	if (formData.user_email === null && formData.message === null) {
		setFormData({
			user_email: '',
			message: '',
		});
	} else if (formData.user_email === null) {
		setFormData({
			...formData,
			user_email: '',
		});
	} else if (formData.message === null) {
		setFormData({
			...formData,
			message: '',
		});
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		if (name === 'user_email')
			localStorage.setItem('VoTshS53jhSV22E^SRo@', value);
		else localStorage.setItem('I#S&hsG02P8Q0i^70!9e', value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (status === 'send') {
			setStatus('sending');
			localStorage.setItem('M$Ppl3R#3p&Bz994C93t', 'sending');
			emailjs
				.sendForm(
					'service_hvc5w18',
					'template_kl9awzw',
					form.current,
					'_s8CAk2YdEw7gn7U3',
				)
				.then(
					(result) => {
						alert('Mail sent successfully!!!');
						setStatus('sent');
						localStorage.setItem('M$Ppl3R#3p&Bz994C93t', 'sent');
						localStorage.removeItem('VoTshS53jhSV22E^SRo@');
						localStorage.removeItem('I#S&hsG02P8Q0i^70!9e');
						console.log(result);
					},
					(error) => {
						if (error.text === null || error.text === '')
							alert('Failed to send email');
						else alert(error.text);
						setStatus('try again');
						localStorage.removeItem('M$Ppl3R#3p&Bz994C93t');
						console.log(error.text);
						return;
					},
				);
			emailjs
				.sendForm(
					'service_hvc5w18',
					'template_fdnv60h',
					form.current,
					'_s8CAk2YdEw7gn7U3',
				)
				.then(
					(result) => {
						console.log(result);
					},
					(error) => {
						console.log(error.text);
					},
				);
		} else if (status === 'try again') {
			setStatus('send');
		}
	};
	return (
		<Container
			isDark={isDark}
			id="Contact-me"
		>
			<Fade
				left
				big
			>
				<Left>
					<Map />
				</Left>
			</Fade>
			<Fade
				right
				big
			>
				<Right>
					<Title>Contact</Title>
					<Wrap
						ref={form}
						onSubmit={handleSubmit}
					>
						{(status === 'send' && (
							<>
								<Email>
									<span></span>
									<EmailInput
										type="email"
										name="user_email"
										value={formData.user_email}
										onChange={handleChange}
										placeholder="Enter your Email Address"
										required
									/>
									<span></span>
								</Email>
								<Message>
									<span></span>
									<MessageBg>
										<MessageInput
											name="message"
											required
											value={formData.message}
											onChange={handleChange}
										/>
									</MessageBg>
									<span></span>
								</Message>
							</>
						)) ||
							(status === 'sent' && (
								<Sent
									src={
										'https://user-images.githubusercontent.com/85221003/190645104-c36be8f1-3721-4155-897d-2715be9a3972.png'
									}
								/>
							)) ||
							(status === 'sending' && (
								<Spinner text={`sending`} />
							)) ||
							(status === 'try again' && (
								<Sent
									src={
										'https://user-images.githubusercontent.com/85221003/190645213-d4c57ad1-c85b-4516-8cac-ea3b6fbb544e.png'
									}
								/>
							))}
						<Submit>
							<Button
								id="submit"
								className={
									status === 'sending'
										? 'clicked'
										: status === 'try again'
										? 'error'
										: status === 'sent'
										? 'sent'
										: ''
								}
							>
								{status}
								<svg
									version="1.1"
									x="0px"
									y="0px"
									viewBox="0 0 512 512"
									enableBackground="new 0 0 512 512"
								>
									<path
										id="paper-plane-icon"
										d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z
M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"
									></path>
								</svg>
							</Button>
						</Submit>
					</Wrap>
				</Right>
			</Fade>
		</Container>
	);
}

const Container = Styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    @media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
	justify-content: space-around;
	z-index: 1;
	grid-template-columns: auto auto;
    @media (max-width: 1023px) {
        grid-template-columns: 1fr;
    }
	position: relative;
    * {
        overflow: visible;
    }
    background: ${({ isDark }) =>
		isDark ? 'rgba(2, 12, 23,0.5)' : 'rgba(255, 255, 255, 0.69)'};
    /* background: rgba(2, 12, 23, 0.5); */
`;

const Left = Styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Right = Styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Wrap = Styled.form`
    width: 100%;
    height: 75vh;
    align-items: center;
`;

const Title = Styled.h1`
    font-size: 42px;
    font-family: 'Pacifico', cursive;
    font-weight: 500;
    display: block;
    color: #00c4cc;
    &::after {
		font-family: Poppins;
        content: " Me";
        font-weight: 600;
        color: #5cb6f9
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
    margin: 0 auto;
`;

const Email = Styled.div`
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    height: max-content;
    overflow: hidden !important;
    span {
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #185a9d, #00c4cc);
    }
`;

const EmailInput = Styled.input`
    margin: 12px 16px;
    font-family: "Zen Kaku Gothic Antique";
    font-size: 16px;
    font-weight: 600;
    width: 360px;
    /* text-transform: lowercase; */
    @media (max-width: 1023px) {
        width: 80vw;
    }
    background: transparent;
    outline: none;
    border: none;
    color: #15023a;
    /* color: rgba(2, 12, 23,0.8); */
    cursor: pointer;
    height: max-content;
`;

const Message = Styled.div`
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    height: max-content;
    overflow: hidden !important;
    span {
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #5cb6f9, #00c4cc, #185a9d);
    }
`;

const MessageInput = Styled.textarea`
    background: rgba(255, 255, 255, 0.75);
    outline: none;
    border: none;
    margin: 12px 16px;
    color: #15023a;
    font-family: "Zen Kaku Gothic Antique";
    font-size: 16px;
    font-weight: 600;
    width: 360px;
    @media (max-width: 1023px) {
        width: 80vw;
    }
    height: 240px;
    resize: none;
    overflow: scroll;
`;

const Submit = Styled.div`
    margin: 0 auto;
`;

const MessageBg = Styled.div`
    background: url('https://user-images.githubusercontent.com/85221003/190644292-f8584039-a1df-455d-8905-e1c5eb6b04e7.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;
const Button = Styled.button`
    font-size: 24px;
    font-family: 'Pacifico';
    letter-spacing: 1.2px;
    text-transform: capitalize;
    overflow: visible;
    border-radius: 50px;
    position: relative;
    padding-right: 30px;
    background-color: #ECFBFF;
    border: 2px solid #A6E0EE;
    color: #5cb6f9;
    display: block;
    margin: auto;
    height: 54px;
    min-width: 180px;
    cursor: pointer;
    
    &:hover {
      background-color: #5cb6f9;
      color: #fff;
      
      svg {
        transform: rotate(10deg);
        transition: transform .15s;
        path {
            fill: #fff;
        }
      }
    }
    
    svg {
      position: absolute;
      top: 13px;
      right: 25px;
      height: 30px;
      width: auto;
      transition: transform .15s;
      
      path {
        fill: #5cb6f9;
      }
    }
    &.sent {
        background-color: #00b3e7;
        color: #fff;
        min-width: 160px;
        cursor: none;
        padding-right: 6px;
        svg {
            display: none;
        }
    }
    &.error {
        min-width: 220px;
        height: 60px;
        background-color: #e21b1b;
        color: #fff;
        svg {
            path {
                fill: #fff;
            }
        }
    }
    &.clicked {
      background-color: #00c4cc;
      border: 2px solid #cff5b3;
      color: #fff;
      padding-right: 6px;
      animation: bounce-in .3s;
      cursor: none;
      min-width: 220px;
      height: 60px;
      &::after {
        content: '...'
      }
  
      svg {
        animation: flyaway 1.3s linear;
        top: -80px;
        right: -1000px;
        
        path {
          fill: #00c4cc;
        }
      }
    }
`;

const Sent = Styled.img`
    width: 320px;
`;

export default memo(Contact);
