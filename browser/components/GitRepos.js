import React from 'react';

export default class GitRepos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"repos": []
		}
	}

	componentDidMount() {
		$.ajax('https://api.github.com/users/dweste01/repos')
		.then(res => {
			this.setState({'repos': res});
		}).catch(console.error)
	}

	render() {	
		return (
			<div>{this.state.repos.map((repo, idx) => {
				return (
					<div key={idx}>{repo.name} {repo.url}</div>)
			})}</div>
		)
	}
}