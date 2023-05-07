import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
// import React {useReducer} from "react";
import reducer, { initialState } from "../Reducer.js/ReducerB";

function Login() {

    const route = useNavigate();

    function Called() {
        route('/signup');
    }

    const [ loginData, setloginData] = useState({email:"", username:"", password:""});
    console.log(loginData, "loginData")

    const[state, dispatch] = useReducer(reducer, initialState);
    // console.log(state, "state");
    // console.log(dispatch, "dispatch");

    function login(e) {
        e.preventDefault();
        // alert("working")

        var DataFromLS = JSON.parse(localStorage.getItem("Instagramuser"));
        console.log(DataFromLS, "DataFromLS");


        var flag = false;

        for(var i=0; i < DataFromLS.length; i++){
            if(DataFromLS[i].email === loginData.email && DataFromLS[i].username === loginData.username && DataFromLS[i].password === loginData.password){
                flag = true;
            }
        }
        if(flag){
            var user =  {};
            user["currentuseremail"] = loginData.email
            user["currentusername"] = loginData.username;
            console.log(user, "user")
            localStorage.setItem("currentuser", JSON.stringify(user));
            setloginData({email:"", username:"", password:""});
            // dispatch({type:'changed_name'})
            alert("login successfully");
            route('/homepage');
        }
        else{
            alert("please check your credentials")
        }
    }

    function updatingData(e) {
        console.log(e.target.name, e.target.value);
        var name = e.target.name;
        var value = e.target.value;
        setloginData({...loginData, [name]: value});
    }


    return (
        <div id='log-fullpage'>
            <div id='logged'>
                <div id='logged-one'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png" alt="" />
                </div>
                <div id='logged-two'>
                    <form onSubmit={(e) => login(e)}>
                        <input onChange={updatingData} name='email' type="email" value={loginData.email} placeholder='Enter your Email' />
                        <br />
                        <input onChange={updatingData} name='username' type="text" value={loginData.username} placeholder='Enter your username' />
                        <br />
                        <input onChange={updatingData} name='password' type="Password" value={loginData.password} placeholder='Enter your password' />
                        <br />
                        <input type="submit" value="Log In" />
                        <h1>{state.name}</h1>
                    </form>
                </div>
                <div id='logged-three'>
                    <fieldset>
                        <legend>OR</legend>
                    </fieldset>
                </div>
                <div id='logged-four'>
                    <div id='logged-four-one'>
                        <div id='logged-four-f-one'>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div id='logged-four-f-two'>
                            <p>Log in with facebook</p>
                        </div>
                    </div>
                    <div id='logged-four-two'>
                        <p>Forgotten your password?</p>
                    </div>
                </div>
            </div>
            <div id='logged-content'>
                <p>Don't have an account?</p>
                <button onClick={Called}>sign up</button>
            </div>
            <div id='logged-content-info'>
                <div>
                    <p>Get an App</p>
                </div>
                <div id='logged-content-infos'>
                    <div id='logged-content-info-one'>
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                    </div>
                    <div id='logged-content-info-two'>
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Login;