import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

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
      <p class="footer-info">© 2025 Airbnb, Inc.  ·  Terms ·  Sitemap  ·  Privacy  ·  Your Privacy Choices</p>
    </Box>
  );
}