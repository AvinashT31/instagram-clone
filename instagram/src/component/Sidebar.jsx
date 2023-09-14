import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'




function Sidebar() {

    const route = useNavigate();

    function login(){
        // setcurrentuser(true);
        route('/login');
    }

    function calledaddpost(){
        route('/addpost')
    }

    function calledprofile(){
        route('/profile')
    }

    function calledhome(){
        route('/homepage')
    }

    const [currentuser, setcurrentuser] = useState(false);
    console.log(currentuser, "currentuser")

    useEffect(() => {

        var DataFromLS = JSON.parse(localStorage.getItem("currentuser"));
         console.log(DataFromLS, "DataFromLS")

        if(DataFromLS){
            setcurrentuser(true);
        }
        console.log(currentuser, "hello")
    }, [])

    function logout(){
        localStorage.removeItem("currentuser");
        alert("logout successfully")
        route('/')
    }
    
    return (
        <div id='sidebar-full'>
            <div id="sidebar">
                <div id='sidebar-logo'>
                    <div id='sidebar-logo-section'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png" alt="" />
                    </div>
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-solid fa-house"></i>
                   <button onClick={calledhome}><p>Home</p></button> 
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>Search</p>
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-regular fa-compass"></i>
                    <p>Explore</p>
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-solid fa-camera-retro"></i>
                    <p>Reels</p>
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-solid fa-message"></i>
                    <p>Message</p>
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-solid fa-bell"></i>
                    <p>Notification</p>
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-solid fa-plus"></i>
                    <button onClick={calledaddpost}><p>Create</p></button>
                </div>
                <div id='sidebar-mid-section'>
                    <i class="fa-regular fa-user"></i>
                    <button onClick={calledprofile}><p>Profile</p></button>
                </div>
                <div id='sidebar-bottom-section'>
                  { currentuser ? <button onClick={logout}>logout</button> :
                  <button onClick={login}>Login</button> }
                </div>
                
            </div>

        </div>

    )

}
export default Sidebar;