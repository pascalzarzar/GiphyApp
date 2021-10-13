import './GifList.css';

const GifList = (props) => {

    const gifs = props.gifs;

    return(
        <div className='GifList'>
            {gifs.map((gif) => {
                return (
                    <img className='GifList-gif' src={gif.images.downsized.url} alt="gif" key={gif.id}/>
                )
            })}
        </div>
    )
}

export default GifList;