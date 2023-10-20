import React from 'react';

interface IIdName {
    id: string,
    name: IFullName
}

interface IFullName {
    firstName: string,
    middleName?: string,
    lastName?: string
}

interface IAddressModel {
    building: string | undefined,
    street: string | undefined,
    city: string | undefined,
    state: string | undefined,
    country: string,
    postcode: string | undefined
}

interface IContactDetails {
    phoneNumber: string | undefined,
    email: string | undefined,
    linkedIn: string | undefined
}

interface IWorkExperience {
    companyName: string,
    fromDate: string,
    toDate: string,
    jobDescription: string | undefined
}

interface IEducationDetails {
    institute: string,
    year: number,
    degree: string,
    branch: string
}

interface IResumeBuilder {
    name: IIdName,
    address: IAddressModel,
    contactDetails: IContactDetails,
    selfDescription: string,
    workExperience: IWorkExperience[],
    educationDetails: IEducationDetails[]
}

interface IResumeContextProps {
    details: IResumeBuilder;
    setDetails: React.Dispatch<React.SetStateAction<IResumeBuilder>>;
}

const ResumeContext = React.createContext<IResumeContextProps | null>(null);

// interface IProps {
//     details: IResumeBuilder;
//     setDetails: React.Dispatch<React.SetStateAction<IResumeBuilder>>;
// }

const ResumeProvider = ({children}: any) => {
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
        workExperience: [],
        educationDetails: []
    });

    const value: IResumeContextProps = {
        details,
        setDetails
    }
    return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}