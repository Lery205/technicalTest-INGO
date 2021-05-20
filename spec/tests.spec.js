describe("Test", () => {
    var clock = require("../pruebaTecnica-LerySanchezCalderon").clock;
    it('Testing 9:05am', () => {
        const res = clock('9:05am');
        expect(res).toEqual('Son las nueve y cinco de la mañana');
    });

    it('Testing 9:15am', () => {
        const res = clock('9:15am');
        expect(res).toEqual('Son las nueve y cuarto de la mañana');
    });

    it('Testing 12:00am', () => {
        const res = clock('12:00am');
        expect(res).toEqual('Es media noche');
    });

    it('Testing 12:00pm', () => {
        const res = clock('12:00pm');
        expect(res).toEqual('Es medio día');
    });

    it('Testing 2:34pm', () => {
        const res = clock('2:34pm');
        expect(res).toEqual('Son las dos y treinta y cuatro de la tarde');
    });

    it('Testing 1:00am', () => {
        const res = clock('1:00am');
        expect(res).toEqual('Es la una en punto de la mañana');
    });

    it('Testing 1:30am', () => {
        const res = clock('1:30am');
        expect(res).toEqual('Son la una y media de la mañana');
    });

    it('Testing 6:00pm', () => {
        const res = clock('6:00pm');
        expect(res).toEqual('Son las seis en punto de la noche');
    });

    it('Testing 1:00pm', () => {
        const res = clock('1:00pm');
        expect(res).toEqual('Es la una en punto de la tarde');
    });

})