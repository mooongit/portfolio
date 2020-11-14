import React from 'react';
import '../styles/Title.css';
import {Button} from './Button';
import ReactTypingEffect from 'react-typing-effect';

export const Title = () => {
    return (
        <div className="title">
            <div className="title__initials">
                <p>M.M</p>
            </div>
            <div className="title__heading">
                <p className="title__heading--name">
                    <ReactTypingEffect staticText="Hello, I'm" text={["Mahnoor.", "UI/UX Designer"]} />
                </p>
                <p className="title__heading--description">UI/UX Designer / Graphic Designer</p>
            </div>
            <div className="title__action">
                <Button text="Scroll to see my work" className="title__button" />
            </div>
        </div>
    );
};
