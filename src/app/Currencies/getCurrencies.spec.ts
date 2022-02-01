import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
     
    it('it should include all three currencies', () => {
        const array = ['USD', 'GDP', 'EUR']
        expect(getCurrencies()).toEqual(array);
    });
});