import React from 'react';
import AnCard, { AnCardProps } from '../../components/card';

export default {
    title: 'Card',
    component: AnCard,
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
                options: ['outlined', 'elevation']
            },
            defaultValue: 'elevation',
            table: {
                type: { summary: 'The variant to use.' },
                defaultValue: { summary: 'elevation' }
            }
        },
        component: {
            control: 'text',
            defaultValue: 'div',
            table: {
                type: {
                    summary:
                        'The component used for the root node. Either a string to use a HTML element or a component.'
                },
                defaultValue: { summary: 'div' }
            }
        },
        elevation: {
            control: 'number',
            defaultValue: 1,
            table: {
                type: {
                    summary:
                        'Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.'
                },
                defaultValue: { summary: 1 }
            }
        },
        square: {
            control: 'boolean',
            defaultValue: false,
            table: {
                type: { summary: 'If true, rounded corners are disabled.' },
                defaultValue: { summary: false }
            }
        }
    }
};

export const CardStory = ({
    number,
    title,
    description,
    ...args
}: AnCardProps) => (
    <AnCard
        number={1}
        title="Test task"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
        {...args}
    />
);

CardStory.args = {
    variant: 'elevation',
    component: 'div',
    elevation: 1,
    square: false
};
