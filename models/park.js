const Park = function(name, entryFee, avgVisitors, dinosaurs) {
  this.name = name;
  this.entryFee = entryFee;
  this.avgVisitors = avgVisitors;
  this.dinosaurs = dinosaurs;
}

Park.prototype.countDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs.pop(dinosaur); // This only removes the last in the array
  // this.dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur !== dinosaur)
};

Park.prototype.mostVisitors = function () {
  let array = this.dinosaurs;
  return array;
};


module.exports = Park
