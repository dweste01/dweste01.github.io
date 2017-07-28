import React from 'react';
import GitRepos from '../components/GitRepos'
import Animated from 'animated'


export default class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'repos': [],
			// 'anim': new Animated.Value(0);
		}
	}

	componentDidMount() {
		// Animated.timing(this.state.anim, {toValue: 1}).start();

	// 	$.ajax('https://api.github.com/users/dweste01/repos')
	// 	.then(res => {
	// 		this.setState({'repos': res});
	// 	}).catch(console.error)
	}

	render() {	
		return (
			<div>
				<p id="title">Danielle Westerman</p>
				<GitRepos />
			</div>
		)
	}
}