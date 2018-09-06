const Rental = require('./models/rental');
const User = require('./models/user');
const Booking = require('./models/booking');
const Service = require('./models/service');

const fakeDbData = require('./data.json');

class FakeDb {

  constructor() {
    this.rentals = fakeDbData.rentals;
    this.users = fakeDbData.users;
    this.services = fakeDbData.services;
  }

  async cleanDb() {
    await User.remove({});
    await Rental.remove({});
    await Booking.remove({});
    await Service.remove({});
  }

  pushDataToDb() {
    const user = new User(this.users[0]);
    const user2 = new User(this.users[1]);
    const user3 = new User(this.users[2]);

    const service1 = new Service(this.services[0]);
    const service2 = new Service(this.services[1]);
    const service3 = new Service(this.services[2]);
    const service4 = new Service(this.services[3]);

    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);
      newRental.user = user;

      user.rentals.push(newRental);
      newRental.save();
    });

    user.save();
    user2.save();
    user3.save();

    service1.save();
    service2.save();
    service3.save();
    service4.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = FakeDb;
