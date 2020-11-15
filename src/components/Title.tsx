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
                    <ReactTypingEffect
                        staticText="Hello, I'm"
                        text={['Mahnoor.', 'UI/UX Designer']}
                        speed={200}
                        eraseSpeed={200}
                        typingDelay={1000}
                        eraseDelay={1000}
                        displayTextRenderer={(text) => {
                            return (
                                <>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span key={key} className="highlight">
                                                {char}
                                            </span>
                                        );
                                    })}
                                </>
                            );
                        }}
                    />
                </p>
                <p className="title__heading--description">UI/UX Designer / Graphic Designer</p>
            </div>
            <div className="title__action">
                <Button text="Scroll to see my work" className="title__button" />
            </div>
        </div>
    );
};
