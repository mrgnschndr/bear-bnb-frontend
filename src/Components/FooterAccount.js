import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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
      <Grid container spacing={8} columns={3}>
        <Grid size={1}>
            <Item class="footer-menu">
                <ul class="footer-list">
                    <li>Support</li>
                    <li>Help Center</li>
                    <li>Get help with a safety issue</li>
                    <li>BearCover</li>
                    <li>Anti-discrimination</li>
                    <li>Disability support</li>
                    <li>Cancellation options</li>
                    <li>Report neighborhood concern</li>
                </ul>
            </Item>
        </Grid>
        <Grid size={1}>
            <Item class="footer-menu">
                <ul class="footer-list">
                    <li>Hosting</li>
                    <li>Bearbnb your home</li>
                    <li>BearCover for Hosts</li>
                    <li>Hosting resources</li>
                    <li>Community forum</li>
                    <li>Hosting responsibly</li>
                    <li>Bearbnb-friendly apartments</li>
                    <li>Join a free Hosting class</li>
                    <li>Find a co-host</li>
                </ul>
            </Item>
        </Grid>
        <Grid size={1}>
            <Item class="footer-menu">
            <ul class="footer-list">
                <li>Bearbnb</li>
                <li>Newsroom</li>
                <li>New features</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Gift cards</li>
                <li>Bearbnb.org emergency stays</li>
            </ul>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}