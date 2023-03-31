import Sidebar from "./Sidebar";
import './Homepage.css'
import { useEffect, useState } from "react";
import { json } from "react-router-dom";


function Homapage() {

   const[displaypost, setdisplaypost] = useState();
   console.log(displaypost, "displaypost");

   useEffect(() => {

      var AlldataDisplay = JSON.parse(localStorage.getItem("postingData"));
      console.log(AlldataDisplay, "AlldataDisplay")
      setdisplaypost(AlldataDisplay);
   }, [])

   return (
      <div id="homepage">
         <div id="homepage-section-one">
            <Sidebar />
         </div>
         <div id="homepage-section-two">
            <div id="homepage-section-two-item">
               <div id="homepage-section-two-f-item">
                  <img src="https://cdn.pixabay.com/photo/2015/05/13/13/53/skull-765477_960_720.jpg" alt="pro-pic" />
               </div>
               <div id="homepage-section-two-f-item">
                  <img src="https://cdn.pixabay.com/photo/2018/02/01/17/09/man-3123561__340.jpg" alt="pro-pic" />
               </div>
               <div id="homepage-section-two-f-item">
                  <img src="https://cdn.pixabay.com/photo/2015/05/13/13/53/skull-765477_960_720.jpg" alt="pro-pic" />
               </div>
               <div id="homepage-section-two-f-item">
                  <img src="https://cdn.pixabay.com/photo/2018/02/01/17/09/man-3123561__340.jpg" alt="pro-pic" />
               </div>
               <div id="homepage-section-two-f-item">
                  <img src="https://cdn.pixabay.com/photo/2015/05/13/13/53/skull-765477_960_720.jpg" alt="pro-pic" />
               </div>
               <div id="homepage-section-two-f-item">
                  <img src="https://cdn.pixabay.com/photo/2018/02/01/17/09/man-3123561__340.jpg" alt="pro-pic" />
               </div>
               <div id="homepage-section-two-f-item">
                  <img src="https://cdn.pixabay.com/photo/2015/05/13/13/53/skull-765477_960_720.jpg" alt="pro-pic" />
               </div>
            </div>
            <div id="homepage-section-two-item1">
            {displaypost && displaypost.map((e, i) => (
                        <div key="i">
                            <p>{e.username}</p>
                            <br />
                            <img src={e.image} alt="" />
                            <p>{e.addcaption}</p>
                        </div>
                    ))}
            </div>
         </div>
         <div id="homepage-section-three">

         </div>


      </div>
   )

}
export default Homapage;