import { useSearchParams, Link } from "react-router-dom";
import animals from "../assets/data";
import { getRegExp } from "korean-regexp"; 

function Search() {
    const [searchParams] = useSearchParams();
    const param = searchParams.get('animal');
    const reg = getRegExp(param);

    const filteredData = animals.filter(el => el.name.match(reg));
    return(
        <ul>
            {filteredData.map(el => 
                <li key={el.id}>
                    <Link to={`/detail/${el.id}`}>
                        <img src={el.imageUrl} />
                        <div>{el.name}</div>
                    </Link>
                </li>
            )}    
        </ul>
    );
}

export default Search;