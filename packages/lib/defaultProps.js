/**
 * Default prop types
 */

import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'react-prop-types/lib/elementType';

let DefaultProps = () => {
    return <noscript />
};

DefaultProps.propTypes = {
    /**
     * Children nodes
     */
    children: PropTypes.node,
    /**
     * Use other component>
     */
    component: elementType,
    /**
     * Apply default classes
     */
    defaultClasses: PropTypes.bool,
    /**
     * Additional classes
     */
    className: PropTypes.string
};

DefaultProps.defaultProps = {
    component: 'div',
    defaultClasses: true
};

export default DefaultProps;
