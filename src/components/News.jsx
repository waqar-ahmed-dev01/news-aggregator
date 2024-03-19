import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { category_api } from "../config/api";
import { capitaLize } from "../config/config";
import { fetchNews } from "../redux/slice/news";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

import { v4 } from "uuid";


const News = ({category}) => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news)

    document.title = `${capitaLize(category)} - News`

    useEffect(() => {
        dispatch(fetchNews(category_api(category)))
    },[])

    if(news.loading) {
        return (<Loader />)
    }

    return (
        <div className="container mt-4">
            <h2 className="dispay-3 text-center">{capitaLize(category)} News</h2>
            <div className="row mt-4">
                {news.data.articles && news.data.articles.map((newsItem) => (
                    <div className="col-md-3" key={v4()}>
                        <NewsItem news={newsItem} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
