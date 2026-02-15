import React from 'react';

import { Tabs, Tab } from '@mui/material';

import TabsCompanies from './TabCompanies';

export default function TabsLeftColumn() {
    const [valueTabs, setValueTabs] = React.useState(0);

    const handleChangeTabs = (event, newValue) => {
        setValueTabs(newValue);
    };

    return (
        <div>
            <Tabs variant="fullWidth" value={valueTabs} onChange={handleChangeTabs} centered>
                <Tab label="Companies" />
                <Tab label="Education and training" />
                <Tab label="Skills" />
            </Tabs>
            {
                valueTabs === 0 && <TabsCompanies></TabsCompanies> 
            }
            {valueTabs === 1 && <div>Education and training</div>}
            {valueTabs === 2 && <div>Skills</div>}
        </div>
    );
}