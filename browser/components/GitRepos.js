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
      console.log(res);
      let sortedByDate = res.sort((a, b) => {
        return b.id - a.id
      })
      this.setState({'repos': sortedByDate});
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
            return (
              <div key={idx} className="col-md-4">
                <SingleRepo gitRepo={repo} />
              </div>)
          })
        }
        </div>
        </div>
      </div>
    )
  }
}