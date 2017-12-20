import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from './../../../lib';

/**
 * Button
 */
export default class Button extends React.PureComponent {

  static propTypes = {
		/** use default style class names */
		defaultClasses: PropTypes.bool,
	}

	static defaultProps = {
		defaultClasses: true
	}

	render() {
		let {
			defaultClasses,
			children,
			...other
		} = this.props;

  	let classes = !defaultClasses ? '' : 'btn';

		other.className = classNames(other.className, classes)

		return <button { ...other
			} > {
				children
			} <
			/button>
	}
}
