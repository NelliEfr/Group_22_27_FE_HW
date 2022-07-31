// Реализуйте класс Language (Язык), который будет иметь следующие свойства: 
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного класса
// Реализйуте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)


class Language {
    constructor(name, alphabet, country){
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }

    getInfo(){
        console.log(`Language: ${this.name}, Alphabet: ${this.alphabet}, Country: ${this.country}`)
    };
};

const language1 = new Language("Russian", "Cyrillic", "Russia");
const language2 = new Language("German", "Latin", "Germany");

console.log(language1);
console.log(language2);

language1.getInfo();