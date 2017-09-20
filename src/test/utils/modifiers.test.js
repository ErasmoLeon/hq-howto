import {composeColorsModifiers, classFromSizeColors} from '../../src/utils/modifiers.utils';

test('should apply color modifiers', ()=>{
  expect(
    composeColorsModifiers({
      isSuccess: true
    })({
      anotherClass: true
    })
  ).toEqual({
    "anotherClass": true,
    "is-danger": false,
    "is-dark": false,
    "is-info": false,
    "is-light": false,
    "is-link": false,
    "is-primary": false,
    "is-success": true,
    "is-warning": false,
    "is-white": false
  });
});

test('should compose class name', () => {
  expect(
    classFromSizeColors({
      isSuccess: true,
      isDark: true
    })
    ({
      anotherClass: true
    })
  ).toEqual("anotherClass is-dark is-success");
});
