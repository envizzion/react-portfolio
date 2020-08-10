import React, { Component } from 'react';

class Adds extends Component {
    render() {

       if (this.props.data) {
          var advertisements = this.props.data.advertisements.map(function (advertisements) {
            var projectImage = 'images/portfolio/' + advertisements.image;
            
            return (
              <div key={advertisements.title} className="columns portfolio-item">
                <div className="item-wrap">
                  <a href={advertisements.url} title={advertisements.title}>
                    <img alt={advertisements.title} src={projectImage} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{advertisements.title}</h5>
                        <p>{advertisements.category}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )
          })
        }
    
        return (
          <section id="adds">
    
            <div className="row">
    
              <div className="twelve columns collapsed">
    
                <h1>ADVERTISEMENTS</h1>
    
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {advertisements}
                </div>
              </div>
            </div>
          </section>
        );
      }
  

    }

export default Adds;