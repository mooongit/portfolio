import React from 'react';
import '../styles/About.css';
import {Button} from './Button';

export const About = () => {
    return (
        <div id="#about" className="about">
            <div className="about__title">
                <span className="title-box">About Me</span>
            </div>
            <div className="about__content">
                <div className="about__text">
                    <div className="about__description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi explicabo vitae
                            itaque ipsam eos numquam, harum natus quisquam dolores totam, cupiditate asperiores fuga
                            fugit id aliquam non minima nobis?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Facere omnis, commodi quidem rerum ab inventore tempore debitis, assumenda iusto eius ipsum,
                            quibusdam a vero nulla eaque culpa itaque amet aut. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima deserunt fugiat ipsa in architecto. Officiis nostrum incidunt
                            voluptatum dolorum dolores! Atque nulla commodi sint illo rem? Nesciunt ab voluptas ea!
                        </p>
                    </div>
                    <div className="about__buttons">
                        <Button text="Hire me" className="primary" />
                        <Button text="Download Resume" />
                    </div>
                </div>
                <div className="about__image"></div>
            </div>
        </div>
    );
};
