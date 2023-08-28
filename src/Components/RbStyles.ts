import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
    container: {
        width: '100%',
        display: 'flex'
    },
    leftContainer: {
        width: '50%',
        padding: '15px',
    },
    rightContainer: {
        width: '50%',
        border: '1px solid green'
    },
    pt: {
        padding: 15
    },
    textFieldStyle: {
        padding: 5
    },
    label: {
        fontWeight: 500,
        padding: '0 5px',
        color: '#786f6f'
    },
    flexBox: {
        display: 'flex'
    },
    paddingTop: {
        paddingTop: 15
    },
    paddingBottom: {
        paddingBottom: 15
    },
    heading: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 700,
        fontSize: 24,
        paddingBottom: 15,
        textTransform: 'uppercase',
        "&, &: before, &:after": {
            width: 55,
            height: 25,
            background: 'green',
            position: 'relative',
            top: 25,
            left: 250
        }
    },
    mt: {
        marginTop: 15,
        marginLeft: 5
    },
    cancelButton: {
        background: '#ddd',
        color: '#333',
        height: 25,
        width: 82
    },
    actionButton: {
        background: 'green',
        color: '#fff',
        height: 25,
        width: 82
    },
    navBar: {
    background: '#ddd'
    },
    logo: {
    color: 'green',
    fontWeight: 'bolder',
    },
    spaceBetweenFlexbox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    mainContainer: {
        border: 'none',
        borderRadius: 5,
        boxShadow: '0 0 15px #ddd',
        margin: 'auto',
        padding: '50px 50px',
        width: 300,
        textAlign: 'center',
        marginTop: 150  
    },
    formTitle: {
        fontFamily: 'Dancing Script',
        fontweight: 400,
        fontSize: 45,
        color: 'blue'
    }
})