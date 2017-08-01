import React from 'react';
import SingleRepo from './SingleRepo'

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
    let size;
    return (
      <div>
        <p className="sectionTitle wow zoomIn">...More Github Repos</p>
        <div className='row'>
        <div className='githubContainer col-md-10 col-md-offset-1'>
        {
          this.state.repos.map((repo, idx) => {
            (repo.name.length > 12) ? (repo.name.length > 20) ? size = 10.75 : size = 12 : size = 14
            return (
              <div key={idx} className="col-md-4">
                <SingleRepo gitRepo={repo} fontSize={size} />
              </div>)
          })
        }
        </div>
        </div>
      </div>
    )
  }
}