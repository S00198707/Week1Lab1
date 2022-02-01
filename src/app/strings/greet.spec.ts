import { greet } from "./greet";

describe('greet', () => {
    it('it should include the name in the message', () => {
        expect(greet('Frank')).toContain('Frank')
        //Fail if to contain is different name to greet
    });
});