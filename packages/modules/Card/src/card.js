import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../../lib';

/**
 * Card
 */
export default class Card extends React.PureComponent {


  static propTypes = {
		/** use default style class names */
		defaultClasses: PropTypes.bool,
	}

	static defaultProps = {
		defaultClasses: true
	}

  render() {

    let {defaultClasses, children, ...other} = this.props;
    let classes = defaultClasses ? 'card' : '';

    other.className = classNames(other.className, classes)

    return <div {...other}>
      {children}
    </div>
  }
}
