import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import AnDrawer, { AnDrawerType } from '../../components/drawer';

export default {
    title: 'Drawer',
    component: AnDrawer,
    argTypes: {
        anchor: { control: 'text' }
    }
};

export const DrawerStory = (args: AnDrawerType) => (
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
