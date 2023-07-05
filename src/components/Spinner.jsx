import { memo } from 'react';
import PropTypes from 'prop-types';

const  Spinner = ({ text }) => {
	return (
		<div className="spinner-container">
			<div className="spinner">
				{text}
				<div className="spinner-sector spinner-sector-red"></div>
				<div className="spinner-sector spinner-sector-blue"></div>
				<div className="spinner-sector spinner-sector-green"></div>
			</div>
		</div>
	);
}

Spinner.propTypes = {
	text: PropTypes.string,
};

Spinner.defaultProps = {
	text: '',
}

export default memo(Spinner);
