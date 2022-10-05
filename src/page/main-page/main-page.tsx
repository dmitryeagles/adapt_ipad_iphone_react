import React from "react"
import { IconsWrapper } from "../icons-wrapper";
import { BottomIcons } from "../icons-wrapper/bottom-icons-wrapper";
import "./main-page.scss";



export const MainPage = () => {
  let Data = new Date();
  let Time = (Data.getHours() + ":" + Data.getMinutes())
  

  return (
    <div className="main">
      <div className="container">
        <div className="homeScreenBackground">
          <div className="date">
            {Time}
          </div>
          <div className="IconsWrapper">
            <IconsWrapper/>
          </div>
          <div className="bottomWrapper">
            <BottomIcons/>
          </div>
        </div>
      </div>
    </div>
  );
};
