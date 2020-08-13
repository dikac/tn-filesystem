import Json from "../../dist/object/json";
import Example from "../boolean/example";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`exists, valid`, () => {

    let object = Json(__dirname + '/real.json');
    expect(Example(object)).toBeTrue();
});

it(`exists, valid, extension not json`, () => {

    let object = Json(__dirname + '/real.json');
    expect(Example(object)).toBeTrue();
});


it(`exists, invalid`, () => {

    try {

        let object = Json(__dirname + '/invalid.json');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});

it(`not exists`, () => {

    try {

        let object = Json(__dirname + '/not-exists.json');
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});
