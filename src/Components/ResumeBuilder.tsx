import { Box, Button, Divider, TextField } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useStyle } from './RbStyles';

interface IWorkExperience {
    detail: string,
    from: string,
    to: string,
    description: string
}

interface IEducation {
    institute: string,
    year: string,
    degree: string,
    branch: string
}

export const ResumeBuilder = () => {
    const [page, setPage] = React.useState<number>(1);
    const classes = useStyle();

    const changePage = (page: number) => {
        switch (page) {
            case 1: return <PersonalDetails />
            case 2: return <WorkExperience />
            case 3: return <EducationDetails />
        }
    }

    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.leftContainer}>
                    <Box className={classes.pt}>
                        <Box className={classes.heading}>{page === 1 ? 'Personal details' : page === 2 ? 'Work experience' : 'Education details'}</Box>
                        <Box>
                            {changePage(page)}
                            <Box className={classes.flexBox} style={{ justifyContent: 'end' }}>
                                <Button variant="contained" color="primary" className={[classes.mt, classes.cancelButton].join(' ')}
                                    onClick={(e) => {
                                        setPage(pre => pre - 1);
                                    }}>{page !== 1 ? 'Back' : 'Cancel'}</Button>
                                <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}
                                    onClick={(e) => {
                                        setPage(next => next + 1);
                                    }}>{page !== 3 ? 'Next' : 'Submit'}</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export const PersonalDetails = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.label}>Name</Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='First name' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Middle name' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Last name' /></Box>
            </Box>
            <Box className={[classes.label, classes.paddingTop].join('  ')}>Address</Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Building' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Street' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='City' /></Box>
            </Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='State' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Country' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Postcode' /></Box>
            </Box>
            <Box className={[classes.label, classes.paddingTop].join('  ')}>Contact details</Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Phone no' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Email' /></Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Linkedin' /></Box>
            </Box>
            <Box className={[classes.label, classes.paddingTop].join('  ')}>About me</Box>
            <Box className={classes.textFieldStyle} style={{ width: '100%' }}>
                <TextField label='Abount me' style={{ width: '98%', margin: 'auto' }} />
            </Box>
            {/* <Box className={classes.flexBox} style={{ justifyContent: 'end' }}>
                <Button variant="contained" color="primary" className={[classes.mt, classes.cancelButton].join(' ')}>Cancel</Button>
                <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}>Next</Button>
            </Box> */}
            {/* <Box className={classes.container}>
                <Box className={classes.leftContainer}>
                    <Box className={classes.pt}>
                        <Box className={classes.heading}>Personal details</Box>
                        <Box className={classes.label}>Name</Box>
                        <Box className={classes.flexBox}>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='First name' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Middle name' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Last name' /></Box>
                        </Box>
                        <Box className={[classes.label, classes.paddingTop].join('  ')}>Address</Box>
                        <Box className={classes.flexBox}>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Building' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Street' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='City' /></Box>
                        </Box>
                        <Box className={classes.flexBox}>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='State' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Country' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Postcode' /></Box>
                        </Box>
                        <Box className={[classes.label, classes.paddingTop].join('  ')}>Contact details</Box>
                        <Box className={classes.flexBox}>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Phone no' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Email' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}><TextField label='Linkedin' /></Box>
                        </Box>
                        <Box className={[classes.label, classes.paddingTop].join('  ')}>About me</Box>
                        <Box className={classes.textFieldStyle} style={{ width: '100%' }}>
                            <TextField label='Abount me' style={{ width: '98%', margin: 'auto' }} />
                        </Box>
                        <Box className={classes.flexBox} style={{ justifyContent: 'end' }}>
                            <Button variant="contained" color="primary" className={[classes.mt, classes.cancelButton].join(' ')}>Cancel</Button>
                            <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}>Next</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.rightContainer}></Box>
            </Box> */}
        </>
    )
}

export const WorkExperience = () => {
    const [workExp, setWorkExp] = React.useState<IWorkExperience[]>([{ detail: '', from: '01/01/2023', to: '02/02/2024', description: '' }]);
    const classes = useStyle();
    return (
        <>
            {workExp?.map((itm: IWorkExperience, index: number) => {
                return (
                    <>
                        <Box className={classes.flexBox} style={{ justifyContent: index === workExp?.length - 1 ? 'space-between' : 'end', padding: '15px 0' }}>
                            {index === workExp?.length - 1 && <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}
                                onClick={(e: any) => {
                                    setWorkExp([...workExp, { detail: '', from: '', to: '', description: '' }])
                                }}>
                                Add
                            </Button>}
                            {workExp?.length > 1 && <DeleteOutlineOutlinedIcon
                                style={{ color: 'red' }}
                                onClick={(e: any) => {
                                    let arr = workExp.filter((itm, idx) => index !== idx);
                                    setWorkExp(arr);
                                }} />}
                        </Box>
                        <Divider />
                        <Box className={classes.flexBox} style={{ marginTop: 15 }}>
                            <Box className={classes.textFieldStyle} style={{ width: '55.33%' }}><TextField style={{ width: '100%' }} label='Company name' /></Box>
                            <Box className={classes.textFieldStyle} style={{ width: '22.33%' }}>
                                <TextField id="date"
                                    label="From"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Box>
                            <Box className={classes.textFieldStyle} style={{ width: '22.33%' }}>
                                <TextField id="date"
                                    label="To"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className={[classes.label, classes.paddingTop].join('  ')}>Job description</Box>
                        <Box className={classes.textFieldStyle} style={{ width: '100%' }}>
                            <TextField label='Job description' style={{ width: '98%', margin: 'auto' }} />
                        </Box>
                    </>
                )
            })}
            {/* <Box className={classes.container}>
                <Box className={classes.leftContainer}>
                    <Box className={classes.pt}>
                        <Box className={classes.heading}>Work experience</Box>
                        {workExp?.map((itm: IWorkExperience, index: number) => {
                            return(
                                <>
                                    <Box className={classes.flexBox} style={{justifyContent: 'space-between', padding: '15px 0'}}>
                                        <Box className={classes.label}>Company detail</Box>
                                        {workExp?.length > 1 && <DeleteOutlineOutlinedIcon 
                                        style={{color: 'red'}}
                                        onClick={(e: any) => {
                                            let arr = workExp.filter((itm, idx) => index !== idx);
                                            setWorkExp(arr);
                                        }}/>}
                                    </Box>
                                    <Divider />
                                    <Box className={classes.flexBox} style={{marginTop: 15}}>
                                        <Box className={classes.textFieldStyle} style={{ width: '55.33%' }}><TextField style={{width: '100%'}} label='Company name' /></Box>
                                        <Box className={classes.textFieldStyle} style={{ width: '22.33%' }}>
                                            <TextField id="date"
                                                label="From"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }} 
                                            />
                                        </Box>
                                        <Box className={classes.textFieldStyle} style={{ width: '22.33%' }}>
                                            <TextField id="date"
                                                label="To"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }} 
                                            />
                                        </Box>
                                    </Box>
                                    <Box className={[classes.label, classes.paddingTop].join('  ')}>Job description</Box>
                                    <Box className={classes.textFieldStyle} style={{ width: '100%' }}>
                                        <TextField label='Job description' style={{ width: '98%', margin: 'auto' }} />
                                    </Box>
                                </>
                            )
                        })}
                        <Box className={classes.flexBox} style={{ justifyContent: 'space-between' }}>
                            <Box className={classes.flexBox} style={{justifyContent: 'start'}}>
                                <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')} 
                                    onClick={(e: any) => {
                                        setWorkExp([...workExp, {detail: '', from: '', to: '', description: ''}])
                                    }}>
                                        Add
                                    </Button>
                            </Box>
                            <Box className={classes.flexBox} style={{ justifyContent: 'end' }}>
                                <Button variant="contained" color="primary" className={[classes.mt, classes.cancelButton].join(' ')}>Cancel</Button>
                                <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}>Next</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box> */}
        </>
    )
}

export const EducationDetails = () => {
    const [education, setEducation] = React.useState<IEducation[]>([{ institute: '', degree: '', branch: '', year: '' }]);
    const classes = useStyle();

    return (
        <>
            {education?.map((itm: IEducation, index: number) => {
                return (
                    <>
                        <Box className={classes.flexBox} style={{ justifyContent: index === education?.length - 1 ? 'space-between' : 'end', padding: '15px 0' }}>
                            {index === education?.length - 1 &&
                                <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}
                                    onClick={(e: any) => {
                                        setEducation([...education, { institute: '', year: '', degree: '', branch: '' }])
                                    }}>
                                    Add
                                </Button>
                            }
                            {education?.length > 1 &&
                                <DeleteOutlineOutlinedIcon
                                    style={{ color: 'red' }}
                                    onClick={(e: any) => {
                                        let arr = education.filter((itm, idx) => index !== idx);
                                        setEducation(arr);
                                    }}
                                />}
                        </Box>
                        <Divider />
                        <Box style={{ marginTop: 15 }}>
                            <Box className={classes.flexBox} style={{ justifyContent: 'space-between' }}>
                                <Box className={classes.textFieldStyle} style={{ width: '80%' }}>
                                    <TextField label="Institute" style={{ width: '100%' }} />
                                </Box>
                                <Box className={classes.textFieldStyle} style={{ width: '20%' }}>
                                    <TextField label="Year" style={{ width: '100%' }} />
                                </Box>
                            </Box>
                            <Box className={classes.flexBox} style={{ justifyContent: 'space-between' }}>
                                <Box className={classes.textFieldStyle} style={{ width: '50%' }}>
                                    <TextField label="Degree" style={{ width: '100%' }} />
                                </Box>
                                <Box className={classes.textFieldStyle} style={{ width: '50%' }}>
                                    <TextField label="Branch" style={{ width: '100%' }} />
                                </Box>
                            </Box>
                        </Box>
                    </>
                )
            })}
        </>
        // <Box className={classes.container}>
        //     <Box className={classes.leftContainer}>
        //         <Box className={classes.pt}>
        //             <Box className={classes.heading}>Education Details</Box>
        //             {education?.map((itm: IEducation, index: number) => {
        //                 return(
        //                     <>
        //                         <Box className={classes.flexBox} style={{justifyContent: 'space-between', padding: '15px 0'}}>
        //                             <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')} 
        //                                 onClick={(e: any) => {
        //                                     setEducation([...education, {institute: '', year: '', degree: '', branch: ''}])
        //                                 }}>
        //                                 Add
        //                             </Button>
        //                             {education?.length > 1 && 
        //                             <DeleteOutlineOutlinedIcon 
        //                                 style={{color: 'red'}}
        //                                 onClick={(e: any) => {
        //                                     let arr = education.filter((itm, idx) => index !== idx);
        //                                     setEducation(arr);
        //                                 }}
        //                             />}
        //                         </Box>
        //                         <Divider />
        //                         <Box style={{marginTop: 15}}>
        //                             <Box className={classes.flexBox} style={{justifyContent: 'space-between'}}>
        //                                 <Box className={classes.textFieldStyle} style={{ width: '80%' }}>
        //                                     <TextField label="Institute" style={{width: '100%'}}/>
        //                                 </Box>
        //                                 <Box className={classes.textFieldStyle} style={{ width: '20%' }}>
        //                                     <TextField label="Year" style={{width: '100%'}}/>
        //                                 </Box>
        //                             </Box>
        //                             <Box className={classes.flexBox} style={{justifyContent: 'space-between'}}>
        //                                 <Box className={classes.textFieldStyle} style={{ width: '50%' }}>
        //                                     <TextField label="Degree" style={{width: '100%'}}/>
        //                                 </Box>
        //                                 <Box className={classes.textFieldStyle} style={{ width: '50%' }}>
        //                                     <TextField label="Branch" style={{width: '100%'}}/>
        //                                 </Box>
        //                             </Box>
        //                         </Box>
        //                     </>
        //                 )
        //             })}
        //             <Box className={classes.flexBox} style={{ justifyContent: 'space-between' }}>
        //                 <Box className={classes.flexBox} style={{justifyContent: 'start'}}>
        //                     <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')} 
        //                         onClick={(e: any) => {
        //                             setEducation([...education, {institute: '', year: '', degree: '', branch: ''}])
        //                         }}>
        //                             Add
        //                         </Button>
        //                 </Box>
        //                 <Box className={classes.flexBox} style={{ justifyContent: 'end' }}>
        //                     <Button variant="contained" color="primary" className={[classes.mt, classes.cancelButton].join(' ')}>Cancel</Button>
        //                     <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}>Submit</Button>
        //                 </Box>
        //             </Box>
        //         </Box>
        //     </Box>
        // </Box>
    )
}

