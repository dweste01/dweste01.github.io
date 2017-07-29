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
			<div>
				<p id="github" className="wow zoomIn">Github Repos</p>
				<div className='container'>
				{
					this.state.repos.map((repo, idx) => {
					return (
						<div key={idx}>
							<div className="panel panel-default repo">
							  <div className="panel-body">
								<a target="_blank" href={repo.html_url}>
									<img src='files/img/gitLogo.png' style={{height: 30, width: 60}}></img>
									<span>{repo.name}</span>
								</a>
							  </div>
							</div>
						</div>)
					})
				}
				</div>
			</div>
		)
	}
}