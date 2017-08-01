import React from 'react';

export default (props) => {
  const repo = props.gitRepo;
  const size = props.fontSize;
  return (
    <div className="panel panel-default" style={{marginLeft: 30, marginRight: 30}}>
      <div className="panel-body">
        <a target="_blank" href={repo.html_url}>
          <img src='public/img/gitLogo.png' className="gitLogo"></img>
          <span style={{fontSize: size, marginLeft: -15}}>{repo.name}</span>
        </a>
      {
        (repo.name=='dweste01.github.io') ? <span id="thisSite">  this site!</span>
        : null
      }
    </div>
  </div>
  )
}