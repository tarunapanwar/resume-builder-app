import { Box, Button, Link, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useStyle } from './RbStyles';

export const LoginRegister = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyle();
    
    return(
        <>
            <Box sx={{ width: '100%' }} className={classes.mainContainer}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={(e: any, index: number) => setValue(index)} aria-label="basic tabs example">
                        <Tab label="Sign in" {...a11yProps(0)} />
                        <Tab label="Sign up" {...a11yProps(1)} />   
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box>
                        {/* <Typography className={classes.formTitle}>Login</Typography> */}
                        <TextField label='Email' style={{width: '100%'}}/>
                        <TextField className={classes.mt} label='Password' style={{width: '100%'}}/>
                        <Button className={[classes.actionButton, classes.mt].join(' ')}>Sign in</Button>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box>
                        {/* <Typography className={classes.formTitle}>Register</Typography> */}
                        <TextField label='Name' style={{width: '100%'}}/>
                        <TextField className={classes.mt} label='Email' style={{width: '100%'}}/>
                        <TextField className={classes.mt} label='Phone number' style={{width: '100%'}}/>
                        <TextField className={classes.mt} label='Password' style={{width: '100%'}}/>
                        <TextField className={classes.mt} label='Confirm password' style={{width: '100%'}}/>
                        <Button className={[classes.actionButton, classes.mt].join(' ')}>Sign up</Button>
                    </Box>
                </CustomTabPanel>
            </Box>
            {/* <Box className={classes.mainContainer}>
                {!register ? 
                <Box>
                    <Typography className={classes.formTitle}>Login</Typography>
                    <TextField label='Email'/>
                    <TextField className={classes.mt} label='Password'/>
                    <Button className={[classes.actionButton, classes.mt].join(' ')}>Sign in</Button>
                </Box> : 
                <Box>
                    <Typography className={classes.formTitle}>Register</Typography>
                    <TextField label='Name'/>
                    <TextField className={classes.mt} label='Email'/>
                    <TextField className={classes.mt} label='Phone number'/>
                    <TextField className={classes.mt} label='Password'/>
                    <TextField className={classes.mt} label='Confirm password'/>
                    <Button className={[classes.actionButton, classes.mt].join(' ')}>Sign up</Button>
                </Box>}
            </Box> */}
        </>
    )
}

interface ICustomPanel {
    children: any,
    value: number,
    index: number
}

const CustomTabPanel = ({children, value, index}: ICustomPanel) => {
    return(
        <>
            {value === index && <Box>{children}</Box>}
        </>
    )
}

const a11yProps = (index: number) => {
    return{
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}