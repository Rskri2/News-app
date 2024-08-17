import  Navbar from './components/Navbar';
import News from './components/News';
import './App.css';
import React, {useState} from 'react'
import LoadingBar from 'react-top-loading-bar'
import{
  BrowserRouter as Router,
  Route,
  Routes
}from 'react-router-dom'

export default function App (props) {
  const pageSize =10
  const APIKey = process.env.REACT_APP_APIKEY;
  const [progress,setProgress]=useState(0)
    return (
      <>
      <Router>
        <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <Navbar/>
          <Routes>
              <Route exact path="/" element= {<News  key="general" setProgress={ setProgress} APIKey={APIKey} pageSize ={pageSize} country = "in" category ="general"/ >} >
              </Route>
              <Route exact path="/business" element= {<News  key="business" setProgress={ setProgress} APIKey={APIKey} pageSize ={pageSize} country = "in" category ="business"/ >} >
              </Route>
              <Route exact path="/entertainment" element= {<News  key="entertainment" setProgress={ setProgress} APIKey={APIKey} pageSize ={pageSize} country = "in" category ="entertainment"/ >} >
              </Route>
              <Route exact path="/general" element= {<News  key="general"setProgress={ setProgress} APIKey={APIKey} pageSize ={pageSize} country = "in" category ="general"/ >} >
              </Route>
              <Route exact path="/health" element= {<News  key="health" setProgress={ setProgress} APIKey={APIKey} pageSize ={pageSize} country = "in" category ="health"/ >} >
              </Route>
              <Route exact path="/science" element= {<News  key="science"setProgress={ setProgress} APIKey={APIKey} pageSize ={pageSize} country = "in" category ="science"/ >} >
              </Route>
              <Route exact path="/sports" element= {<News  key="sports" setProgress={ setProgress} APIKEY = {APIKey} pageSize ={pageSize} country = "in" category ="sports"/ >} >
              </Route>
              <Route exact path="/technology" element= {<News  key="technology" setProgress={ setProgress} APIKey={APIKey} pageSize ={pageSize} country = "in" category ="technology"/ >} >
              </Route>
          </Routes>
          
        </div>
      </Router>
      </>

    )
  
}






