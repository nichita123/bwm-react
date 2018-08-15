const Rental = require('./models/rental');
const User = require('./models/user');

class FakeDb {

  constructor() {
    this.rentals = [{
      title: "Nice view on ocean",
      city: "San Francisco",
      street: "Main street",
      category: "condo",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 4,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyRate: 43
    },
    {
      title: "Modern apartment in center",
      city: "New York",
      street: "Time Square",
      category: "apartment",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 1,
      shared: false,
      description: "Very nice apartment in center of the city.",
      dailyRate: 11
    },
    {
      title: "Old house in nature",
      city: "Spisska Nova Ves",
      street: "Banicka 1",
      category: "house",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 5,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyRate: 23
    },
    {
      title: "New house inna Hood",
      city: "Chisinau",
      street: "Deleanu 3/1",
      category: "condo",
      image: "https://ei.marketwatch.com/Multimedia/2016/11/04/Photos/ZH/MW-EZ493_miami__20161104120841_ZH.jpg?uuid=f41fe4c4-a2a8-11e6-ac14-001cc448aede",
      bedrooms: 8,
      shared: false,
      description: "Good",
      dailyRate: 51
    }];

    this.users = [{
      username: "Test User1",
      email: "test1@gmail.com",
      password: "test123"
    },
    {
      username: "Test User2",
      email: "test2@gmail.com",
      password: "test1234"
    }]
  }

  async cleanDb() {
    await User.remove({});
    await Rental.remove({});
  }

  pushDataToDb() {
    const user = new User(this.users[0]);
    const user2 = new User(this.users[1]);

    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);
      newRental.user = user;

      user.rentals.push(newRental);
      newRental.save();
    });

    user.save();
    user2.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = FakeDb;
