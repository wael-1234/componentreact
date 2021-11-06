import React from "react";
import './App.css';
import ProfileAdresse from "./Component/Profile/ProfileAdresse";
import ProfileName from "./Component/Profile/ProfileName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

const App = () => (
 <>
   <ProfilePhoto />
   <ProfileName/>
   <ProfileAdresse/>
 </>
);
export default App;