/* eslint-disable jsx-a11y/alt-text */
import { useParams, useNavigate } from 'react-router-dom';
import { articles, BodyText, ImageSingle, ImageDouble, Playlist, HeaderImage, CustomHtml, ImageTriple } from './articles';
import ReactMarkdown from 'react-markdown'
import './article.css'
import rehypeRaw from 'rehype-raw'


function Section ({ section }: { section: Array<BodyText | ImageSingle | ImageDouble | ImageTriple | Playlist | HeaderImage | CustomHtml>}) {
    return (
        <div className="article-section">
            {
                section.map(node => {
                    switch (node.type) {
                        case 'body-text':
                            return <ReactMarkdown linkTarget="_blank" children={node.content} className="body-text"></ReactMarkdown>
                        case 'custom-html':
                            return <ReactMarkdown linkTarget="_blank" children={node.content} rehypePlugins={[rehypeRaw]} />
                        case 'header-image':
                            return (
                                <div className="header-image">
                                    <img src={node.content.url}></img>
                                </div>
                            )
                        case 'image-single':
                            // TODO: ADD CAPTION SHIT
                            return (
                                <div className="img-wrapper single">
                                    <div className="img-container">
                                        <img src={node.content.url}></img>
                                    </div>
                                    {node.caption ? <figcaption className="caption">{<ReactMarkdown linkTarget="_blank" children={node.caption}/>}</figcaption> : null}
                                </div>
                            )
                        case 'image-double':
                            return (
                                <div className="img-wrapper double">
                                    <div className="img-container" style={{ width: `calc(${node.content[0].widthPercentage}% - 5px)` }}>
                                        <img src={node.content[0].url}></img>
                                    </div>
                                    <div className="img-container" style={{width: `calc(${node.content[1].widthPercentage}% - 5px)`}}>
                                        <img src={node.content[1].url}></img>
                                    </div>
                                    {node.caption ? <figcaption className="caption">{<ReactMarkdown linkTarget="_blank" children={node.caption}/>}</figcaption> : null}
                                </div>
                            )
                        case 'image-triple':
                            return (
                                <div className="img-wrapper triple">
                                    <div className="img-container" style={{ width: `calc(${node.content[0].widthPercentage}% - 5px)` }}>
                                        <img src={node.content[0].url}></img>
                                    </div>
                                    <div className="img-container" style={{width: `calc(${node.content[1].widthPercentage}% - 5px)`}}>
                                        <img src={node.content[1].url}></img>
                                    </div>
                                    <div className="img-container" style={{width: `calc(${node.content[2].widthPercentage}% - 5px)`}}>
                                        <img src={node.content[2].url}></img>
                                    </div>
                                    {node.caption ? <figcaption className="caption">{<ReactMarkdown linkTarget="_blank" children={node.caption}/>}</figcaption> : null}
                                </div>
                            )
                        case 'playlist':
                            return (
                                <iframe title={node.content} style={{'borderRadius':'12px'}} src={`https://open.spotify.com/embed/playlist/${node.content}?utm_source=generator`} width="100%" height="380" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            )
                        case 'custom-html':
                            return node.content
                        default:
                            return <></>
                    }
                })
            }
        </div>
    )
}

export function Artcile () {
    const { articleId } = useParams();
    const navigate = useNavigate()

    if (!articleId || !articles[articleId]) {
        navigate('./Home', { replace: true }) // TODO: THIS DOESNT WORK???
        return <div>you went looking for an unfound article, idiot. go home.</div>
    };

    const article = articles[articleId || '']

    return (
        <div id="article-wrapper">
            <div id="header-text">
                <ReactMarkdown children={article.headerContent}></ReactMarkdown>
            </div>
            {
                article.bodyContent.map((section, index) => <Section section={section} key={index}/>)
            }
            <p className="footer-text">
                This article is only possible becase of <a target="_blank" href="https://www.fontsinuse.com" rel="noreferrer">fontsinuse</a>. You can find most of these fonts and images - and many more - listed there.
            </p>
        </div>
    )
}
