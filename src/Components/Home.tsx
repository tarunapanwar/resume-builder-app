import { Box } from "@mui/material";
import React from "react";
import { MainMenu } from "./MainMenu";

export const Home = () => {
    return (
        <Box component='div' sx={{ display: 'block', background: '#ddd   ' }}>
            <MainMenu />
            <Box sx={{
                display: 'grid',
                gap: 1,
                gridTemplateColumns: 'repeat(2, 1fr)', width: '85%', margin: 'auto'
            }}>
                <Box component="div" sx={{ display: 'block', border: '1px solid red', width: '100%', padding: '55px 15px' }}>
                    <Box></Box>
                </Box>
                <Box component="div" sx={{ display: 'block', border: '1px solid red', width: '100%', padding: '55px 15px' }}>the dog</Box>
            </Box>
        </Box>
    )
}