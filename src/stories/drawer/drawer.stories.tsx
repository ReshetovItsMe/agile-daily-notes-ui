import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import AnDrawer, { AnDrawerProps } from '../../components/drawer';

export default {
    title: 'Drawer',
    component: AnDrawer,
    argTypes: {
        anchor: {
            control: {
                type: 'inline-radio',
                options: ['left', 'right', 'bottom', 'top']
            },
            defaultValue: 'left',
            table: {
                type: { summary: 'Side from which the drawer will appear.' },
                defaultValue: { summary: 'left' }
            }
        }
    }
};

export const DrawerStory = (args: AnDrawerProps) => (
    <AnDrawer {...args}>
        <List>
            <ListItem button>
                <MailIcon />
            </ListItem>
            <ListItem button>
                <InboxIcon />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button>
                <MailIcon />
            </ListItem>
            <ListItem button>
                <InboxIcon />
            </ListItem>
        </List>
    </AnDrawer>
);

DrawerStory.args = {
    anchor: 'left'
};
