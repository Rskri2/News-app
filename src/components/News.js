import React,{useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
 

  const updateNews = async () => {
    
    props.setProgress(10);
    setLoading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.APIKey}&page=${
      page
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  };

  const fetchData =async()=>{
    setPage(page+1);
    updateNews();
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.APIKey}&page=${
      props.page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setLoading(false);
    setTotalResults(articles.concat(parseData.totalResults))
  }
  const capitalise=(word) => {
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  
  useEffect(()=> {
    document.title = `${capitalise(props.category)} -NewsMonkey`
    updateNews();
  },[])
  

    return (
      <>
        <h1 className="text-center " style={{ margin: `35px 0px`, marginTop:`100px` }}>
          {`NewsMonkey - Top  ${capitalise(props.category)} Headlines `}
        </h1>
        {loading && <Spinner/>}
              <InfiniteScroll
                dataLength={articles.length} a
                next={fetchData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}    >
                 <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>

            );
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  page:PropTypes.number,
  category: PropTypes.string,
  totalResults:PropTypes.number,
}

News.defaultProps ={
  country: "in",
  pageSize: 8,
  page:1,
  category: "general",
  totalResults:0
}

