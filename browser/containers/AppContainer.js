import React from 'react';
import GitRepos from '../components/GitRepos'
import Animated from 'animated'


export default class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'repos': [],
		}
	}

	render() {	
		return (
			<div>
				<p id="title" className="animated fadeIn" style={{marginTop: window.innerHeight/2 - 44, marginBottom: window.innerHeight/2 - 44}}>Danielle Westerman</p>
				<GitRepos />
				  <div className="wow fadeIn">
                  Content to Reveal Here
                  </div>
			</div>
		)
	}
}