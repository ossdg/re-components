import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../elements/Button/src';

/**
 * The only true button.
 */
function Card({ color, size }) {
	const styles = {
		color,
		fontSize: '20px',
	};

	return (
		<div className="card" style={styles}>
		Card is something
		<Button />
		</div>
	);
}

export default Card
