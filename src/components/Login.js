import axios from 'axios';
import { BASE_URL } from '../constant/api.constant';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // console.log(BASE_URL);
    const [centre_id, setcentre_id] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const [errorMessage, setErrorMessage] = useState('');


    useEffect(()=>{
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')!=null){
            navigate('/')
        }
    },[]);


    let check_login = async () => {
        const loginData = {
            centre_id: centre_id,
            username: username,  
            password: password  
        }
        // console.log(loginData);
        try {
            const response = await axios.post(BASE_URL + '/auth/login.php', loginData);
            
            if(response.data.status == 'success'){
                localStorage.setItem('token', response.data.token);
                setErrorMessage("");
                navigate('/');
                 
            }else{
                // document.getElementById("error_msg").
                setErrorMessage(response.data.message);
            }
            

        } catch (error) {
            console.error("Error fetching banner data:", error);
        }
    }

    const centers = [
        {
          value: 171,
          label: "Administrator",
        },
        {
          value: 232,
          label: "Admin",
        },
        {
          value: 227,
          label: "Accounts Admin",
        },
        {
          value: 231,
          label: "Staff Member",
        }
    ];



    return (
        <>
        <style>
        {`
            .form-select{
                #f3f3f3 !important;
            }
            .form-group label{
                margin-bottom: 5px;
            }
            
        `}
        </style>
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="row w-100">
                        <div class="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div class="card col-lg-4 mx-auto">
                                <div class="card-body px-5 py-5">
                                    <h3 class="card-title text-start mb-3">Login</h3>
                                    <p style={{color:"red"}}class="card-title text-start mb-3" >{errorMessage}</p>
                                    <form>
                                        <div class="form-group">
                                            <label>Select user type * </label>
                                            <select class="form-select" id="exampleSelectGender" onChange={(e)=>{setcentre_id(e.target.value)}} required>
                                                <option value="">Select a option</option>
                                                {
                                                    centers.map(
                                                        (center) => <option value={center.value}>{center.label}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Username or email *</label>
                                            <input type="text" class="form-control p_input" onChange={(e)=>{setusername(e.target.value)}}  />
                                        </div>
                                        <div class="form-group">
                                            <label>Password *</label>
                                            <input type="text" class="form-control p_input" onChange={(e)=>{setpassword(e.target.value)}} />
                                        </div>
                                        <div class="text-center d-grid gap-2">
                                            <button type="button" class="btn btn-primary btn-block enter-btn" onClick={check_login}>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Login;