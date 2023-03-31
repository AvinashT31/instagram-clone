import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'


function Signup() {

    const [userData, setuserData] = useState({email:"", name:"", username:"", password:""});
    console.log(userData, "userData")

    const route = useNavigate();

    function signup (e){

        e.preventDefault();

        var DataFromLS = JSON.parse(localStorage.getItem("Instagramuser")) || [];
        console.log(DataFromLS, "DataFromLS")

        var flag = false;

        for(var i=0; i < DataFromLS.length; i++){
            if(DataFromLS[i].email === userData.email && DataFromLS[i].username === userData.username){
                flag = true;
            }
        }
        if(flag){
            alert("email or username is already present")
        }
        else if(userData.password < 8){
            alert("password must have 8 digit")
        }
        else{
            DataFromLS.push(userData);
            localStorage.setItem("Instagramuser", JSON.stringify(DataFromLS));
            setuserData({email:"", name:"", username:"", password:""});
            alert("signup successfully");
            route('/login');
        }
    }


    function updatingData(e){
        var name = e.target.name;
        var value = e.target.value;
        setuserData({...userData, [name]: value})
        // console.log(e.target.name, e.target.value);
    }

    return (
        <div id='signup-fullpage'>
            <div id='signup'>
                <div id='signup-one'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png" alt="" />
                </div>
                <div id='signup-content-info'>
                    <p>Sign up to see photos and videos from your friends.</p>
                </div>
                <div id='signup-five'>
                    <div id='signup-five-one'>
                        <div id='signup-five-f-one'>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div id='signup-five-f-two'>
                            <p>Log in with facebook</p>
                        </div>
                    </div>
                </div>
                    <div id='signup-three'>
                        <fieldset>
                            <legend>OR</legend>
                        </fieldset>
                    </div>
                    <div id='signup-two'>
                        <form onSubmit={(e) => signup(e)}>
                            <input onChange={updatingData} name='email' type="email" placeholder='Enter your Email' />
                            <br />
                            <input onChange={updatingData} name='name' type="text" placeholder='Enter your Full Name' />
                            <br />
                            <input onChange={updatingData} name='username' type="text" placeholder='Enter your username' />
                            <br />
                            <input onChange={updatingData} name='password' type="Password" placeholder='Enter your password' />
                            <br />
                            <div id='signup-four'>
                                <p>People who use our service may have uploaded your contact information to Instagram. Learn more</p>
                            </div>
                            <div id='signup-content'>
                                <p>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                            </div>
                            <input type="submit" value="Signup" />
                        </form>
                    </div>
            </div>
        </div>

)

}
export default Signup;