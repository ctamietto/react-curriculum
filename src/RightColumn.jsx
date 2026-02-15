import { Grid, Typography, Card, CardMedia, CardContent, CardActionArea, Link, Stack } from '@mui/material'

// import image 
import tc from '../public/assets/images/tc.png';

// import configuration
import { appConfig } from './Config'

// import material icons
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function RightColumn() {
    return( <div style={{ backgroundColor: appConfig.theme.colors.primaryColor, height: '97vh', padding: '5px', borderRadius: 0, my: 0 }}  >
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
    );
}