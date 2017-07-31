import React from 'react';

export default () => {
 
  return (
    <div style={{marginTop: 20, marginBottom: 20}}>
      <p className="sectionTitle wow zoomIn">Featured Projects</p>
      <div className='row'>
      <div className='container'>

        <div className="col-md-4">
            <div className="panel panel-default featuredProj">
              <div className="panel-body">
              <p className="featuredTitle">I (AR)t NY</p>
                <div className="row" style={{marginBottom: 10}}>
                  <span className="featuredLinks col-md-6">
                    <a href='https://www.youtube.com/watch?v=Cal59NL6_0c'>Demo</a>
                  </span>
                  <span className="featuredLinks col-md-6">
                    <a target="_blank" href='https://github.com/jhoscar1/capstone'>Github</a>
                  </span>
                </div>
              <ul className='list'>
                <li>
                  Augmented-reality mobile app for iOS and Android that shows you the city's public art as you walk through the city.
                </li>
                <li>
                  Built using React-Native with a Firebase datastore filled with NYC Parks Dept data
                </li>
                <li>
                  Uses geolocation and compass/gyroscopic data to overlay information about nearby installations in the Camera View
                </li>
                <li>
                  Map View displays all points of interest across all 5 boroughs
                </li>
                <li>
                  Includes real-time Likes, list of My Favorites, and browsing by most popular
                </li>
              </ul>
              <p className="featuredLinks">
                4-week Capstone project at Fullstack Academy<br/>Teammates: <a href='https://github.com/christiancw'>Christian</a>, <a href='https://github.com/phoyt1'>Pat</a>, & <a href='https://github.com/jhoscar1'>Jason</a>
              </p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="panel panel-default featuredProj">
              <div className="panel-body featuredProjContainer">
              <p className="featuredTitle">Pisces Aquascaping</p>
                <div className="row" style={{marginBottom: 10}}>
                  <span className="featuredLinks col-md-6">
                    <a target="_blank" href='https://piscesaquascaping.herokuapp.com/'>Deployed</a>
                  </span>
                  <span className="featuredLinks col-md-6">
                    <a href='https://github.com/elinemzer/grace-shopper'>Github</a>
                  </span>
                </div>
              <ul className='list'>
                <li>
                  Mock e-commerce website selling fish including full checkout workflow
                </li>
                <li>
                  Built using Express server back-end, PostgreSQL Sequelize datastore, and React-Redux front-end 
                </li>
                <li>
                  Supports external Google authentication for both basic and admin users. Admin users have expanded functionality to manage inventory and orders
                </li>
                <li>
                  Users can search and browse fish by category, leave reviews once logged in, and manage their account information
                </li>
              </ul>
              <p className="featuredLinks">
                2-week "Grace Shopper" project at Fullstack Academy<br/>Teammates: <a href='https://github.com/elinemzer'>Eli</a>, <a href='https://github.com/J-Wicks'>Jeremy</a>, & <a href='https://github.com/emilyacres'>Emily</a>
              </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="panel panel-default featuredProj">
              <div className="panel-body">
              <p className="featuredTitle">Live2Eat</p>
                <div className="row" style={{marginBottom: 10}}>
                  <span className="featuredLinks col-md-6">
                    <a href='https://live2eat.herokuapp.com/'>Deployed</a>
                  </span>
                  <span className="featuredLinks col-md-6">
                    <a target="_blank" href='https://github.com/dweste01/stackathon'>Github</a>
                  </span>
                </div>
              <ul className='list'>
                <li>
                  Single-page web application that aggregates reviews for nearby restaurants based on price and delivery presets
                </li>
                <li>
                  Built using Express server back-end and React-Redux front-end; utilizes Google Maps, Google Places, and Yelp APIs
                </li>
                <li>
                  Custom map markers color-coded by price
                </li>
                <li>
                  Provides overall restaurant ratings based on Google and Yelp reviews
                </li>
                <li>
                  Restaurants shown based on user's choice of 'delivery only' or 'all restaurants', and minimum and maximum price
                </li>
              </ul>
              <br/>
              <p className="featuredLinks">
                3-day solo Hackathon project at Fullstack Academy
              </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}