import "./lists.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import { useState } from "react";

const Lists = (index) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = 'https://www.youtube.com/shorts/ZxTpm_0Bh-8'
  return (
 
    <div
      className="lists"
      style={{left: isHovered && index * 225 -50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1542840843-3349799cded6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt="lists"
      />

     {isHovered && (
           <>
      <video src={trailer} autoPlay ={true} loop></video>

      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon  className="icon"/>
          <AddIcon  className="icon"/>
          <ThumbUpAltOutlinedIcon className="icon" />
          <ThumbDownOutlinedIcon className="icon" />
        </div>

        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>

        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsam
          tempora ab, qui mollitia iure neque quo quidem, d
        </div>

        <div className="genre">
            Action
        </div>
      </div>
        </>
      )}
    </div>
  
  );
};

export default Lists;
