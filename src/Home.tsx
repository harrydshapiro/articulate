import './home.css'
import { IArticle, articles } from './articles'
import { Link } from "react-router-dom"

function Tile ({ id, article }: { id: string, article: IArticle}) {
    return (
    <div className="tile">
        
        <Link to={`/articles/${id}`}>{<><img src={article.image}></img><p>{article.name}</p></>}</Link>
    </div>
    )
}

export function Home () {
    return (
        <div id="home-wrapper">
            <p className="description-text">articulate is a multimedia periodical about the humanity of fonts</p>

            <div className="tiles">
                {Object.entries(articles).map(([id, article], index) => (<Tile key={index} id={id} article={article}/>))}
            </div>
        </div>
    )
}