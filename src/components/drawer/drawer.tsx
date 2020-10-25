import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

export interface AnDrawerProps {
    anchor: 'left' | 'top' | 'right' | 'bottom' | undefined;
    children?: ReactNode;
}

const AnDrawer: React.FC<AnDrawerProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <AnDrawerStyled variant="permanent" {...restProps}>
            {children}
        </AnDrawerStyled>
    );
};

const AnDrawerStyled = styled(Drawer)``;

AnDrawer.displayName = 'AnDrawer';

export default AnDrawer;
