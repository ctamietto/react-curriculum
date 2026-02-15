import { Typography, Stack, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

export default function TabsCompanies() {
    return (
        <div>
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
        </div>
    );
}