import React from 'react';

import { Box, Typography ,Stack,  Link, Tabs, Tab } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

import HeaderLeftColumn from './HeaderLeftColumn';

export default function LeftColumn() {
    const [valueTabs, setValueTabs] = React.useState(0);

    const handleChangeTabs = (event, newValue) => {
        setValueTabs(newValue);
    };

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
                <Tabs variant="fullWidth" value={valueTabs} onChange={handleChangeTabs} centered>
                    <Tab label="Companies" />
                    <Tab label="Education and training" />
                    <Tab label="Skills" />
                </Tabs>
                {valueTabs === 0 && <div>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        sx={{
                            width: '100%',      // Full container width
                            flexGrow: 1,        // Expand to fill parent space
                            marginTop: 5
                        }}
                    >
                        <Typography sx={{ textAlign: 'left', fontWeight: 700 }} fontSize={25} >
                            Team System
                        </Typography>
                        <Typography sx={{ textAlign: 'right', color: '#032FCE', fontWeight: 400 }} fontSize={16} >
                            ( 20/06/2024 - Present )
                        </Typography>
                    </Stack>
                    <Typography sx={{ textAlign: 'left', fontStyle: 'italic' }} fontSize={20} >
                        Software Engineer , Softare Developer , System Engineer
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="flex-start"
                    >
                        <LinkIcon sx={{ color: "#032FCE" }} ></LinkIcon>
                        <Link href="https://www.teamsystem.com/" underline="hover" fontSize={20}  >
                            https://www.teamsystem.com/
                        </Link>
                    </Stack>
                </div>}
                {valueTabs === 1 && <div>Education and training</div>}
                {valueTabs === 2 && <div>Skills</div>}
            </Box>
        </div>
    );
}
