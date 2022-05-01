import orderByProps from '../properties_sort';

const DATA = [
  [
    [
      {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
      },
      ['name', 'level'],
    ],
    [
      { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
      { key: 'level', value: 2 }, // порядок взят из массива с ключами
      { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
      { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
      { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ],
  ],
  [
    [
      {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
      },
      ['name', 'level', 'other'],
    ],
    [
      { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
      { key: 'level', value: 2 }, // порядок взят из массива с ключами
      { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
      { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
      { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ],
  ],
  [
    [
      {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
      },
    ],
    [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  ],
];

const handler = test.each(DATA);

handler('correct return value test', ([object, props], expected) => {
  const result = orderByProps(object, props);
  expect(result).toEqual(expected);
});
