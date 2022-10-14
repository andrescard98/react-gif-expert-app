import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Oruebas en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> ); //Se crea el sujeto de pruebas
        const input = screen.getByRole('textbox');  //Extraemos el input el cual tiene una relación directa con el screen.getByRole 

        fireEvent.input( input, { target: { value: 'Saitama' } }); //Disparamos el evento

        expect( input.value ).toBe('Saitama'); //Se toma el resulta de lo que esperamos que el evento emita

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue    = 'Saitama'; //creando el valor a evaluar
        const onNewCategory = jest.fn(); //Función fictisea para pruebas

        render( <AddCategory onNewCategory={ onNewCategory } /> ); //Renderizando mi sujeto de pruebas

        const input = screen.getByRole('textbox'); //Extraemos el input
        const form  = screen.getByRole('form'); //Extraemos el form

        fireEvent.input( input, { target: { value: inputValue } });  //Disparamos el primer evento del formulario que es para establecer el valor
        fireEvent.submit( form ); //Disparamos el evento del submit
        // screen.debug();
        expect( input.value ).toBe(''); //Se valida que el value del input este vacío despues de ser enviado

        expect( onNewCategory ).toHaveBeenCalled();  //Probar que la función ha sido llamada, con la función Mock
        expect( onNewCategory ).toHaveBeenCalledTimes(1); //Prueba que solo se ha llamado 1 vez la función
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('no debe de llamar el onNewCategory si el input está vació', () => {
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
})