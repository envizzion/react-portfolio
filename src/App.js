import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Adds from "./Components/Adds";
import firebase from "./Firebase";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: { 
                    main : '',
                    resume : '',
                    portfolio : '',
                    adds: '',
                  }
    
    };

    this.ref = firebase.firestore().collection("details");
    this.unsubscribe = null;

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    // querySnapshot.forEach((doc) => {
    //   const { title, description, author } = doc.data();
    //   boards.push({
    //     key: doc.id,
    //     doc, // DocumentSnapshot
    //     title,
    //     description,
    //     author,
    //   });
    // });
  };

  getAllData() {
    
    var state = this.state;
    var self = this;  
     

    this.ref
      .doc("main")
      .get()
      .then(function (doc) {

          // console.log("Document data:", doc.data());
        state.resumeData.main=doc.data();
        self.setState(state);

      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    this.ref
      .doc("resume")
      .get()
      .then(function (doc) {
      
          // console.log("Document data:", doc.data());
          state.resumeData.resume=doc.data();
          self.setState(state);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    this.ref
      .doc("portfolio")
      .get()
      .then(function (doc) {
       
          // console.log("Document data:", doc.data());
          state.resumeData.portfolio =doc.data() ;
          self.setState(state);


      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

      this.ref
      .doc("adds")
      .get()
      .then(function (doc) {
       
          // console.log("Document data:", doc.data());
          state.resumeData.adds =doc.data() ;
          self.setState(state);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
      
  }

  saveAllData() {
    this.ref
      .doc("main")
      .set(this.state.resumeData.main)
      .then(function () {
        console.log("Document successfully written!");
      });
    this.ref
      .doc("resume")
      .set(this.state.resumeData.resume)
      .then(function () {
        console.log("Document successfully written!");
      });
    this.ref
      .doc("portfolio")
      .set(this.state.resumeData.portfolio)
      .then(function () {
        console.log("Document successfully written!");
      });
      
      this.ref
      .doc("adds")
      .set(this.state.resumeData.adds)
      .then(function () {
        console.log("Document successfully written!");
      })
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
        this.saveAllData() ;
        
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    //  this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    //this.saveAllData(); 
    this.getAllData();
    // this.getResumeData();
  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Adds data={this.state.resumeData.adds} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
