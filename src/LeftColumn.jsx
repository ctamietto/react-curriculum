import { Box, Typography ,Stack,  Link, Tabs, Tab } from '@mui/material';

import HeaderLeftColumn from './HeaderLeftColumn';
import TabsLeftColumn from './TabsLeftColumn';

export default function LeftColumn() {

    return (
        <div>
            <Box sx={{
                px: 2,
                py: 2,
                width: '97%',
                border: '1px solid transparent',
                background: 'linear-gradient(white, white) padding-box,linear- gradient(45deg, #bdc3c7, #95a5a6) border-box',
                boxShadow: '0 10px 30px rgba(117, 128, 135, 0.3)',
                borderRadius: 0,
                height: '95vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <HeaderLeftColumn></HeaderLeftColumn>
                <TabsLeftColumn></TabsLeftColumn>
            </Box>
        </div>
    );
}
