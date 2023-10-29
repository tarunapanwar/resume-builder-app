import React from 'react';

export interface IIdName {
    id: string,
    name: IFullName
}

export interface IFullName {
    firstName: string,
    middleName?: string,
    lastName?: string
}

export interface IAddressModel {
    building: string | undefined,
    street: string | undefined,
    city: string | undefined,
    state: string | undefined,
    country: string,
    postcode: string | undefined
}

export interface IContactDetails {
    phoneNumber: string | undefined,
    email: string | undefined,
    linkedIn: string | undefined
}

export interface IWorkExperience {
    companyName: string,
    fromDate: string,
    toDate: string,
    jobDescription: string | undefined
}

export interface IEducationDetails {
    institute: string,
    year: string,
    degree: string,
    branch: string
}

export interface IResumeBuilder {
    name: IIdName,
    address: IAddressModel,
    contactDetails: IContactDetails,
    selfDescription: string,
    workExperience: IWorkExperience[],
    educationDetails: IEducationDetails[]
}

export interface IResumeContextProps {
    details: IResumeBuilder;
    setDetails: React.Dispatch<React.SetStateAction<IResumeBuilder>>;
}

export const ResumeContext = React.createContext<IResumeContextProps>({} as any);

export const ResumeProvider = ({children}: any) => {
    const[details, setDetails] = React.useState<IResumeBuilder>({
        name: {id: '', name: {
            firstName: '',
            middleName: '',
            lastName: ''
        }},
        address: {
            street: '',
            building: '',
            city: '',
            state: '',
            country: '',
            postcode: ''
        },
        contactDetails: {
            phoneNumber: undefined,
            email: undefined,
            linkedIn: undefined
        },
        selfDescription: '',
        workExperience: [{ companyName: '', fromDate: '01/01/2023', toDate: '02/02/2024', jobDescription: '' }],
        educationDetails: [{institute: '', year: '',degree: '', branch: ''}]
    });

    const value: IResumeContextProps = {
        details,
        setDetails
    }
    return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}