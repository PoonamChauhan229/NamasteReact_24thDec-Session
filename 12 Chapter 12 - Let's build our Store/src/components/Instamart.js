import React, { useState } from "react";

const Section = ({ title, desc,isVisible,setIsVisible }) => {

  return (
    <div style={{ border: "1px solid black", marginBottom: "5px" }}>
      <h3>{title}</h3>
      <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?"Hide":"Show"}</button>

      {isVisible && <p>{desc}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection,setVisibleSection] =useState("")
  return (
    <div>
      <h3>Instamart</h3>
      <Section
        title={"About Instamart"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto error voluptatibus perferendis fugit nobis, sit aut corporis exercitationem esse rerum sed repudiandae placeat! Quod minima nemo soluta error, iusto deleniti!"
        }
        isVisible={visibleSection=="about"}
        setIsVisible={(value)=>{
          console.log(value)
          value?setVisibleSection("about"):setVisibleSection("")}}
      />
      <Section
        title={"Team Instamart"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto error voluptatibus perferendis fugit nobis, sit aut corporis exercitationem esse rerum sed repudiandae placeat! Quod minima nemo soluta error, iusto deleniti!"
        }
        isVisible={visibleSection=="team"}
        setIsVisible={(value)=>{
          console.log(value)
          value?setVisibleSection("team"):setVisibleSection("")}}

      />
      <Section
        title={"Careers"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto error voluptatibus perferendis fugit nobis, sit aut corporis exercitationem esse rerum sed repudiandae placeat! Quod minima nemo soluta error, iusto deleniti!"
        }
        isVisible={visibleSection=="careers"}
        setIsVisible={(value)=>{
          console.log(value)
          value?setVisibleSection("careers"):setVisibleSection("")}}
      />
    </div>
  );
};

export default Instamart;
