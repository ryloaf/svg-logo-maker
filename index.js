const fs = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// Each question is an object that specifies the properties of the logo image
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword OR a hexidecimal number:",
    },
    {
        type: "input",
        name: "shape-color",
        message: "SHAPE COLOR: Enter a color keyword OR a hexidecimal number:",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Image you would like:",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
function writeToFile(fileName, data) {
    console.log('Writing [' + data + '] to file [' + fileName + ']');
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("You have successfully generated a logo.svg!");
    });
}

async function init() {
    console.log('Starting init');
    const answers = await inquirer.prompt(questions);
    var svgString = '';
    var svg_file = 'logo.svg';
    var user_shape_type = answers['pixel-image'];
    var user_shape_color = answers['shape-color'];
    var user_font_color = answers['text-color'];
    var user_text = answers['text'];

    let user_shape;
    if (user_shape_type === 'Square' || user_shape_type === 'square') {
        user_shape = new Square();
        user_shape.setColor(user_shape_color);
        console.log('Shape color after setting:', user_shape.color);
        console.log('Selected Square shape');
    } else if (user_shape_type === 'Circle' || user_shape_type === 'circle') {
        user_shape = new Circle();
        user_shape.setColor(user_shape_color);
        console.log('Shape color after setting:', user_shape.color);
        console.log('Selected Circle shape');
    } else if (user_shape_type === 'Triangle' || user_shape_type === 'triangle') {
        user_shape = new Triangle();
        user_shape.setColor(user_shape_color);
        console.log('Shape color after setting:', user_shape.color);
        console.log('Selected Triangle shape');
    } else {
        console.log('Invalid shape!');
        return;
    }

    user_shape.setColor(user_shape_color);


    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    console.log('Displaying shape:\n\n' + svgString);

    console.log('Shape generation complete!');
    console.log('Writing shape to file...');
    writeToFile(svg_file, svgString);

}

init();