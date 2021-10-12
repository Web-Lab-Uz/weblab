import React from 'react'
import Swing from 'react-reveal/Swing';
import Nav from '../Nav';
import Section1Carusel from './Section1_Carusel';
import './home.scss';


export default function Home() {
    return (
        <>
            <Swing>
                <Nav />
            </Swing>
            <Section1Carusel />
        </>         
    )
}
