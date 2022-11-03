import { FooterGifs } from './components/FooterGifs';
import { HeaderGifs } from "./components/HeaderGifs";
import { Routes, Route} from "react-router-dom";
import { GifHome } from './pages/GifHome';
import { GitNotFound } from './pages/GitNotFound';
import { GifFavorites } from './pages/GifFavorites';
export const GifExpertApp = () => {

  
  return (
    <>
      <HeaderGifs/>
      <Routes>
          <Route path="/" element={<GifHome/>} />
          <Route path="/favorites" element={<GifFavorites/>}/>
          <Route path="*" element={<GitNotFound/>}/>
      </Routes>
      <FooterGifs/>
    </>
  )
}
