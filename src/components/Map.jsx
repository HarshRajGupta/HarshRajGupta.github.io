import { memo } from 'react';
import Spinner from './Spinner';

function Map() {
	return (
		<div className="map-container">
			<Spinner test={'loading'} />
			<iframe
				title={`Map`}
				id={`map`}
				src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14968.565426264222!2d85.75219930746348!3d20.294415313716772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1663484238879!5m2!1sen!2sin`}
				referrerPolicy="no-referrer-when-downgrade"
				loading="lazy"
			></iframe>
		</div>
	);
}

export default memo(Map);
