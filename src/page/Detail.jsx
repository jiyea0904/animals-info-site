import { useParams } from "react-router-dom";
import animals from "../assets/data";

function Detail() {
    const params = useParams();
    console.log(params.id);
    const animalData = animals.find(el => el.id === Number(params.id));
    console.log(animalData);

    return(
        <section className="detail">
            <img src={animalData.imageUrl} />
            <h2>{animalData.name}</h2>
            <div>{animalData.description}</div>
        </section>
    );
}

export default Detail;