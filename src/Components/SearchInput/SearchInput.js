import darkSearchIcon from './Assets/icon-search-mod-noc.svg'
import illustration from './Assets/ilustra_header.svg'
import './SearchInput.css'

const SearchInput = (props) => {

    return(
        <div className='SearchInput'>
            <h1>Inspirate y busca los mejores <span>GIFS</span></h1>
            <img className='SearchInput-illustration' src={illustration} alt="Search Illustration"/>
            <form className='SearchInput-container'>
                <input type="text" value={props.value} onChange={props.changeHandler}/>
                <submit className='SearchInput-submit'>
                    <img src={darkSearchIcon} alt='Search Icon' />
                </submit>
            </form>
        </div>
    )
}

export default SearchInput;