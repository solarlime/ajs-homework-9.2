import Validator from './app';

test('Everything is correct', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('Hero_256-Bit');
  expect(received).toEqual(true);
});

test('Incorrect symbol', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('Hero#256-Bit');
  expect(received).toEqual(false);
});

test('Incorrect layout', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('Герой_256-Bit');
  expect(received).toEqual(false);
});

test('More than three numbers one by one', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('Hero_0256-Bit');
  expect(received).toEqual(false);
});

test('First symbol: number', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('1_Hero_256-Bit');
  expect(received).toEqual(false);
});

test('First symbol: dash', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('-Hero_256-Bit');
  expect(received).toEqual(false);
});

test('First symbol: underline', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('_Hero_256-Bit');
  expect(received).toEqual(false);
});

test('Last symbol: number', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('Hero_256-Bit_1');
  expect(received).toEqual(false);
});

test('Last symbol: dash', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('Hero_256-Bit-');
  expect(received).toEqual(false);
});

test('Last symbol: underline', () => {
  const isValid = new Validator();
  const received = isValid.validateUsername('Hero_256-Bit_');
  expect(received).toEqual(false);
});
