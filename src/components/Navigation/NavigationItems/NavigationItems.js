import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Làm Bánh</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Lịch sử Orders</NavigationItem> : null}
        {!props.isAuthenticated ? <NavigationItem link="/auth">Đăng ký</NavigationItem> : <NavigationItem link="/logout">Đăng xuất</NavigationItem>}
    </ul>
);

export default navigationItems;