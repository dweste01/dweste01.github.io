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
				<div className='row'>
				<div className='container'>
				{
					this.state.repos.map((repo, idx) => {
					return (
						<div key={idx} className="col-md-4">
							<div className="panel panel-default" style={{marginLeft: 30, marginRight: 30}}>
							  <div className="panel-body">
								<a target="_blank" href={repo.html_url}>
									<img src='files/img/gitLogo.png' style={{height: 30, width: 60}}></img>
									<span style={{fontSize: 16}}>{repo.name}</span>
								</a>
							  </div>
							</div>
						</div>)
					})
				}
				</div>
				</div>
			</div>
		)
	}
}