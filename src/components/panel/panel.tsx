import React from 'react';
import styled from 'styled-components';
import { Drawer } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export interface AnPanelComponentProps {
    anchor: 'left' | 'right' | undefined;
    onAvatarClick?: () => void;
    onSaveClick: () => void;
    onDeleteClick: () => void;
    onCalendarClick: () => void;
    onSettingsClick: () => void;
    onLogoutClick: () => void;
}

const AnPanel = ({
    onAvatarClick,
    onSaveClick,
    onDeleteClick,
    onCalendarClick,
    onSettingsClick,
    onLogoutClick,
    ...restProps
}: AnPanelComponentProps) => {
    return (
        <Drawer variant="permanent" {...restProps}>
            <AccountBlock>
                <ListItem button onClick={onAvatarClick}>
                    <AccountCircleIcon />
                </ListItem>
            </AccountBlock>
            <MainControlsBlock>
                <ListItem button onClick={onSaveClick}>
                    <SaveIcon />
                </ListItem>
                <ListItem button onClick={onDeleteClick}>
                    <DeleteIcon />
                </ListItem>
                <ListItem button onClick={onCalendarClick}>
                    <InsertInvitationIcon />
                </ListItem>
            </MainControlsBlock>
            <ControlsBlock>
                <ListItem button onClick={onSettingsClick}>
                    <SettingsIcon />
                </ListItem>
                <ListItem button onClick={onLogoutClick}>
                    <ExitToAppIcon />
                </ListItem>
            </ControlsBlock>
        </Drawer>
    );
};

const AccountBlock = styled(List)`
    color: #3e3afa;
    padding: 0;
    margin-bottom: 60px;
`;
const MainControlsBlock = styled(List)`
    color: #3e3afa;
`;
const ControlsBlock = styled(List)`
    color: #c1c1c1;
    margin-top: auto;
`;

export default AnPanel;
