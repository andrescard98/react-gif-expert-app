import { useState } from "react";
import { AddCategory, GifGrid } from '../components';


export const GifHome = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            alert("El nombre ya está incluido")
            return;
        }

        setCategories([newCategory, ...categories]);
    }
    return (
        <div className="div-home">
            <h2>Busca tus gifs:</h2>
            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                        categories={categories}
                        setCategories={setCategories}
                    />
                ))
            }
        </div>
    )
}
