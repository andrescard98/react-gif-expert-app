import { getGifs } from '../../src/helpers/GetGifs'

describe('Pruebas en GetGifs()', () => {
    test('debe de retornar un arreglo de Gifs', async () => {
        const gifs = await getGifs("One Punch");
        //console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0); //Mira si al menos retorna un objeto de un gif.
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    })
})