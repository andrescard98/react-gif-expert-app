import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); //Se carga el mock del hook useFetchGifs.


describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch'; //Constante para la categoria

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({  //Esto es lo que voy a simular que este regresando esa función(El hook useFetchGifs)
            images: [],
            isLoading: true
        });


        render( <GifGrid category={ category } /> ); //Renderiza el componente
        expect( screen.getByText( 'Cargando...' ) ); //Prueba si hay un "cargando.." por medio del getByText
        expect( screen.getByText( category ) );  //Prueba si hay una categoria

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [   //Se crean dos gifs para el test
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({  //Esto es lo que voy a simular que este regresando esa función(El hook useFetchGifs)
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> ); //Renderiza el componente
        expect( screen.getAllByRole('img').length ).toBe(2); //Prueba si hay dos gifs, que fueron los que se definieron para la prueba
        


    });


});