import { memo } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DragDownButton = ({ link, isdark }) => {
	return (
		<Link
			href={link}
			isdark={isdark}
		>
			<KeyboardArrowDownIcon
				sx={{
					width: 64,
					height: 64,
					animation: 'BottomUpDown 1.5s 0s infinite',
				}}
			/>
		</Link>
	);
}

DragDownButton.defaultProps = {
	link: '#',
	isdark: true,
};

DragDownButton.propTypes = {
    link: PropTypes.string,
    isdark: PropTypes.bool,
}

const Link = styled.a`
	display: flex;
	align-items: center;
	position: absolute;
	height: fit-content;
	width: fit-content;
	cursor: pointer;
	bottom: 0px;
	user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	@keyframes BottomUpDown {
		0% {
			bottom: 0px;
		}
		50% {
			bottom: 20px;
		}
		100% {
			bottom: 0px;
		}
	}
	margin: 0 calc(50% - 32px);
	color: ${({ isdark }) => (isdark ? '#fff' : '#15023a')};
	z-index: 10;
`;
export default memo(DragDownButton);
