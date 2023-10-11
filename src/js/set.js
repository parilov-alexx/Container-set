export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Ошибка! Такой персонаж уже есть в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    const newArr = new Set();
    const result = characters.filter(
      (item) => (!newArr.has(JSON.stringify(item))
        ? newArr.add(JSON.stringify(item))
        : false),
    );
    for (const member of result) {
      this.members.add(member);
    }
  }

  toArray() {
    const array = Array.from(this.members);
    return array;
  }
}
