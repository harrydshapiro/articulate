import './home.css'
import { IArticle, articles } from './articles'
import { Link } from "react-router-dom"

function Tile ({ id, article }: { id: string, article: IArticle}) {
    return (
    <div className="tile">
        <Link to={`/articles/${id}`}>{<><img alt="" src={article.image}></img><p>{article.name}</p></>}</Link>
    </div>
    )
}

export function Home () {
    return (
        <div id="home-wrapper">
            <div className="tiles">
                {Object.entries(articles).map(([id, article], index) => (<Tile key={index} id={id} article={article}/>))}
            </div>
            
            <footer><a target="_blank" href="https://www.instagram.com/articulate.gallery" rel="noreferrer">instagram</a> | <a target="_blank" href="mailto:harrydshapiro96@gmail.com" rel="noreferrer">contact</a></footer>
        </div>
    )
}