import { Box, Button, Divider, TextField } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React from 'react';
import { useStyle } from './RbStyles';
import { IEducationDetails, IResumeBuilder, IResumeContextProps, IWorkExperience, ResumeContext } from '../Contexts/ResumeBuilderContext';

export const ResumeBuilder = () => {
    const { details, setDetails } = React.useContext(ResumeContext) as IResumeContextProps;
    const [page, setPage] = React.useState<number>(1);  
    const classes = useStyle();

    React.useEffect(() => {
        console.log('details', details);
        debugger;
    }, [details]);

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
    const { details, setDetails } = React.useContext(ResumeContext) as IResumeContextProps;
    const classes = useStyle();
    return (
        <>
            <Box className={classes.label}>Name</Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='First name' 
                        value={details?.name?.name?.firstName}
                        onChange={(e) => setDetails({...details, name: {id: '1', name: {...details?.name?.name, firstName: e?.currentTarget?.value}}})}
                    />
                </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Middle name' 
                        value={details?.name?.name?.middleName}
                        onChange={(e) => setDetails({...details, name: {id: '1', name: {...details?.name?.name, middleName: e?.currentTarget?.value}}})}
                    />
                </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Last name' 
                        value={details?.name?.name?.lastName}
                        onChange={(e) => setDetails({...details, name: {id: '1', name: {...details?.name?.name, lastName: e?.currentTarget?.value}}})}
                    />
                </Box>
            </Box>
            <Box className={[classes.label, classes.paddingTop].join('  ')}>Address</Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Building' 
                        value={details?.address?.building}
                        onChange={(e) => setDetails({...details, address: {...details?.address, building: e?.currentTarget?.value}})}
                    />
                </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Street' 
                        value={details?.address?.street}
                        onChange={(e) => setDetails({...details, address: {...details?.address, street: e?.currentTarget?.value}})}
                    />
                    </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='City'
                        value={details?.address?.city}
                        onChange={(e) => setDetails({...details, address: {...details?.address, city: e?.currentTarget?.value}})} 
                    />
                </Box>
            </Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='State'
                        value={details?.address?.state}
                        onChange={(e) => setDetails({...details, address: {...details?.address, state: e?.currentTarget?.value}})} 
                    />
                </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Country'
                        value={details?.address?.country}
                        onChange={(e) => setDetails({...details, address: {...details?.address, country: e?.currentTarget?.value}})} 
                    />
                </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Postcode' 
                        value={details?.address?.postcode}
                        onChange={(e) => setDetails({...details, address: {...details?.address, postcode: e?.currentTarget?.value}})}
                    />
                </Box>
            </Box>
            <Box className={[classes.label, classes.paddingTop].join('  ')}>Contact details</Box>
            <Box className={classes.flexBox}>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Phone no' 
                        value={details?.contactDetails?.phoneNumber}
                        onChange={(e) => setDetails({...details, contactDetails: {...details?.contactDetails, phoneNumber: e?.currentTarget?.value}})}
                    />
                </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Email' 
                        value={details?.contactDetails?.email}
                        onChange={(e) => setDetails({...details, contactDetails: {...details?.contactDetails, email: e?.currentTarget?.value}})}
                    />
                </Box>
                <Box className={classes.textFieldStyle} style={{ width: '33.33%' }}>
                    <TextField 
                        label='Linkedin' 
                        value={details?.contactDetails?.linkedIn}
                        onChange={(e) => setDetails({...details, contactDetails: {...details?.contactDetails, linkedIn: e?.currentTarget?.value}})}
                    />
                </Box>
            </Box>
            <Box className={[classes.label, classes.paddingTop].join('  ')}>About me</Box>
            <Box className={classes.textFieldStyle} style={{ width: '100%' }}>
                <TextField 
                    label='Abount me' 
                    style={{ width: '98%', margin: 'auto' }} 
                    value={details?.selfDescription}
                    onChange={(e) => setDetails({...details, selfDescription: e?.currentTarget?.value})}
                />
            </Box>
        </>
    )
}

export const WorkExperience = () => {
    const {details, setDetails} = React.useContext(ResumeContext) as IResumeContextProps;
    // const [workExp, setWorkExp] = React.useState<IWorkExperience[]>([{ detail: '', from: '01/01/2023', to: '02/02/2024', description: '' }]);
    const classes = useStyle();
    return (
        <>
            {details?.workExperience?.map((itm: IWorkExperience, index: number) => {
                return (
                    <>
                        <Box className={classes.flexBox} style={{ justifyContent: index === details?.workExperience?.length - 1 ? 'space-between' : 'end', padding: '15px 0' }}>
                            {index === details?.workExperience?.length - 1 && <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}
                                onClick={(e: any) => {
                                    setDetails({...details, workExperience: [...details?.workExperience, { companyName: '', fromDate: '', toDate: '', jobDescription: '' }]})
                                }}>
                                Add
                            </Button>}
                            {details?.workExperience?.length > 1 && <DeleteOutlineOutlinedIcon
                                style={{ color: 'red' }}
                                onClick={(e: any) => {
                                    let arr = details?.workExperience.filter((itm, idx) => index !== idx);
                                    setDetails({...details, workExperience: arr});
                                }} />}
                        </Box>
                        <Divider />
                        <Box className={classes.flexBox} style={{ marginTop: 15 }}>
                            <Box className={classes.textFieldStyle} style={{ width: '55.33%' }}>
                                <TextField 
                                    style={{ width: '100%' }} 
                                    label='Company name' 
                                    value={itm?.companyName}
                                    onChange={(e) => setDetails({
                                        ...details,
                                        workExperience: [...details?.workExperience, ]
                                    })}
                                />
                            </Box>
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
                            <TextField 
                                label='Job description' 
                                style={{ width: '98%', margin: 'auto' }} 
                            />
                        </Box>
                    </>
                )
            })}
        </>
    )
}

export const EducationDetails = () => {
    const {details, setDetails} = React.useContext(ResumeContext) as IResumeContextProps;
    // const [education, setEducation] = React.useState<IEducationDetails[]>([{ institute: '', degree: '', branch: '', year: '' }]);
    const classes = useStyle();

    return (
        <>
            {details?.educationDetails?.map((itm: IEducationDetails, index: number) => {
                return (
                    <>
                        <Box className={classes.flexBox} style={{ justifyContent: index === details?.educationDetails?.length - 1 ? 'space-between' : 'end', padding: '15px 0' }}>
                            {index === details?.educationDetails?.length - 1 &&
                                <Button variant="contained" color="primary" className={[classes.mt, classes.actionButton].join(' ')}
                                onClick={(e: any) => {
                                    setDetails({...details, educationDetails: [...details?.educationDetails, { institute: '', year: '', degree: '', branch: '' }]})
                                }}>Add</Button>
                            }
                            {details?.educationDetails?.length > 1 &&
                                <DeleteOutlineOutlinedIcon
                                    style={{ color: 'red' }}
                                    onClick={(e: any) => {
                                        let arr = details?.educationDetails.filter((itm, idx) => index !== idx);
                                        setDetails({...details, educationDetails: arr});
                                    }}
                                />
                            }
                        </Box>
                        <Divider />
                        <Box style={{ marginTop: 15 }}>
                            <Box className={classes.flexBox} style={{ justifyContent: 'space-between' }}>
                                <Box className={classes.textFieldStyle} style={{ width: '80%' }}>
                                    <TextField 
                                        label="Institute" 
                                        style={{ width: '100%' }} 
                                    />
                                </Box>
                                <Box className={classes.textFieldStyle} style={{ width: '20%' }}>
                                    <TextField 
                                        label="Year" 
                                        style={{ width: '100%' }} 
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.flexBox} style={{ justifyContent: 'space-between' }}>
                                <Box className={classes.textFieldStyle} style={{ width: '50%' }}>
                                    <TextField 
                                        label="Degree" 
                                        style={{ width: '100%' }} 
                                    />
                                </Box>
                                <Box className={classes.textFieldStyle} style={{ width: '50%' }}>
                                    <TextField 
                                        label="Branch" 
                                        style={{ width: '100%' }} 
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </>
                )
            })}
        </>
    )
}

