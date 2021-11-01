const head = require('../head');
const assertEqual = require('../assertEqual');
let people = ["Location", "wizkid", "wonder"]
let wizard = [4, 5, 6]
assertEqual((head(wizard)), 4);
assertEqual((head(people)), 'Location');
assertEqual((head([])), undefined);