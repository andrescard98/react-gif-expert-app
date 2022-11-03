import PropTypes from 'prop-types';

import { GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, categories, setCategories}) => {


    const {images, isLoading } = useFetchGifs(category);

    const onDeleteCategory = () => {
        const categoryIndex = categories.indexOf(category);
        categories.splice(categoryIndex, 1);
    }

    const onDelete = () => {
        onDeleteCategory();
        setCategories([...categories]);
    }


    return (
        <>
            <h3>{category[0].toUpperCase() + category.substring(1)}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
            <div className="button">
                <button
                    className="button-gifs"
                    onClick={onDelete}
                    >Borrar Gifs
                </button>
                <button
                    className="button-gifs"
                    >Añadir a favoritos
                </button>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
