import './GifList.css';

const GifList = (props) => {

    const trendingGifs = props.trendingGifs;

    return(
        <div>
            <h2>Los 15 gif tendencia de hoy</h2>
            <div className='GifList-container'>
                {props.searchGifs.length !== 0 ?
                    props.searchGifs.map((gif) => {
                        return (
                            <img className='GifList-gif' src={gif.images.downsized.url} alt="gif" key={gif.id}/>
                        )
                    })
                :trendingGifs.map((gif) => {
                    return (
                        <img className='GifList-gif' src={gif.images.downsized.url} alt="gif" key={gif.id}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default GifList;