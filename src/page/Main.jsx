import { Link } from "react-router-dom";
import animals from "../assets/data";


function Main() {
    return(
        <ul>
            {animals.map(el => 
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

export default Main;