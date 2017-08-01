import React from 'react';

export default (props) => {
  const repo = props.gitRepo;
  let size;

  if (repo.name.length > 20) {
    size = 10.75;
  } else if (repo.name.length > 12) {
    size = 12;
  } else {
    size = 14;
  }

  return (
    <div className="panel panel-default featuredProj" style={{marginLeft: 30, marginRight: 30}}>
      <div className="panel-body">
        <a target="_blank" href={repo.html_url}>
          <img src='public/img/gitLogo.png' className="gitLogo"></img>
          <span style={{fontSize: size, marginLeft: -15}}>{repo.name}</span>
        </a>
      {
        (repo.name=='dweste01.github.io') ?
        <p id="thisSite">
          <span className="glyphicon glyphicon-star" aria-hidden="true" /> this site! <span className="glyphicon glyphicon-star" aria-hidden="true" />
        </p>
        : null
      }
    </div>
  </div>
  )
}