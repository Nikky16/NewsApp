import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class New extends Component {
  
  capitalizeFirstLetter = (string) => {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
  };

  constructor(props) {
    super(props);

    this.state = {
      mainarticles: [],
      loading: false,
      page: 1,
    };
    document.title =
      this.capitalizeFirstLetter(this.props.category) + " - NewsApp";
  }

  async componentDidMount() {

    this.props.setprogress(30);
  
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apikey}&category=${this.props.category}&pagesize=${this.props.pagesize}&page=${this.state.page}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      mainarticles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

    this.props.setprogress(100);

  }

  fetchMoreData= async()=>{
    this.setState({
      page: this.state.page +1
    })

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apikey}&category=${this.props.category}&pagesize=${this.props.pagesize}&page=${this.state.page}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      mainarticles: this.state.mainarticles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // prevpage = async () => {
  //   if (
  //     this.state.page - 1 <
  //     Math.ceil(this.state.totalResults / this.props.pagesize)
  //   ) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apikey}&category=${
  //       this.props.category
  //     }&pagesize=${this.props.pagesize}&page=${this.state.page - 1}`;

  //     this.setState({ loading: true });
  //     let data = await fetch(url);

  //     let parsedData = await data.json();

  //     this.setState({
  //       page: this.state.page - 1,
  //       mainarticles: parsedData.articles,
  //       loading: false,        
  //       totalResults: parsedData.totalResults,
  //     });
  //   }
  // };

  // nextpage = async () => {
  //   if (
  //     this.state.page + 1 <
  //     Math.ceil(this.state.totalResults / this.props.pagesize)
  //   ) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apikey}&category=${
  //       this.props.category
  //     }&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`;

  //     this.setState({ loading: true });
  //     let data = await fetch(url);

  //     let parsedData = await data.json();

  //     this.setState({
  //       page: this.state.page + 1,
  //       mainarticles: parsedData.articles,
  //       loading: false,
  //       totalResults: parsedData.totalResults,
  //     });
  //   }
  // };

  render() {
    return (
      <div style={{ marginTop: "0px" }}>
        <h1 className="topHeading" style={{ textAlign: "center" }}>
          {"NewsApp - Top " +
            this.capitalizeFirstLetter(this.props.category) +
            " Headlines"}
        </h1>

        {/* { this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.mainarticles.length}
          next={this.fetchMoreData}
          hasMore={this.state.mainarticles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="newContainer">
            {this.state.mainarticles.map((elem) => {
              return (
                  <div className="innernewContainer" key={elem.url}>
                    <NewsItem
                      title={elem.title == null ? " " : elem.title.slice(0, 40)}
                      description={
                        elem.description == null
                          ? " "
                          : elem.description.slice(0, 90)
                      }
                      imageUrl={
                        elem.urlToImage == null ? "download.png" : elem.urlToImage
                      }
                      newsurl={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                    />
                  </div>
                );
              
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="nextprevbuttondiv d-flex">
          <button
            type="text"
            disabled={this.state.page <= 1}
            className="nextprevbutton btn"
            onClick={this.prevpage}
          >
            --Previous
          </button>
          <button
            type="text"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="nextprevbutton btn"
            onClick={this.nextpage}
          >
            Next--
          </button>
        </div> */}
      </div>
    );
  }
}

export default New;
