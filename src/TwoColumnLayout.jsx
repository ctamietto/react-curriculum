import React from 'react';

// import MUI material widgets
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActionArea, Stack, Rating, Link, Tabs, Tab } from '@mui/material';

// import image 
import tc from '../public/assets/images/tc.png';

// import material icons
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';

// import configuration
import { appConfig } from './Config'

//const TwoColumnLayout = () => {
export default function TwoColumnLayout() {
    const [valueTabs, setValueTabs] = React.useState(0);

    const handleChangeTabs = (event, newValue) => {
        setValueTabs(newValue);
    };

    return (
        <Grid container spacing={0}>
            <Grid size={{ xs: 12, sm: 2 }}>
                <div style={{ backgroundColor: appConfig.theme.colors.primaryColor, height: '97vh', padding: '5px', borderRadius: 0 , my:0 }}  >
                    <Stack spacing={2} style={{ padding: '3px' }}>
                        <Card sx={{ maxWidth: 345 }} elevation={0} >
                            <CardActionArea style={{ backgroundColor: appConfig.theme.colors.primaryColor }} >
                                <CardMedia
                                    component="img"
                                    image={tc}
                                    alt="foto"
                                    sx={{ borderRadius: 2 }}
                                />
                                <CardContent sx={{ backgroundColor: appConfig.theme.colors.primaryColor }} >
                                    <Typography fontSize={30} fontWeight={700} component="div" color="common.white" >
                                        Claudio Tamietto
                                    </Typography>
                                    <Typography fontSize={20} fontWeight={400} color="common.white">
                                        Senior Developer with
                                        consolidated experience both as
                                        Analyst,Developer and System
                                        Administrator
                                    </Typography>
                                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={2} sx={{ pt: 1 }} >
                                        <Grid size={{ xs: 2, sm: 2 }}  >
                                            <HomeIcon sx={{ color: appConfig.theme.colors.inversePrimaryColor }} ></HomeIcon>
                                        </Grid>
                                        <Grid size={{ xs: 10, sm: 10 }}>
                                            <Typography fontSize={16} color="common.white" >Corso Siracusa 183, Turin, 10137 Italy</Typography>
                                        </Grid>
                                        <Grid size={{ xs: 2, sm: 2 }}  >
                                            <CakeIcon sx={{ color: appConfig.theme.colors.inversePrimaryColor }} ></CakeIcon>
                                        </Grid>
                                        <Grid size={{ xs: 10, sm: 10 }}>
                                            <Typography fontSize={16} color="common.white" >19/06/1963</Typography>
                                        </Grid>
                                        <Grid size={{ xs: 2, sm: 2 }}  >
                                            <PhoneIcon sx={{ color: appConfig.theme.colors.inversePrimaryColor }} ></PhoneIcon>
                                        </Grid>
                                        <Grid size={{ xs: 10, sm: 10 }}>
                                            <Typography fontSize={16} color="common.white" >350 0719909</Typography>
                                        </Grid>
                                        <Grid size={{ xs: 2, sm: 2 }}  >
                                            <MailIcon sx={{ color: appConfig.theme.colors.inversePrimaryColor }} ></MailIcon>
                                        </Grid>
                                        <Grid size={{ xs: 10, sm: 10 }}>
                                            <Typography fontSize={16} color="common.white" >c.tamietto@gmail.com</Typography>
                                        </Grid>
                                        <Grid size={{ xs: 2, sm: 2 }}  >
                                            <LinkedInIcon sx={{ color: appConfig.theme.colors.inversePrimaryColor }} ></LinkedInIcon>
                                        </Grid>
                                        <Grid size={{ xs: 10, sm: 10 }}>
                                            <Typography fontSize={16} color="common.white" >
                                                <Link href="https://www.linkedin.com/in/claudio-tamietto/" underline="hover" fontSize={16} color="common.white" >
                                                    claudio-tamietto
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 10 }}>
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
                    <div>
                        <Typography
                            fontSize={20}
                            sx={{
                                my: 0,
                                mx: 0,
                                px: 0,
                                py: 0,
                            }}
                        >
                            I have extensive experience with various programming languages
                            including PHP , Python , Java , C# , Javascript and C . <br></br>I worked with the
                            most popular relational databases ( Oracle , Mysql , Microsoft SQL
                            Server , Postgresql ) . <br></br>
                            I have a degree in Information Sciences ( University of Turin ) and I
                            have 36 years of experience . <br></br>
                            I am very interested and excited about open source software .
                        </Typography>
                    </div>
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
                {/*
                <Box sx={{ '& > legend': { mt: 2 } }}>
                    <Typography component="legend">Controlled</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <Typography component="legend">Uncontrolled</Typography>
                    <Rating
                        name="simple-uncontrolled"
                        onChange={(event, newValue) => {
                            console.log(newValue);
                        }}
                        defaultValue={2}
                    />
                    <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={value} readOnly />
                    <Typography component="legend">Disabled</Typography>
                    <Rating name="disabled" value={value} disabled />
                    <Typography component="legend">No rating given</Typography>
                    <Rating name="no-value" value={null} />
                </Box>
                */}
            </Grid>
        </Grid >
    );
};

//export default TwoColumnLayout;
