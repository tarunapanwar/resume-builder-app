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
    resumeData: IResumeBuilder | null;
    setResumeData: (resumeData: IResumeBuilder) => void;
}

const ResumeContext = React.createContext<IResumeContextProps>({
    resumeData: null,
    setResumeData: () => null
});

interface IProps {
    // resumeData: IResumeBuilder | null;
    // setResumeData: (resumeData: IResumeBuilder) => void;
    children: any
}

const ResumeProvider: React.FC<IProps> = ({children}) => {
    const[details, setDetails] = React.useState<IResumeBuilder | null>(null);

    const setResumeData = (val: IResumeBuilder) => {
        setDetails(val);
    }

    const value: IResumeContextProps = {
        details,
        setResumeData
    }
    return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}