import { useEffect, useState } from 'react';
import './Homepage.css';
import { json, useNavigate } from 'react-router-dom';

function Addstory() {

    const [addstory, setaddstory] = useState({image:"", addlocation:"", username:""});
    console.log(addstory, "addstory")

    const route = useNavigate();

    useEffect(() => {
        var currentuser = JSON.parse(localStorage.getItem("currentuser"));
        console.log(currentuser, "currentuser");

        if (currentuser){
          setaddstory({...addstory, ["username"]: currentuser.currentusername})
        }
        else{
            alert("login first");
            route('/');
        }
    }, [])

    function Addstory(e) {
       e.preventDefault();

    //    alert("working");

       var DataFromLS = JSON.parse(localStorage.getItem("Instagramuser"));
       console.log(DataFromLS, "DataFromLS")

       var currentuser = JSON.parse(localStorage.getItem("currentuser"));
       console.log(currentuser, "currentuser");

       var addstoryindb = JSON.parse(localStorage.getItem("instastory")) || [];
       console.log(addstory, "addstory");

      if(currentuser){
        for(var i=0; i < DataFromLS.length; i++){
            if(DataFromLS[i].email === currentuser['currentuseremail'] && DataFromLS[i].username === currentuser['currentusername']){
                var newObj = DataFromLS[i];
                newObj['userstory'] = newObj['userstory'] || [];
                newObj['userstory'].push(addstory);
                newObj = DataFromLS[i];
            }
        }
            var user = currentuser.currentusername;
            console.log(user, "user");
            localStorage.setItem("Instagramuser", JSON.stringify(DataFromLS));
            // setaddpostdata({ ...addpostdata, ["username"]: user })
            addstoryindb.push(addstory);
            localStorage.setItem("instastory", JSON.stringify(addstoryindb));
            setaddstory({image:"", addlocation:""});
            route('/homepage');
            alert("post added successfully")
      }
           

    }

    function updatingData(e) {
        // console.log(e.target.name, e.target.value);
        var name = e.target.name;
        var value= e.target.value;
        setaddstory({...addstory, [name]: value})
    }


    return (
        <div id="addpost-fullpage">
            <div id="addpost-page">
                <div id="addpost-page-heading">
                    <div id="addpost-post-f-item2">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <h4>Add a story</h4>
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
                        <div id="addpost-post-item7">
                            <button style={{ width: "30%" }} onClick={(e) => Addstory(e)}>Add story</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Addstory;