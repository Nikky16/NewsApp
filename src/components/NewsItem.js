import React, { Component } from "react";
import "../App.css";
import picture from "./download.png";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author, date} = this.props;

    return (
      <div className="newscon">
        <div className="newsimg">
          <img 
            className="photo"
            src={imageUrl ? imageUrl : picture}
            alt="..."
          />
        </div>
        <br />
        <div className="maincontent">
          <div className="newstopHeading">
            <h4 className="topHeading">{title}... </h4>
          </div>
          <div className="newscontent">{description}...</div>
          <br />
          <footer className="blockquote-footer">
            By {author ? author : "Unknown"} on{" "}
            <cite title="Source Title">{new Date(date).toGMTString()}</cite>
          </footer>
          <hr />
          <div className="newreadbuttondiv">
            <button type="text" className="newreadbutton">
              <a href={newsurl} target="_blank">
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
