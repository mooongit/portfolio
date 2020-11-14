import React from 'react';
import '../styles/Header.css';
import {Button} from './Button';
import {Link} from './Link';
import {Title} from './Title';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <Button text="Download Resume" className="header__button--hollow" />
                <Button text="Hire Me" className="header__button" />
            </div>
            <div className="header__middle">
                <Title />
            </div>
            <div className="header__right">
                <Link href="#" text="About" className="header__link header__link--top" />
                <Link href="#" text="Portfolio" className="header__link" />
            </div>
        </header>
    );
};
