const moment = require("moment");

class Account {
  #amount;
  #account_id;

  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  tellMeBalancec() {
    console.log(`Sizning hisobingizdagi qoldiq ${this.#amount}$`);
    return this.#amount;
  }

  withdraw(amount) {
    if (this.#amount > amount) {
      this.#amount = this.#amount - amount;
      console.log(`hisobdan ${amount}$ yechildi va qoldiq ${this.#amount}$`);
    } else {
      console.log(
        "sizning balansingizda yetarli mablag mavjud emas ",
        this.#amount
      );
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(`hisobingiz tuldi ${this.#amount}$`);
  }

  giveMeDetails() {
    console.log(`salom ${this.name} sizning hisobiz ${this.#amount}$ ga teng`);
    console.log(`siznign hisob raqamiz: ${this.#account_id}`);
  }

  static tellMeAboutClass() {
    console.log("bu class accountlarni yasaydi");
  }
  static tellMeTime() {
    console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD:mm:ss")}`);
  }
}

module.exports = Account;
