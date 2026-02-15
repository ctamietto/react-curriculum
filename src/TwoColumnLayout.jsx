import React from 'react';

// import MUI material widgets
import { Grid } from '@mui/material';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

//const TwoColumnLayout = () => {
export default function TwoColumnLayout() {

    return (
        <Grid container spacing={0}>
            <Grid size={{ xs: 12, sm: 2 }}>
                <RightColumn></RightColumn>
            </Grid>
            <Grid size={{ xs: 12, sm: 10 }}>
                <LeftColumn></LeftColumn>
            </Grid>
        </Grid >
    );
};

//export default TwoColumnLayout;
