import { Link } from "react-router-dom";

export const HeaderGifs = () => {
  return (
    <div className="navbar">
      <div>
        <h1>GifExpertApp</h1>
      </div>

      <div>
        <Link to="/">Buscar Gifs</Link>
        <Link to="/favorites">Gif Favoritos</Link>
      </div>
    </div>
  )
}
