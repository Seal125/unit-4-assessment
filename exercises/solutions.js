const makeAccount = function(startingBalance) {
  return {
    checkBalance() {
      return startingBalance;
    },

    add(num) {
      startingBalance += num;
      return `${num} added`;
    },

    subtract(num) {
      startingBalance -= num;
      return `${num} subtracted`;
    }
  };
};

function SavingsAccount(name) {
  this.name = name;
  this.balance = 0;
};

SavingsAccount.prototype.showBalance = function() {
  return `$${this.balance}`;
};

SavingsAccount.prototype.depositFunds = function(num) {
  if(num < 0) {
    return `Please include a deposit amount that is greater than 0`;
  }

  this.balance += num;
  return `$${num} Deposited`;
};

SavingsAccount.prototype.withdrawFunds = function(num) {
  if(num > this.balance) {
    return `Insufficient Funds`;
  }

  this.balance -= num;
  return `$${num} withdrawn`;
};

function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
  this.contacts = [];
}

Phone.prototype.addContact = function(contactObj) {
  if(contactObj.phoneNumber && contactObj.name) {
    if(contactObj.phoneNumber.length === 10) {
      this.contacts.push(contactObj);
      return `${contactObj.name} added.`;
    }
  }
  return `Invalid`;
};

Phone.prototype.removeContact = function(nameStr) {
  let search = this.contacts.find(el => el.name === nameStr);
  if(search) {
    this.contacts.splice(this.contacts.indexOf(search), 1);
    return `${nameStr} removed.`;
  }

  return `Contact not found.`;
};

Phone.prototype.call = function(str) {
  let search = this.contacts.find(el => el.name === str || el.phoneNumber === str);
  if(search) {
    return `Calling ${search.name}...`;
  }
  if(!search && str.length === 10) {
    return `Calling ${str}`;
  }

  return `Invalid`;
};

function AppleiPhone(phoneNumber, model) {
  Phone.call(this, phoneNumber);
  this.model = model;
}

AppleiPhone.prototype = Object.create(Phone.prototype);

AppleiPhone.prototype.sendiMessage = function(phoneObj, text) {
  if(phoneObj.model) {
    return `Message sent.`;
  }

  return `Message could not be sent.`;
};

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  communicate() {
    return `${this.firstName} is chatting with their friends!`;
  }

  eat() {
    return `${this.firstName} is eating right now.`;
  }

  sleep() {
    return `${this.firstName} is sleeping right now.`;
  }
}

class Student {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    return `${this.firstName} is studying right now.`;
  }
}

class GraduateStudent {
  constructor(firstName, lastName, age, gender, graduateDegree) {
    super(firstName, lastName, age, gender);
    this.graduateDegree = graduateDegree;
  }

  research() {
    return `${this.firstName} is researching to make the world a better place with her ${this.graduateDegree} degree!`;
  }
}

let professionalMixin = {
  invoice() {
    return `${this.firstName} is sorting through invoices!`;
  },

  payTax() {
    return `${this.firstName} is paying taxes!`;
  }
};

class Professor {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
    Object.assign(this, professionalMixin);
  }

  teach() {
    return `${this.firstName} is teaching ${this.subject}!`;
  }
}

class Doctor {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
    Object.assign(this, professionalMixin);
  }

  diagnose() {
    return `${this.firstName} is diagnosing a patient!`;
  }
}

module.exports = {
  makeAccount,
  SavingsAccount,
  Phone,
  AppleiPhone,
  Person,
  Student,
  GraduateStudent,
  Professor,
  Doctor
};
