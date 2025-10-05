import { fakerES as faker} from '@faker-js/faker';;

class DataGenerator {
    constructor() {
        this.faker = faker;
    }

    getRandomInt() {
        return this.faker.number.int({ min: 1, max: 10 });
    }
}

export default new DataGenerator();