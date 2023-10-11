import Team from '../set';

test('добавление персонажа', () => {
  const team = new Team();
  const hero = {
    name: 'Joe',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  team.add(hero);
  expect(...team.members).toEqual({
    name: 'Joe',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  });
});

test('ошибка при добавлении уже существующего объекта', () => {
  const team = new Team();
  const hero = {
    name: 'Joe',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  team.add(hero);
  expect(() => team.add(hero)).toThrow('Ошибка! Такой персонаж уже есть в команде');
});
test('добавление произвольного количества персонажей', () => {
  const team = new Team();
  const heroes = [{
    name: 'John',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  }, {
    name: 'Jake',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  }];
  team.addAll(...heroes);
  expect([...team.members]).toEqual(heroes);
});

test('при добавлении массива с персонажами добавляются уникальные объекты', () => {
  const team = new Team();
  const heroes = [{
    name: 'John',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  }, {
    name: 'Jake',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  }, {
    name: 'Jake',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  }];
  team.addAll(...heroes);
  expect([...team.members]).toEqual([
    {
      name: 'John',
      health: 100,
      level: 1,
      type: 'Bowman',
      attack: 25,
      defence: 25,
    },
    {
      name: 'Jake',
      health: 100,
      level: 1,
      type: 'Bowman',
      attack: 25,
      defence: 25,
    },
  ]);
});

test('конвертация в массив', () => {
  const team = new Team();
  const heroes = [{
    name: 'John',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  }, {
    name: 'Jake',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  }];
  team.addAll(...heroes);
  expect(team.toArray()).toEqual(heroes);
});
