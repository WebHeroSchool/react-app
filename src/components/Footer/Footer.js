import React from 'react'; 
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({count}) => (<div className={styles.footer}>Всего дел:{count}</div>);

Footer.defaultProps = {
    count: 0
};
Footer.propTypes = {
    count: PropTypes.number.isRequired
};


export default Footer;