import { useState } from "react";

const Section = ({ title, description,isVisible,setisVisible}) => {
  
  return (
    <div style={{ border: "1px solid black", marginBottom: "5px" }}>
      <h3>{title}</h3>
      <button onClick={() => {
        setisVisible(!isVisible)
        console.log(isVisible)
        }}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection,setVisibleSection]=useState("")
  return (
    <>
      <h1>Instamart</h1>
      <h2>100 of components inside it</h2>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
        isVisible={visibleSection==="about"}
        setisVisible={(value)=>{
          console.log(value)
          value?setVisibleSection("about"):setVisibleSection("")
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
        isVisible={visibleSection==="team"}
        setisVisible={(value)=>{
          console.log(value)
          value?setVisibleSection("team"):setVisibleSection("")
        }}
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
        isVisible={visibleSection==="careers"}
        setisVisible={(value)=>{
          console.log(value)
          value?setVisibleSection("careers"):setVisibleSection("")
        }}
      />
    </>
  );
};
export default Instamart;
