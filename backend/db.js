const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://geoffreystewart84:Familyof7@cluster0.0gns5zo.mongodb.net/max-mongodb-udemy?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("Database is already initialized");
    return callback(null, _db);
  }

  client
    .connect()
    .then((c) => {
      _db = c;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error("Database not initialized");
  }

  return _db;
};

module.exports = {
  initDb,
  getDb,
};
