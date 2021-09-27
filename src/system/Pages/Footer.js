import React from 'react';
import { Favorite } from '@material-ui/icons';
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <p>&copy; Hojiakbar Turotov 2021 - {new Date().getFullYear()} || Made with <Favorite /> </p>
        </div>
    )
}
