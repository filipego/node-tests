const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
});


it('should square a number', () => {
  var res = utils.square(5);

  expect(res).toBe(25).toBeA('number');
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
});

it('should set first and last name', () => {
  let user = { location: 'Newark', age: 39 };
  let res = utils.setName(user, 'Filipe Valente');

  expect(res).toInclude({
    firstName: 'Filipe',
    lastName: 'Valente'
  });
});
