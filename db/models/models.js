import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';

const sequelize = new Sequelize(
    'some_db', 
    'root', 
    'root_password', 
    {
    host: 'localhost',
    dialect: 'postgres'
  });

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


sequelize.sync({ force: true }).then(async () => {
  return User.create({
    username: 'Dons',
    email: 'hhh@mail.ru',
    password: await bcrypt.hash('password', 10)
  })
});

export default sequelize;
