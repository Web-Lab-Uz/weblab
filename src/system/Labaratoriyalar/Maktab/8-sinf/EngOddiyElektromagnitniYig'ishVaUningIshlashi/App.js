import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Home from '../../../weblab/home/Home';
import HomeBody from './home/HomeBody';

export default function app() {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <Home /> 
            </Reveal>
            <HomeBody />
        </>
    )
}
