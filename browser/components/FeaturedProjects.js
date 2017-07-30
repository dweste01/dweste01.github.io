import React from 'react';

export default class FeaturedProjects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"repos": []
		}
	}

	render() {	
		return (
			<div>
				<p id="github" className="wow zoomIn">Featured Projects</p>
				<div className='row'>
				<div className='container'>



						<div className="col-md-4">
							<div className="panel panel-default" style={{width: window.innerWidth/4}}>
							  <div className="panel-body">
								<p className="featuredTitle">
									<a target="_blank" href='https://github.com/jhoscar1/capstone'>
										I (AR)t NY
									</a>
								</p>
								<p className="featuredDemo">
									<a href='https://www.youtube.com/watch?v=Cal59NL6_0c'>
										Demo
									</a>
								</p>
								<ul className='list'>
									<li>
										Augmented-reality mobile app for iOS and Android that shows you the city's public art as you walk through the city.
									</li>
									<li>
										Built using React-Native with a Firebase data store (filled with public data from NYC Parks Dept)
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
								<p className="featuredDemo">
									Capstone project at Fullstack Academy with teammates <a href='https://github.com/christiancw'>Christian</a>, <a href='https://github.com/phoyt1'>Pat</a>, and <a href='https://github.com/jhoscar1'>Jason</a>.
								</p>
							  </div>
							</div>
						</div>


						<div className="col-md-4">
							<div className="panel panel-default" style={{width: window.innerWidth/4}}>
							  <div className="panel-body">
								<p className="featuredTitle">
									<a target="_blank" href='https://piscesaquascaping.herokuapp.com/'>
										Pisces Aquascaping <span style={{fontSize: 12}}>(deployed)</span>
									</a>
								</p>
								<p className="featuredDemo">
									<a href='https://github.com/elinemzer/grace-shopper'>
										Github
									</a>
								</p>
								<ul className='list'>
									<li>
										Augmented-reality mobile app for iOS and Android that shows you the city's public art as you walk through the city.
									</li>
									<li>
										Built using React-Native with a Firebase data store (filled with public data from NYC Parks Dept)
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
								<p className="featuredDemo">
									Capstone project at Fullstack Academy with teammates <a href='https://github.com/christiancw'>Christian</a>, <a href='https://github.com/phoyt1'>Pat</a>, and <a href='https://github.com/jhoscar1'>Jason</a>.
								</p>
							  </div>
							</div>
						</div>






				</div>
				</div>
			</div>
		)
	}
}