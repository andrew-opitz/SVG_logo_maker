const inquirer = require('inquirer')
const { Circle, Triangle, Square } = require('./lib/shapes')
const SVG = require('./lib/svg')
const fs = require('fs')

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters.',
  },
  {
    type: 'list',
    name: 'textColor',
    message: 'Please enter a color keyword or a hexadecimal value.',
    choices: ['Red', 'Blue', 'Green', 'Black', 'White']
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select a shape from the list.',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'list',
    name: 'shapeColor',
    message: 'Please enter a color keyword or a hexadecimal value.',
    choices: ['Red', 'Blue', 'Green','Black', 'White']
  },
]).then(response => {
  var userShapeSelection;
  switch (response.shape) {
    case "Circle":
      userShapeSelection = new Circle()
      break;
    case "Triangle":
      userShapeSelection = new Triangle()
      break;
    case "Square":
      userShapeSelection = new Square()
  }
  userShapeSelection.setColor(response.shapeColor)
  let userSVG = new SVG()
  userSVG.setShape(userShapeSelection)
  userSVG.setText(response.text, response.textColor)
  fs.writeFileSync('./examples/logo.svg', userSVG.render(), function (error) {
    if (error) throw error;
  })

})

