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
      console.log(res);
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
                <div className="panel panel-default" style={{marginLeft: 30, marginRight: 30}}>
                  <div className="panel-body">
                  <a target="_blank" href={repo.html_url}>
                    <img src='public/img/gitLogo.png' style={{height: 30, width: 60, marginLeft: -15}}></img>
                    <span style={{fontSize: size, marginLeft: -15}}>{repo.name}</span>
                  </a>
                    {
                      (repo.name=='dweste01.github.io') ? <span id="thisSite">this site!</span>
                      : null
                    }
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