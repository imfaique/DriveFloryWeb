import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../styles.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { validateEmail, validatePassword, validateCnicNo, validateContactNo } from "../shared/utils";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import MaskedInput from 'react-text-mask'
import ImageUploader from '../components/ImageUploader'


const API = process.env.REACT_APP_API_KEY

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginLeft: theme.spacing(-1),
            marginTop: theme.spacing(15.2),
            width: theme.spacing(90),
            height: 'auto',
        },
    },

    heading: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30
    },

    form: {
        height: 'auto',
        paddingBottom: 20

    },

    row: {
        flexDirection: 'row'
    },

    formgroup: {
        marginBottom: 1,
        marginLeft: 60,
        color: '#8798ad',

    },

    labeled: {
        fontWeight: 400,
        color: '#8798ad',
        fontSize: 17,
    },


}));



export default function CarRegisteration() {

    const classes = useStyles();

    //DATA STATES
    const history = useHistory()
    const [name, setName] = useState("")
    const [cnicNo, setCnicNo] = useState('')
    const [contactNo, setContactNo] = useState("")
    const [address, setAddress] = useState("")
    const [vehicleType, setvehicleType] = useState("")
    const [companyName, setcompanyName] = useState("")
    const [model, setModel] = useState("")
    const [registerationNo, setRegisterationNo]=useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [rating, setRating] = useState("2.0")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    // ERROR STATES 
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [emailError, setEmailError] = useState()
    const [passError, setPassError] = useState()
    const [cnicError, setCnicError] = useState()
    const [contactError, setContactError] = useState()
    const [nameError, setNameError] = useState()
    const [addressError, setAddressError] = useState()
    const [vehicleTypeError, setvehicleTypeError] = useState()
    const [companyNameError, setcompanyNameError] = useState()
    const [modelError, setModelError]= useState()
    const [usernameError, setUsernameError] = useState()
    const [confirmpassError, setConfirmPassError] = useState()
    const [RegisterationNoError, setRegisterationNoError]= useState()

    const handleNameChange = async (e) => {
        setName(e.target.value)
    };

    // const format = (value) => {
    //     return value.replace(/\s/g, "").match(/.{1,4}/g).join(" ").substr(0, 15) || ""
    // }

    const handleCnicNoChange = (e) => {
        setCnicError('')
        setCnicNo(e.target.value)
    };

    const handleRegisterationNo = (e) => {
        setRegisterationNoError('')
        setRegisterationNo(e.target.value)
    };

    const handleContactNoChange = (e) => {
        setContactError('')
        setContactNo(e.target.value)
    };

    const handleAddressChange = (e) => {
        setAddressError('')
        setAddress(e.target.value)
    };

    const handlevehicleTypeChange = (e) => {
        setvehicleTypeError('')
        console.log(vehicleType)
        setvehicleType(e.target.value)

    };

    const handlecompanyNameChange = (e) => {
        setcompanyNameError('')
        setcompanyName(e.target.value)
    };

    const handleModelChange = (e) => {
        setModelError('')
        setModel(e.target.value)
    };

    const handleUserNameChange = (e) => {
        setUsernameError('')
        setUsername(e.target.value)
    };

    const handleEmailChange = (e) => {
        setEmailError('')
        setEmail(e.target.value)

    };

    const handlePasswordChange = (e) => {
        setPassError('')
        setPassword(e.target.value)
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassError('')
        setConfirmPassword(e.target.value)
    };

    const onBlurEmail = () => {
        console.log(email)
        if (!validateEmail(email)) {
            setEmailError('Invalid Email Entered')
            setEmail('')
        } else {
            setEmailError('')
        }
    }

    const onBlurCnic = () => {
        if (!validateCnicNo(cnicNo)) {
            setCnicError('Invalid CNIC Entered')
            setCnicNo('')
        } else {
            setCnicError('')
        }
    }

    const onBlurContact = () => {
        if (contactNo.length < 11) {
            setContactError('Number must be Atleast 11 digits')
            setContactNo('')
        } else {
            setContactError('')
        }
    }

    const onBlurRegisteration = () =>{
        if (registerationNo.length < 6){
            setRegisterationNoError('Registeration Number must be 6 characters long')
            setRegisterationNo('')
        }else {
            setRegisterationNoError('')
        }
    }

    const onBluruserName = () =>{
        if (username.length < 6){
            setUsernameError('Registeration Number must be 6 characters long')
            setUsername('')
        }else {
            setUsernameError('')
        }
    }

    const onBlurName = () =>{
        if (name.length < 5 && name.length === 0){
            setNameError('Name must be 5 characters long')
            setName('')
        }else {
            setNameError('')
        }
    }

    const selectModel = () => {
       if (companyName === 'Toyota' && vehicleType === 'Car'){
        return (
            <Select
            className={`selector ${modelError ? "dirty-input" : ""}`}
                value={model}
                onChange={handleModelChange}
                displayEmpty
                inputProps={{'aria-label':'Without label'}}
        >
            <MenuItem value="Corolla">Corolla</MenuItem>
            <MenuItem value="Fortuner">Fortuner</MenuItem>
            <MenuItem value="Hilux">Hilux</MenuItem>
            <MenuItem value="Parado">Parado</MenuItem>
            <MenuItem value="Land Cruiser">Land Cruiser</MenuItem>

            </Select>
        )
       }else if (companyName === 'Honda' && vehicleType === 'Car'){
        return (
            <Select
            className={`selector ${modelError ? "dirty-input" : ""}`}
                value={model}
                onChange={handleModelChange}
                displayEmpty
                inputProps={{'aria-label':'Without label'}}
        >
            <MenuItem value="Civic">Civic</MenuItem>
            <MenuItem value="City">City</MenuItem>
            <MenuItem value="BR-V">BR-V</MenuItem>
            <MenuItem value="Vezel">Vezel</MenuItem>
            </Select>
        )
       }
       else if (companyName === 'Suzuki' && vehicleType === 'Car'){
        return (
            <Select
            className={`selector ${modelError ? "dirty-input" : ""}`}
                value={model}
                onChange={handleModelChange}
                displayEmpty
                inputProps={{'aria-label':'Without label'}}
        >
            <MenuItem value="Alto">Alto</MenuItem>
            <MenuItem value="Cultus">Cultus</MenuItem>
            <MenuItem value="Wagon-R">Wagon-R</MenuItem>
            <MenuItem value="Swift">Swift</MenuItem>
            </Select>
        )
       }else if (companyName === 'Toyota' && vehicleType === 'Hiace'){
        return (
            <Select
            className={`selector ${modelError ? "dirty-input" : ""}`}
                value={model}
                onChange={handleModelChange}
                displayEmpty
                inputProps={{'aria-label':'Without label'}}
        >
            <MenuItem value="Toyota HiAce">Toyota HiAce</MenuItem>
            <MenuItem value="Cultus">Wagon 2.4DT</MenuItem>
            <MenuItem value="Wagon-R">Wagon 3.0DT</MenuItem>
            <MenuItem value="Grand Cabin">Grand Cabin</MenuItem>
            </Select>
        )
       }else if (companyName === 'Toyota' && vehicleType === 'Coaster'){
        return (
            <Select
            className={`selector ${modelError ? "dirty-input" : ""}`}
                value={model}
                onChange={handleModelChange}
                displayEmpty
                inputProps={{'aria-label':'Without label'}}
        >
            <MenuItem value="Toyota Coaster 1st generation">Toyota Coaster 1st generation</MenuItem>
            <MenuItem value="Toyota Coaster 2nd generation">Toyota Coaster 2nd generation</MenuItem>
            <MenuItem value="Toyota Coaster 3rd generation">Toyota Coaster 3rd generation</MenuItem>
            <MenuItem value="Toyota Coaster 4th generation">Toyota Coaster 4th generation</MenuItem>
            </Select>
        )
       }
       else {
        return (
            <Select
                className={`selector ${companyNameError ? "dirty-input" : ""}`}
                value={companyName}
                onChange={handlecompanyNameChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="Select Vehicle Type">
                Select Vehicle Type...
                </MenuItem>
            </Select>
        )
       }
    }


    const selectcompanyName = () => {
        if (vehicleType === 'Car') {
            return (
                <Select
                    className={`selector ${companyNameError ? "dirty-input" : ""}`}
                    value={companyName}
                    onChange={handlecompanyNameChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >

                    <MenuItem value="Toyota">Toyota</MenuItem>
                    <MenuItem value="Honda">Honda</MenuItem>
                    <MenuItem value="Suzuki">Suzuki</MenuItem>
                </Select>
            )
        } else if(vehicleType === 'Hiace'){
            return (
                <Select
                    className={`selector ${companyNameError ? "dirty-input" : ""}`}
                    value={companyName}
                    onChange={handlecompanyNameChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >

                    <MenuItem value="Toyota">Toyota</MenuItem>
                    
                </Select>
            )
        }else if(vehicleType === 'Coaster'){
            return (
                <Select
                    className={`selector ${companyNameError ? "dirty-input" : ""}`}
                    value={companyName}
                    onChange={handlecompanyNameChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >

                    <MenuItem value="Toyota">Toyota</MenuItem>
                    
                </Select>
            )
        }
        
        else{
            return (
                <Select
                    className={`selector ${companyNameError ? "dirty-input" : ""}`}
                    value={companyName}
                    onChange={handlecompanyNameChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="Select Vehicle Type">
                    Select Vehicle Type...
                    </MenuItem>
                </Select>
            )
        } 
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(vehicleType)
        console.log(companyName)
        if (name === '') {
            setNameError('Name Required')
            // console.log("EMPTY");
        }

        if (cnicNo === '') {
            setCnicError('CNIC Required')
        }

        if (contactNo === '') {
            setContactError('Contact Required')
        }

        if (address === '') {
            setAddressError('Address Required')
        }

        if (vehicleType === '') {
            setvehicleTypeError('Vehicle Type Required')
        }

        if (companyName === '') {
            setcompanyNameError('Company Name Required')
        }

        if (username === '') {
            setUsernameError('Username Required')
        }

        if (email === '') {
            setEmailError('Email Required')
        }

        if (password === '') {
            setPassError('Password Required')
        }

        if (confirmpassword === '') {
            setConfirmPassError('Confirm Password Required')
        }

        if (password !== confirmpassword) {
            setMessage('Passwords Do Not Match')
            toast.error('❕ Password Do not Match')
            setConfirmPassword("");
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            let url = `${API}mechanics/register`

            const { data } = await axios.post(
                url,
                { name, cnicNo, contactNo, address, vehicleType, companyName, username, email, password, rating },
                config
            )
            console.log(data);
            if (data !== null) {
                toast('Mechanic Registered Successfully 😃')
                setName('')
                setCnicNo('')
                setContactNo('')
                setAddress('')
                setEmail('')
                setvehicleType('')
                setcompanyName('')
                setUsername('')
                setPassword('')
                setConfirmPassword('')
            }

        } catch (error) {
            setError("Mechanic Already Exists")
            toast.error(error)
        }
    }



    return (
        <div className={classes.root}>

            <Paper elevation={10}>

                <h3 className={classes.heading}>Car Registeration Form</h3>
                <form className={classes.form}>
                    <div className='r'>
                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Name<sup className="field-required">*</sup></label><br />
                            <input
                                type='text'
                                autoComplete='Name'
                                placeholder=''
                                className={`form-controlR ${nameError ? "dirty-input" : ""} `}
                                value={name}
                                onChange={handleNameChange}
                                onBlur={onBlurName}
                            />
                            {cnicError && (
                                <p className="errorR">{nameError}</p>
                            )}
                        </div>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>CNIC No<sup className="field-required">*</sup></label><br />
                            <MaskedInput
                                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]}
                                guide={false}
                                type='text'
                                autoComplete='CNIC No'
                                placeholder='xxxxx-xxxxxxx-x'
                                className={`form-controlR ${cnicError ? "dirty-input" : ""} `}
                                value={cnicNo}
                                onChange={handleCnicNoChange}
                                onBlur={onBlurCnic}
                            />
                            {cnicError && (
                                <p className="errorR">{cnicError}</p>
                            )}
                        </div>

                    </div>
                    <div className='r'>
                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Contact No<sup className="field-required">*</sup></label><br />
                            <MaskedInput
                                mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                                guide={false}
                                type='text'
                                autoComplete={'Contact No'}
                                placeholder=''
                                className={`form-controlR ${contactError ? "dirty-input" : ""}`}
                                value={contactNo}
                                onChange={handleContactNoChange}
                                onBlur={onBlurContact}
                            />
                            {contactError && (
                                <p className="errorR">{contactError}</p>
                            )}
                        </div>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Address<sup className="field-required">*</sup></label><br />
                            <input
                                type='text'
                                autoComplete={'Address'}
                                placeholder=''
                                className={`form-controlR ${addressError ? "dirty-input" : ""}`}
                                value={address}
                                onChange={handleAddressChange}
                            />
                            {addressError && (
                                <p className="errorR">{addressError}</p>
                            )}

                        </div>
                    </div>

                    <div className='r'>
                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Vehicle Type<sup className="field-required">*</sup></label><br />
                            <Select
                                className={`selector ${vehicleTypeError ? "dirty-input" : ""}`}
                                value={vehicleType}
                                onChange={handlevehicleTypeChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Car">Car</MenuItem>
                                <MenuItem value="Hiace">Hiace</MenuItem>
                                <MenuItem value="Coaster">Coaster</MenuItem>
                            </Select>
                            {vehicleTypeError && (
                                <p className="errorR">{vehicleTypeError}</p>
                            )}
                        </div>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Company Name<sup className="field-required">*</sup></label><br />

                            {selectcompanyName()}


                            {companyNameError && (
                                <p className="errorR">{companyNameError}</p>
                            )}
                        </div>


                    </div>

                    <div className='r'>
                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Model<sup className="field-required">*</sup></label><br />
                            {selectModel()}
                            {vehicleTypeError && (
                                <p className="errorR">{vehicleTypeError}</p>
                            )}
                        </div>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Registeration Number<sup className="field-required">*</sup></label><br />

                            <MaskedInput
                                mask={[ /[A-Z]/, /[A-Z]/, /[A-Z]/, '-', /\d/, /\d/, /\d/]}
                                guide={false}
                                type='text'
                                autoComplete={'Registeration No'}
                                placeholder=''
                                className={`form-controlR ${registerationNo ? "dirty-input" : ""}`}
                                value={registerationNo}
                                onChange={handleRegisterationNo}
                                onBlur={onBlurRegisteration}
                            />


                            {RegisterationNoError && (
                                <p className="errorR">{RegisterationNoError}</p>
                            )}
                        </div>


                    </div>

                    <div className='r'>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>User Name<sup className="field-required">*</sup></label><br />
                            <input
                                type='text'
                                autoComplete='Text'
                                placeholder=''
                                className={`form-controlR ${usernameError ? "dirty-input" : ""}`}
                                value={username}
                                onChange={handleUserNameChange}
                                onBlur={onBluruserName}
                            />
                            {usernameError && (
                                <p className="errorR">{usernameError}</p>
                            )}
                        </div>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Email<sup className="field-required">*</sup></label><br />
                            <input
                                type='Email'
                                autoComplete='Email'
                                placeholder=''
                                className={`form-controlR ${emailError ? "dirty-input" : ""}`}
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={onBlurEmail}
                            />
                            {emailError && (
                                <p className="errorR">{emailError}</p>
                            )}

                        </div>

                    </div>

                    

                    <div className='r'>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Password<sup className="field-required">*</sup></label><br />
                            <input

                                type='password'
                                autoComplete='Password'
                                placeholder=''
                                className={`form-controlR ${passError ? "dirty-input" : ""}`}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passError && (
                                <p className="errorR">{passError}</p>
                            )}
                        </div>

                        <div className={classes.formgroup}>
                            <label className={classes.labeled}>Confirm Password<sup className="field-required">*</sup></label><br />
                            <input

                                type='password'
                                autoComplete='Confirm Password'
                                placeholder=''
                                className={`form-controlR ${confirmpassError ? "dirty-input" : ""} `}
                                value={confirmpassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            {confirmpassError && (
                                <p className="errorR">{confirmpassError}</p>
                            )}

                        </div>

                    </div>
                    {/* <ImageUploader/> */}
                    <button className="btn mt-4 paperB" onClick={handleSubmit} type='submit'>Register</button>
                </form>

                <ToastContainer icon={true} />
            </Paper>
        </div>
    );
}