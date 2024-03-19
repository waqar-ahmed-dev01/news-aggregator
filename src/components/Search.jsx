import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { search_api } from "../config/api";
import { capitaLize } from "../config/config";
import { fetchNews } from "../redux/slice/news";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

const Search = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news)
    const { query } = useParams()
    document.title = capitaLize(query) + '- News'


    useEffect(() => {
        dispatch(fetchNews(search_api(query)))
    },[query,dispatch])

    if(news.loading) {
        return (<Loader />)
    }


    return (
        <div className="container mt-4">
            <h2 className="dispay-3 text-center">{capitaLize(query)} News</h2>
            <div className="row">
            {news.data.articles && news.data.articles.map((newsItem,i) => (
                    <div className="col-md-3" key={i}>
                        <NewsItem news={newsItem} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
