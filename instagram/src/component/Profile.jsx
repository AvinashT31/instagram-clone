import Sidebar from './Sidebar';
import './Homepage.css';
import { useEffect, useReducer, useState } from 'react';
import reducer, { initialState } from '../Reducer.js/ReducerB';

function Profile() {


    const [displaypost, setdisplaypost] = useState();
    console.log(displaypost, "displaypost");

    var DataFromLS = JSON.parse(localStorage.getItem("Instagramuser"));
    console.log(DataFromLS, "DataFromLS");

    var currentuser = JSON.parse(localStorage.getItem("currentuser"));
    console.log(currentuser, "currentuser");

    useEffect(() => {
        for (var i = 0; i < DataFromLS.length; i++) {
            if (DataFromLS[i].email === currentuser["currentuseremail"] && DataFromLS[i].userpost) {
                setdisplaypost(DataFromLS[i].userpost)
            }
        } console.log(displaypost, "hello")
    }, [])


    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, "state");
    console.log(dispatch, "dispatch");

    

    return (
        <div id='profile-main'>
            <div id='profile-main-left'>
                <Sidebar />
            </div>
            <div id='profile-main-right'>
                <div id='profile-header'>
                    <div id='profile-pic'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsCEuH0O_1uO8bLJwYAqFo-T-OAcGcTAzHw&usqp=CAU" alt="" />
                    </div>
                    <div id='profile-pic-content'>
                        <div id='profile-pic-username-content'>
                            <div id='profile-pc-u'>
                                <p>Useraname</p>
                            </div>
                            <div id='prfile-pic-p'>
                                <button>Edit Profile</button>
                            </div>
                            <div id='profile-pic-i'>
                                <i class="fa-solid fa-gear"></i>
                            </div>
                        </div>
                        <div id='profile-pic-followers'>
                            <p>28 posts</p>
                            <p>250 Followers</p>
                            <p>116 Following</p>
                        </div>
                    </div>
                </div>
                <div id='profile-main-bottom'>

                </div>
                <div id='profile-main-footer'>
                    {displaypost && displaypost.map((e, i) => (
                        <div id='displayimage' key={i}>
                            <img src={e.image} alt="posts" />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )

}
export default Profile;