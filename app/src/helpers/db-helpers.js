const Sequelize = require("sequelize");

function getDBConnection(resolve, attempt=1) {
  try {
    console.log(`Connecting to db, attempt ${attempt}`);
    let connection = new Sequelize(process.env.POSTGRES_URI);
    console.log("Connection succesful!");
    resolve(connection);

  } catch(err) {
    console.log("Could not connect to db, retrying in 5 seconds");
    setTimeout(() => {
      getDBConnection(resolve, ++attempt);
    }, 5000);
  }
}

exports.establishDBConnection = function establishDBConnection() {
  return new Promise((resolve) => {
    getDBConnection(resolve);
  });
};
