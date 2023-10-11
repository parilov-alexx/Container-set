class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        for(member in members) {
            if(character === member) {
                throw new Error('Ошибка! Такой персонаж уже есть в команде');
            } else {
                this.members.add(character)
            }
        }
    }

    addAll(...characters) {
        for(character in characters) {
            this.members.add(character)
        }
    }

    toArray() {
        const array = Array.from(members);
        return array
    }
}