import { useEffect, useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import './Homepage.css'


function Addpost() {

    const [addpostdata, setaddpostdata] = useState({ addcaption: "", image: "", username: "", addlocation: "" });
    console.log(addpostdata, "addpostdata")
    
    const route =useNavigate();

    useEffect(() => {

        var currentuser = JSON.parse(localStorage.getItem("currentuser"));
        console.log(currentuser, "currentuser");

        if (currentuser){
          setaddpostdata({...addpostdata, ["username"]: currentuser.currentusername})
        }
        else{
            alert('login first')
            // route('/login');
        }

    }, [])

    // console.log(addpostdata, "heree");

    function Addpost(e) {
        e.preventDefault();
        // alert("working");

        var DataFromLS = JSON.parse(localStorage.getItem("Instagramuser"));
        console.log(DataFromLS, "DataFromLS");

        var currentuser = JSON.parse(localStorage.getItem("currentuser"));
        console.log(currentuser, "currentuser");

        var overallposting = JSON.parse(localStorage.getItem("postingData")) || [];
        console.log(overallposting, "overallposting");


        if (currentuser) {
            for (var i = 0; i < DataFromLS.length; i++) {
                if (DataFromLS[i].email === currentuser["currentuseremail"] && DataFromLS[i].username === currentuser["currentusername"]) {
                    var newObj = DataFromLS[i];
                    newObj["userpost"] = newObj["userpost"] || [];
                    newObj["userpost"].push(addpostdata);
                    DataFromLS[i] = newObj;
                }
            }
            var user = currentuser.currentusername;
            console.log(user, "user");
            localStorage.setItem("Instagramuser", JSON.stringify(DataFromLS));
            // setaddpostdata({ ...addpostdata, ["username"]: user })
            overallposting.push(addpostdata);
            localStorage.setItem("postingData", JSON.stringify(overallposting));
            setaddpostdata({ addcaption: "", image: "", username: "", addlocation: "" });
            route('/homepage');
            alert("post added successfully")
        }

    }

    function updatingData(e) {
        console.log(e.target.name, e.target.value);
        var name = e.target.name;
        var value = e.target.value;
        setaddpostdata({ ...addpostdata, [name]: value });

    }


    return (
        <div id="addpost-fullpage">
            <div id="addpost-page">
                <div id="addpost-page-heading">
                    <div id="addpost-post-f-item2">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <h4>Create a post</h4>
                    <div id="addpost-post-f-item3">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div id="addpost-post-second">
                    <div id="addpost-post-f-item">
                        <img src="https://embedsocial.com/wp-content/uploads/2020/10/add-links-instagram-posts.jpg.webp" alt="" />
                    </div>
                    <div id="addpost-post-f-item1">
                        <div id="addpost-post-item">
                            <div id="addpost-post-f2-item">

                            </div>
                            <div id="addpost-post-f3-item">
                                <p>Avinash</p>
                            </div>
                        </div>
                        <div id="addpost-post-item2">
                            <input onChange={updatingData} type="text" name="addcaption" placeholder="Add caption" />
                        </div>
                        <div id="addpost-post-item3">
                            <input onChange={updatingData} type="text" name="image" placeholder="Image URL" />
                        </div>
                        <div id="addpost-post-item4">
                            <div id="addpost-post-f4-item">
                                <input onChange={updatingData} type="text" name="addlocation" placeholder="Add Location" />
                            </div>
                            <div id="addpost-post-f5-item">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                        </div>
                        <div id="addpost-post-item5">
                            <div id="addpost-post-f6-item">
                                <input onChange={updatingData} type="text" name="accessability" placeholder="Accessability" />
                            </div>
                            <div id="addpost-post-f7-item">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>
                        </div>
                        <div id="addpost-post-item6">
                            <div id="addpost-post-f8-item">
                                <input onChange={updatingData} type="text" name="adavancedsetting" placeholder="Addvacned setting" />
                            </div>
                            <div id="addpost-post-f9-item">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>
                        </div>
                        <div id="addpost-post-item7">
                            <button onClick={(e) => Addpost(e)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Addpost;