import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActionArea, Stack } from '@mui/material';
import tc from '../public/assets/images/tc.png';

const TwoColumnLayout = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 2 }}>
                <div style={{ backgroundColor: '#032FCE' , height: '98vh', padding: '5px' ,borderRadius: 3 }}  >
                    <Stack spacing={2} style={{ padding: '3px' }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={tc}
                                    alt="foto"
                                    sx={{ borderRadius: 2 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Claudio Tamietto
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Senior Developer with
                                        consolidated experience both as
                                        Analyst,Developer and System
                                        Administrator                                    
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 10 }}>
                <div style={{ backgroundColor: 'green', height: '98vh' }} >size=10</div>
            </Grid>
        </Grid>
    );
};

export default TwoColumnLayout;
