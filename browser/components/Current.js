import React from 'react'

export default (props) => {
  return (
   <div style={{marginTop: 20, marginBottom: 20}}>
      <p className="sectionTitle wow zoomIn">Currently Working On...</p>
        <div className='row'>
          <div className='container'>
            <div className="col-md-4">
              <div className="panel panel-default featuredProj">
                <div className="panel-body">
                <p className="featuredTitle">NYC Art Visualization</p>
                <div className="row" style={{marginBottom: 10}}>
                  <span className="featuredLinks col-md-6">
                    <a href='https://dweste01.github.io/NYCArtVis'>Deployed GHPage</a>
                  </span>
                  <span className="featuredLinks col-md-6">
                    <a target="_blank" href='https://github.com/dweste01/NYCArtVis'>Github Repo</a>
                  </span>
                </div>
                <ul className='list'>
                  <li>
                    Data visualization project using same public data set as I (AR)t NY
                  </li>
                  <li>
                    Learning D3
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
     </div>
  )
}