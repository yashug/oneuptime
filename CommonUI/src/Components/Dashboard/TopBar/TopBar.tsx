import React, { ReactElement } from 'react';
import Account from '../Account/Account';
import CurrentProject from '../ProjectPicker/CurrentProject';
import SearchBar from './SearchBar/SearchBar';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TopBar.scss';
import CreateButton from '../Create/CreateButton';

const TopBar = (): ReactElement => {
    return (
        <div className="root">
            <header>
                <CurrentProject />
                <SearchBar />
                <div>
                    <CreateButton />
                    <div>Help</div>
                    <div>Notifications</div>
                    <FontAwesomeIcon icon={faCog} />
                    <Account />
                </div>
            </header>
            <nav></nav>
        </div>
    );
};

export default TopBar;
