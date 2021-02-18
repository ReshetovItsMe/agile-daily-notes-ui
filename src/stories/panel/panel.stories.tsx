import React from 'react';
import AnPanel, { AnPanelProps } from '../../components/panel';

export default {
    title: 'Panel',
    component: AnPanel,
    argTypes: {
        anchor: {
            control: {
                type: 'inline-radio',
                options: ['left', 'right']
            },
            defaultValue: 'left',
            table: {
                type: { summary: 'Side from which the drawer will appear.' },
                defaultValue: { summary: 'left' }
            }
        },
        onSaveClick: {
            action: 'clicked',
            table: {
                type: { summary: 'Event triggers on save button click' }
            }
        },
        onAvatarClick: {
            action: 'clicked',
            table: {
                type: { summary: 'Event triggers on avatar click' }
            }
        },
        onDeleteClick: {
            action: 'clicked',
            table: {
                type: { summary: 'Event triggers on delete button click' }
            }
        },
        onCalendarClick: {
            action: 'clicked',
            table: {
                type: { summary: 'Event triggers on calendar button click' }
            }
        },
        onSettingsClick: {
            action: 'clicked',
            table: {
                type: { summary: 'Event triggers on settings button click' }
            }
        },
        onLogoutClick: {
            action: 'clicked',
            table: {
                type: { summary: 'Event triggers on logout button click' }
            }
        }
    }
};

export const PanelStory = (args: AnPanelProps) => <AnPanel {...args} />;
