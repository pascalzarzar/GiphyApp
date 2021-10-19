import './GifList.css';

const GifList = (props) => {

    return(
        <div>
            { !props.isTrending ?
                <h3 className={props.darkState ? 'gifList-heading gifList-dark' : 'gifList-heading gifList-light'}>
                    Resultados al buscar gifs por: <span>{props.searchValue}</span>
                </h3>
                :
                <h3 className={props.darkState ? 'gifList-heading gifList-dark' : 'gifList-heading gifList-light'}>
                    ¡Los 15 gifs tendencia de hoy!
                </h3>  
            }
            <div className='GifList-container'>
                {props.gifs.length !== 0 ?
                    props.gifs.map((gif) => {
                        return (
                            <a className='GifList-gif' href={gif.bitly_url} target="_blank" rel='noreferrer' key={gif.id}>
                                <img src={gif.images.downsized.url} alt="gif" key={gif.id}/>
                            </a>
                        )
                    })
                :<p>
                    Whoops! Al parecer no existen Gif's para tu búsqueda. Intentalo nuevamente.
                </p>
                }
            </div>
        </div>
        )
    }

export default GifList;