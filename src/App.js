import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Users } from "./MyComponents/Users";
import { About } from "./MyComponents/About";
import { useState } from "react";
import { Form } from "./MyComponents/Form";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { message } from "antd";
function App() {

  //useState to update users array
  const [surveyRes, setSurveyRes] = useState([]);

  //Initialize user data
  useEffect(() => {
    getusers();
  }, [surveyRes]);

  const getusers = async () => {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    setSurveyRes(data);
  };

  //onDelete function use to DeleteUser
  const onDelete = (response) => {
    console.log("delete called", response);
    fetch(`http://localhost:8080/user/${response}`, {
      method: "DELETE",
    }).then((result) => {
      getusers();
    });
  };

  // addResonse use save User
  const addResponse = (name, city, role, que1, que2, que3) => {
    const myResponse = {
      name: name,
      city: city,
      role: role,
      que1: que1,
      que2: que2,
      que3: que3,
    };

    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myResponse),
    })
      .then((result) => {
        if (result.status === 200) {
          message.success("Thank You For Your Feedback!!");
        }
        getusers();
      })
      .then(() => {
        // window.location.replace("/users");
      });
  };

  return (
    <>
      <BrowserRouter>
        <Header title="Survey-Form" searchBar={false} />
        <Routes>
          <Route exact path="/"element= { <> <Form addResponse={addResponse} /> </> } />
          <Route exact path="/users" element={ <> <Users surveyRes={surveyRes} onDelete={onDelete} /> </> }/>
          <Route exact path="/about" element={ <> <About /> </> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
