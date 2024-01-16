import { Fragment } from "react"
import bgImage from '../images/header_image.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Bon Appetit</h1>
            <HeaderCartButton onClick={props.onShowCart}>
            </HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={bgImage} alt="Taste full of happiness"></img>
        </div>    
    </Fragment>);

    
};

export default Header;

