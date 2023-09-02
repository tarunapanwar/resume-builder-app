import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import {useStyle} from './RbStyles';
import { LoginRegister } from './LoginRegister';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    return (
        <>  
            <AppBar position="fixed" className={classes.navBar}>
                <Toolbar className={classes.spaceBetweenFlexbox}>
                    <Typography className={classes.logo}>
                        <span style={{fontSize: 24}}>R</span>esume <span style={{fontSize: 24}}>B</span>uilder 
                    </Typography>
                    <Button className={classes.actionButton}>Login</Button>
                </Toolbar>
            </AppBar>
            <Box>
                <LoginRegister />
            </Box>
        </>
    )
}