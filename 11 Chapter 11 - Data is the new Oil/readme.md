Data layer :
Ui Layer:

babel converts to JSX converte by react into JS object

Big structure is known as Virtual DOM
Role of VDOM = for reconcillation

Props drilling :
10 layers passig data is not good
it makes our code cluttered

Download React Developer Tools chrome extension:


Differenet Sections Need to create inside Instamart:
and create show and hide 
import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setisVisible] = useState(true);
  return (
    <div style={{ border: "1px solid black", marginBottom: "5px" }}>
      <h3>{title}</h3>
      <button onClick={() => setisVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <>
      <h1>Instamart</h1>
      <h2>100 of components inside it</h2>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
      />
    </>
  );
};
export default Instamart;

Build an Accordion
Feature:
click on show ... other accordians should collapse
it should open 1 at a time
build an collapsable accordion

For this we can maintain the state by its parent and let the parent have control over it

If parent maintains the state so every children ont have it

Lifting the state up:
import { useState } from "react";

const Section = ({ title, description,isVisible,setisVisible }) => {
  
  return (
    <div style={{ border: "1px solid black", marginBottom: "5px" }}>
      <h3>{title}</h3>
      <button onClick={() => setisVisible(true)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig,setSectionConfig]=useState({
    showAbout:false,
    showTeam:false,
    showCareers:false
  })
  return (
    <>
      <h1>Instamart</h1>
      <h2>100 of components inside it</h2>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
        isVisible={sectionConfig.showAbout}
        setisVisible={()=>{
          setSectionConfig({
            showAbout:true,
            showTeam:false,
            showCareers:false})
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
        isVisible={sectionConfig.showTeam}
        setisVisible={()=>{
          setSectionConfig({
            showAbout:false,
            showTeam:true,
            showCareers:false})
        }}
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corporis nesciunt esse consequatur! Vitae ut architecto pariatur autem cum nam!"
        }
        isVisible={setSectionConfig.showCareers}
        setisVisible={()=>{
          setSectionConfig({
            showAbout:false,
            showTeam:false,
            showCareers:true})
        }}
      />
    </>
  );
};
export default Instamart;


Optimize this.
We just need to crack just what i need to show.


UseContext:
Want some peice of code to be accessible anywhere in app.
A central placr where we keep things
What we will do we will create a Context.

undex utilis
Create file UserContext.js
1-import createContext
//createContext is a function which takes the data which we need all across the function
2-call the createContext function
const UserContext=createContext({
    name:"DummyName",
    email:"dummy@gmail.com"
})
3-export default 

<!-- Next how will we use the Context data into ur components -->
4-import useContext from react
//createcontext to create the context
//useContext to use the context
=>useContext is a hook and end of the hook is a function
5-const {user}=useContext()
6-import UserContext in Header.js


State & Props: is tied to a component
Context is not tied to any component and we can keep n central place so its an central store

Context is lik useState for whole ig application
We can use context whereever we wish to.

Now, i dont want a dummy name.
i want an actual authentication
authenticate the userinfo get it and pass it to the context

lets go the API call
App.js







