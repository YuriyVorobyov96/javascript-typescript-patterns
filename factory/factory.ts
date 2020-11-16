interface Membership {
  name: string;
  cost: number;
}

class SimpleMembership implements Membership {
  name: string;

  cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 50;
  }

  define(): any {};
}

class StandardMembership implements Membership {
  name: string;

  cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 150;
  }

  define(): any {};
}

class PremiumMembership implements Membership {
  name: string;

  cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 350;
  }

  define(): any {};
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  }

  create(name: string, type = 'simple'): SimpleMembership | StandardMembership | PremiumMembership {
    const MembershipType = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new MembershipType(name);

    member.type = type;

    member.define = function(): void {
      console.log(`${this.name}|${this.type}: ${this.cost}`);
    };

    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create('Yuriy', 'simple'),
  factory.create('Alex', 'standard'),
  factory.create('Olga', 'premium'),
  factory.create('Inna'),
];

members.forEach(m => {
  m.define();
});
