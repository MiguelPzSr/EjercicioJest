import { TestScheduler } from 'jest';
import { sumar, restar, multiplicar, dividir, isTrue, isFalse, isUndefined, isNull, arrDias, arrCiudades, objExpReg } from '../index.js';

describe('pruebas de matematicas', () => {
    test('intento de suma', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('intento de resta', () => {
        expect(restar(1,1)).toBe(0);
    });
    test('intento de multiplicacion', () => {
        expect(multiplicar(1,1)).toBe(1);
    });
    test('intento de division', () => {
        expect(dividir(1,1)).toBe(1);
    });
});

describe('matchers comunes', () => {
    const datos = {
        nombre: 'marco',
        edad: 20
    }
    const datos2 = {
        nombre: "marco",
        edad: 20
    }
    test('ambos objetos deben ser iguales', () => {
        expect(datos2).toEqual(datos2);
    });
});
describe('semejanzas numericas', () => {
    test('resultado menor', () => {
        expect(restar(5,3)).toBeLessThan(3);
    });
    test('resultado menor o igual', () => {
        expect(restar(5,3)).toBeLessThanOrEqual(2);
    });
    test('resultado mayor o igual', () => {
        expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
    });
    test('resultado mayor', () => {
        expect(sumar(5,5)).toBeGreaterThan(9);
    });
});

describe('Pruebas de booleanos', () => {
    test('es true', () => {
        expect(isTrue()).toBeTruthy();
    });
    test('es false', () => {
        expect(isFalse()).toBeFalsy();
    });
    test('indefinido', () => {
        expect(isUndefined()).toBeUndefined();
    });
    test('es nulo', () => {
        expect(isNull()).toBeNull();
    });
});
describe('coincidencias', () =>{
    test('Gijón está en Asturias', () => {
        expect(arrCiudades()).toContain('Gijón');
    });
    test('Tokio no está en Asturias', () => {
        expect(arrCiudades()).not.toContain('Tokio');
    });
    test('la semana tiene 7 dias', () => {
        expect(arrDias()).toHaveLength(7);
    });
});
describe('matchers en strings', () => {
    const exp = objExpReg();
    test('la respuesta está bien', () => {
        expect(exp.responseOK).toMatch(/OK/);
    });
    test('la respuesta está mal', () => {
        expect(exp.responseFAIL).toMatch(/FAIL/);
    });
    test('la respuesta tiene x longitud', () => {
        expect(exp.responseFAIL).toHaveLength(13);
    });
    test('comprobar email', () => {
        expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
    });
    test('comprobar telefono', () => {
        expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/);
    });

    afterEach(() => console.log('despues de cada prueba'));
    afterAll(() => console.log('despues de todas las pruebas'));
    beforeEach(() => console.log('antes de cada prueba'));
    beforeAll(() => console.log('antes de todas las pruebas'));
});