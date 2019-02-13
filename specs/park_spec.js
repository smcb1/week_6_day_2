const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Bronchi', 'Carnivore', 13)
    dinosaur2 = new Dinosaur('Herbie', 'Herbivore', 15)
    dinosaur3 = new Dinosaur('Roarry', 'Carnivore', 12 )
    dinosaurs = [dinosaur1, dinosaur2]
    park = new Park('Jurassic Park', 10, 100, dinosaurs); // Name - entry_fee - avg_visitors
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });


  it('should have a ticket price', function() {
    const actual = park.entryFee;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.avgVisitors;
    assert.strictEqual(actual, 100);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur3);
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur1);
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
      const actual = park.mostVisitors();
      assert.strictEqual(actual, 15);
  });

xit('should be able to find all dinosaurs of a particular species');

xit('should be able to remove all dinosaurs of a particular species');

});
