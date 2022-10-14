import { renderHook, waitFor } from '@testing-library/react'; //waitFor es una promesa para esperar una respuesta de una función asincrona.
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el kook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch')); //renderHook se utiliza para renderizar nuestros hooks y la desestructuración de result es para ver el resultado cuando ya se monta el hook

        const { images, isLoading } = result.current; //Se desestructura lo que nos trae el hook que es un objeto llamado current.

        expect(images.length).toBe(0); //Espera que el arreglo este vacío.
        expect(isLoading).toBeTruthy(); //Espera que isLoading este en True.
    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(   //El waitFor debe recibir un callback en donde se le da la instrución que debe esperar, en este caso es que cuando el array de images sea > 0 se va a cumplir la prueba, osea cuando llegue la respuesta del API
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0); //toBeGreaterThan pasa la prueba cuando es mayor al valor ingresado.
        expect(isLoading).toBeFalsy(); //toBeFalsy pasa la prueba es False el isLoading.

    });
})