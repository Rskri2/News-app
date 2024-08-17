import React from "react";

export default function NewsItem (props) {
 let { title, description , imageurl, newsurl, author,date, source} = props;
    return (
      <div>
        <div className="my-3 ">
          <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}} >{source}</span>
          <img src={imageurl?imageurl:"https://source.unsplash.com/random/?news/400/400"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text "><small className="tex-muted">by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-dark bt-sm" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
          </div>
      </div>
    );
  }

