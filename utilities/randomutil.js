export class RandomUtil {
    static getRandomNumber() {
        return Math.floor(Math.random() * 100000);
    }
    static getRandomFirstName() {
        return `Farheen${this.getRandomNumber()}`;
    }
    static getRandomLastName() {
        return `Shaik${this.getRandomNumber()}`;
    }
    static getRandomPhone() {
        return `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    }
}