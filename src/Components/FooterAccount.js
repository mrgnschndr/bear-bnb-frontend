import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FooterAccount() {
  return (
    <Box class="footer" sx={{ 
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
         }}>
      <Grid container spacing={2} columns={3} sx={{
        width: '60%',
        margin: 'auto',
         }}>
        <Grid size={1}>
            <Item class="footer-menu">
                <ul class="footer-list">
                    <li>Support</li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Get help with a safety issue</a></li>
                    <li><a href="#">BearCover</a></li>
                    <li><a href="#">Anti-discrimination</a></li>
                    <li><a href="#">Disability support</a></li>
                    <li><a href="#">Cancellation options</a></li>
                    <li><a href="#">Report neighborhood concern</a></li>
                </ul>
            </Item>
        </Grid>
        <Grid size={1}>
            <Item class="footer-menu">
                <ul class="footer-list">
                    <li>Hosting</li>
                    <li><a href="#">Bearbnb your home</a></li>
                    <li><a href="#">BearCover for Hosts</a></li>
                    <li><a href="#">Hosting resources</a></li>
                    <li><a href="#">Community forum</a></li>
                    <li><a href="#">Hosting responsibly</a></li>
                    <li><a href="#">Bearbnb-friendly apartments</a></li>
                    <li><a href="#">Join a free Hosting class</a></li>
                    <li><a href="#">Find a co-host</a></li>
                </ul>
            </Item>
        </Grid>
        <Grid size={1}>
            <Item class="footer-menu">
            <ul class="footer-list">
                <li>Bearbnb</li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">New features</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Gift cards</a></li>
                <li><a href="#">Bearbnb.org emergency stays</a></li>
            </ul>
            </Item>
        </Grid>
      </Grid>
      <Divider />
      <div class="footer-small">
        <div class="footer-info">
          <p>© 2025 Airbnb, Inc.  ·  Terms ·  Sitemap  ·  Privacy  ·  Your Privacy Choices</p>
          <EditAttributesIcon fontSize="small" sx={{
            fill: "rgb(0, 102, 255)", 
            alignSelf: "center",
            marginLeft: "4px",
          }}/>
        </div>
        <p class="footer-extra">
            <LanguageIcon fontSize="small" sx={{
              alignSelf: "center",
              marginLeft: "12px",
              marginRight: "0",
            }}/> 
            <p>English (US)</p>
            <AttachMoneyIcon fontSize="small" sx={{
              alignSelf: "center",
              marginLeft: "12px",
              marginRight: "0",
            }}/>
            <p>USD</p>
            <FacebookIcon fontSize="small" sx={{
              alignSelf: "center",
              margin: "0 8px 0 12px"
            }}/>
            <TwitterIcon fontSize="small" sx={{
              alignSelf: "center",
              margin: "0 8px"
            }}/>
            <InstagramIcon fontSize="small" sx={{
              alignSelf: "center",
              margin: "0 8px"
            }}/>
        </p>
      </div>
    </Box>
  );
}