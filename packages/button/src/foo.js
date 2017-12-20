import React from 'react';
import PropTypes from 'prop-types';

/**
 * The only true button.
 */
function ProButton({ color, size }) {
	const styles = {
		color,
		fontSize: '20px',
	};

	return (
		<div className="button" style={styles}>
		Hello
		</div>
	);
}

export default ProButton
