const mongoose = require('./mongo');

test('test connection with the Mongo DB', ()=> {
  const kittySchema = new mongoose.Schema({
    name: String
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten ({
    name: "Silence"
  })

  expect(silence.name).toBe("Silence")
})