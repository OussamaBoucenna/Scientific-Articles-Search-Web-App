
import ArticleComponents from "./ArticleComponents";
import Searchbar from './Searchbar';
import FilterMenu from './FilterMenu';

const SearchPage = () => {
    return (  
        <div>
        <Searchbar/>
        <FilterMenu/>
        <ArticleComponents/> 
        </div>
    );
}
 
export default SearchPage;