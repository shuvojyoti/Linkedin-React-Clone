import React from "react";
import "./widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("Shuvo is back", "Top news - 950 readers")}
      {newsArticle("Tesla hits high", "Cars and Auto - 981 readers")}
      {newsArticle("Corona Virus Updates", "Trending - 1200 readers")}
    </div>
  );
}

export default Widgets;
