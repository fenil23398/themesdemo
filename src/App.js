import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './vendor/fontawesome-free/css/all.min.css';
import './css/sb-admin-2.min.css';
import './scss/sb-admin-2.scss';
import { Switch,Route,Redirect,withRouter } from 'react-router-dom';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import Layout from './components/Layout/index';
import Charts from './components/Charts/index';
import FormIncome from './components/FormIncome/index';
import NotFound from './components/NotFound/index';
import GenerateLineChart from './components/LineChart/index';
// import { Provider } from 'react-redux';
// import { ConfigureStore } from './Redux/configureRedux';
 import { connect } from 'react-redux';
// const store=ConfigureStore();
class App extends Component {
  

  render() {

    return (
     
      // <Provider store={store}>
      <div className="App">
         {
              console.log("From React Router ",this.props)
        }
        {/* Starting of Copied index.html */}
        <div id="page-top">
          {/* Page Wrapper */}
          <div id="wrapper">
            
            {/* Sidebar */}
            <Sidebar />
            {/* End of Sidebar */}

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

              {/* Main Content */}
              <div id="content">

                {/* Topbar */}
                <Header />
                {/* End of Topbar */}
                {/* <Layout /> */}
                {/* pagwghjsvds d */}
              
                <Switch>
                    <Route exact path='/home' component={Layout} />
                    {/* The below Route is to pass Props */}
                    <Route exact path='/form1' component={()=><FormIncome />} />
                     <Route path='/notFound' component={NotFound} /> 
                     <Route path='/charts' component={Charts} />
                    <Redirect to="/home" />
                </Switch>

              </div>
              {/* End of Main Content */}
                <Footer />
              {/* End of Footer */}

            </div>
            {/* End of Content Wrapper */}

          </div>
          {/* End of Page Wrapper */}

          {/* Scroll to Top Button*/}
        </div>
      </div>
     // </Provider>
    );
  }
}
const mapStateToProps = state => {
  console.log("Inside map state to props state ",state)
    return {
      linedata : state.linedData
    }
}
export default withRouter(connect(mapStateToProps)(App));

