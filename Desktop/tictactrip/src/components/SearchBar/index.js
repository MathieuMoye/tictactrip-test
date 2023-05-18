import Form from '../../components/SearchBar/Form'
import arrow from "../../images/down-arrow.png"
import passengers from "../../images/user.png"
import discount from "../../images/credit-card.png"
import DateForm from './DateForm'

const SearchBar = () => {
    return (
        <div className="container">

             <button>
                <span>One way</span> 
                <img src={arrow} alt="arrow"/>
             </button>

             <button>
                <img src={passengers} alt='passengers icon'/><span>0</span>
                <img src={discount} alt='discount card icon'/><span>0</span>
             </button>

            <form>
                <Form />
                <Form />
            </form>
            
            <form>
                <DateForm />
                <DateForm />
            </form>

            <button>Search</button>

        </div>
    )
}

export default SearchBar;