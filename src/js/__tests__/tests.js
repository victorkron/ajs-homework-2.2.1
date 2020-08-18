import orderByProps from '../app';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const arr1 = [obj, ['name', 'level']];
const res1 = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

const arr2 = [obj, []];
const res2 = [
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
  { key: 'level', value: 2 },
  { key: 'name', value: 'мечник' },
];

const arr3 = [obj, ['otherKey']];
const res3 = [
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
  { key: 'level', value: 2 },
  { key: 'name', value: 'мечник' },
];

describe('orderByProps tests: ', () => {
  test.each([
    ['input is valid', arr1, res1],
    ['automatic sort', arr2, res2],
    ['a key that doesn`t exist', arr3, res3],
  ])(
    ('-> %s'),
    (name, inputData, expectation) => {
      const res = orderByProps(inputData[0], inputData[1]);

      expect(res).toEqual(expectation);
    },
  );
});
