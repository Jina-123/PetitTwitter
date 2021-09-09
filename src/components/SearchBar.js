import './SearchBar.css'
import search from '../assets/search.svg'
import newTwitterIcon from '../assets/newTwitterIcon.jpg'


function SearchBar() {

    return (

    <div>
        <a href="https://twitter.com/?lang=fr"><img class="Icon-home" href="https://twitter.com/?lang=fr" src={ newTwitterIcon } /></a>
    <div class="boxContainer">  
        <table class="elementsContainer">
        <tr>
            <td>
            <a href="#" ><img src={search} /></a>
            </td>
            <td>
            <input class="srch-color" type="text" placeholder="Search" class="search" />
            </td>
        </tr>
        </table>
    </div>
    </div>
    );

}

export default SearchBar;