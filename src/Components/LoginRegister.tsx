import { Box, Button, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import '../App.css';
import React from 'react';
import { useStyle } from './RbStyles';
import { Formik, FormikProps } from 'formik';
import { useNavigate } from 'react-router-dom';

interface ILoginRegisterForm {
    username: string,
    password: string,
    name: string,
    email: string,
    phoneNumber: string,
    confirmPassword: string
}

export const LoginRegister = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyle();
    const navigate = useNavigate();
    
    return(
        <>
        <Formik
            initialValues={{} as ILoginRegisterForm}
            onSubmit={() => {}}
        >
        {({values, setValues}: FormikProps<ILoginRegisterForm>) => {
            return(
                <form>
                    <Box sx={{ width: '100%' }} className={classes.mainContainer}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={(e: any, index: number) => setValue(index)} aria-label="basic tabs example">
                                <Tab label="Sign in" {...a11yProps(0)} />
                                <Tab label="Sign up" {...a11yProps(1)} />   
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Box>
                                <TextField 
                                    label='Email' 
                                    style={{width: '100%'}}
                                    onChange={(e: any) => setValues({...values, username: e?.target?.value!})}
                                />
                                <TextField 
                                    className={classes.mt} 
                                    label='Password' 
                                    style={{width: '100%'}}
                                    onChange={(e: any) => setValues({...values, password: e?.target?.value!})}
                                />
                                <Button 
                                    className={[classes.actionButton, classes.mt].join(' ')}
                                    onClick={(e) => {if(values?.username === 'test@test.com' && values?.password === "123456") navigate('/resume')}}
                                >Sign in</Button>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Box>
                                <TextField 
                                    label='Name' 
                                    style={{width: '100%'}}
                                    onChange={(e) => setValues({...values, name: e?.currentTarget?.value!})}
                                />
                                <TextField 
                                    className={classes.mt} 
                                    label='Email' 
                                    style={{width: '100%'}}
                                    onChange={(e) => setValues({...values, email: e?.currentTarget?.value!})}
                                />
                                <TextField 
                                    className={classes.mt} 
                                    label='Phone number' 
                                    style={{width: '100%'}}
                                    onChange={(e) => setValues({...values, phoneNumber: e?.currentTarget?.value!})}
                                />
                                <TextField 
                                    className={classes.mt} 
                                    label='Password' 
                                    style={{width: '100%'}}
                                    onChange={(e) => setValues({...values, password: e?.currentTarget?.value})}
                                />
                                <TextField 
                                    className={classes.mt} 
                                    label='Confirm password' 
                                    style={{width: '100%'}}
                                    onChange={(e) => setValues({...values, confirmPassword: e?.currentTarget?.value})}
                                />
                                <Button className={[classes.actionButton, classes.mt].join(' ')}>Sign up</Button>
                            </Box>
                        </CustomTabPanel>
                    </Box>
                </form>
            )
        }}
        </Formik>
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