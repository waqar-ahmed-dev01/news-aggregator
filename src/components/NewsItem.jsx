import { dateForm } from "../config/config";

const NewsItem = ({news}) => {
    return (
        <div className="card mb-4">
            <div className="card-img">
                <img src={news.urlToImage} alt={news.title} />
            </div>
            <div className="card-body">
                <small className="text-secondary">{dateForm(news.publishedAt)}</small>
                <h5>{news.title}</h5>
                <small className="text-secondary">Author: {news.author}</small>
                <p className="card-text">{news.description}</p>
                <a className="btn btn-primary" href={news.url} target="_blank">Learn More</a>
            </div>
        </div>
    );
}

export default NewsItem;