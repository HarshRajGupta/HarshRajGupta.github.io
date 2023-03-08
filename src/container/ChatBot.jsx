import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function ChatBot() {
	return (
		<>
			<TawkMessengerReact
				propertyId={process.env.REACT_APP_TAWK_PROPERTY_ID}
				widgetId={process.env.REACT_APP_TAWK_WIDGET_ID}
			/>
		</>
	);
}

export default ChatBot;
