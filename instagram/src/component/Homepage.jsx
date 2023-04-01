import Sidebar from "./Sidebar";
import './Homepage.css'
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
// import Addstory from "./Addstory";


function Homapage() {

   const [displaypost, setdisplaypost] = useState();
   console.log(displaypost, "displaypost");

   const [displaystory, setdisplaystory] = useState();
   console.log(displaystory, "displaystory");

   const route = useNavigate();

   function instastory() {
      route('/Addstory');
   }

   useEffect(() => {

      var AlldataDisplay = JSON.parse(localStorage.getItem("postingData"));
      console.log(AlldataDisplay, "AlldataDisplay")
      setdisplaypost(AlldataDisplay);
   }, [])


   useEffect(() => {

      var instastory = JSON.parse(localStorage.getItem("instastory"));
      console.log(instastory, "instastory");
      setdisplaystory(instastory);
   }, [])
   console.log(displaystory, "hello")

   return (
      <div id="homepage">
         <div id="homepage-section-one">
            <Sidebar />
         </div>
         <div id="homepage-section-two">

            <div id="homepage-section-two-item">
               <div id="homepage-section-twos" >
                  <button onClick={instastory}><div id="homepage-user-story">
                     <img src="https://tse1.mm.bing.net/th?id=OIP.oVnMcynepHTJgMoNTkbw-gHaHa&pid=Api&P=0" alt="" />
                  </div></button>
                  <div id="hompage-user-stories">
                     {displaystory && displaystory.map((e, i) => (
                        <div>
                           <div id="homepage-display-story">
                              <img src={e.image} />
                           </div>
                           <div>
                              <p>{e.username}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div id="homepage-section-two-item1">
               {displaypost && displaypost.map((e, i) => (
                  <div id="homepage-display" key="i">
                     <div id="homepage-display-username">
                        <p>{e.username}</p>
                        <i class="fa-solid fa-ellipsis"></i>
                     </div>
                     <div id="homepage-display-image">
                        <img src={e.image} alt="" />
                     </div>
                     <div id="homepage-display-icons">
                        <div id="homepage-display-icons-i">
                           <i class="fa-regular fa-heart"></i>
                           <i class="fa-regular fa-comment"></i>
                           <i class="fa-regular fa-paper-plane"></i>
                        </div>
                        <div id="homepage-display-icons-i2">
                           <i class="fa-regular fa-bookmark"></i>
                        </div>
                     </div>
                     <div id="homepage-display-caption">
                        <p>{e.addcaption}</p>
                     </div>
                     <div id="homepage-display-comment">
                        <div id="homepage-display-comment-input">
                           <input type="text" placeholder="Add a comment..." />
                        </div>
                        <div id="homepage-display-comment-i">
                           <i class="fa-regular fa-face-smile"></i>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div id="homepage-section-three">
            <div id="homepage-section-three-item">
               <div id="homepage-section-three-item1">
                  <div id="homepage-section-three-div">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsCEuH0O_1uO8bLJwYAqFo-T-OAcGcTAzHw&usqp=CAU" alt="" />
                  </div>
                  <div id="homepage-section-three-username">
                     <p>username</p>
                     <p>Avinash Thorat</p>
                  </div>
               </div>
               <div id="homepage-section-three-item2">
                  <p>Suggestion for you</p>
               </div>
               <div id="homepage-section-three-item3">
                  <div id="homepage-section-three3-div">
                     <img src="data:image/jpeg;base64,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" alt="" />
                  </div>
                  <div id="homepage-section-three3-username">
                     <p>navtrun mitra mandal</p>
                     <p>followed by avinash thorat</p>
                  </div>
               </div>
               <div id="homepage-section-three-item3">
                  <div id="homepage-section-three3-div">
                     <img src="data:image/jpeg;base64,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" alt="" />
                  </div>
                  <div id="homepage-section-three3-username">
                     <p>navtrun mitra mandal</p>
                     <p>followed by avinash thorat</p>
                  </div>
               </div>
               <div id="homepage-section-three-item3">
                  <div id="homepage-section-three3-div">
                     <img src="data:image/jpeg;base64,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" alt="" />
                  </div>
                  <div id="homepage-section-three3-username">
                     <p>navtrun mitra mandal</p>
                     <p>followed by avinash thorat</p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}
export default Homapage;