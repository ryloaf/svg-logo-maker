const fs = require(' ')
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require(" ");

class svg{
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns"http://www.w#.org/2000/svg" width="300" height="200> ${this.shapeElement} ${this.textElement}</svg>`
    }
    setTextElement(text,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"> ${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
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
        name: "shape",
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
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("");
    });
}

async function init() {
    console.log("Starting init");
        var svgString = "";
        var svg_file = "logo.svg";
    
    const answers = await inquirer.prompt(questions);
        var user_text = "";
        if (answers.text.length > 0 && answers.text.length < 4) {
            user_text = answers.text;
        } else {
            console.log("Invalid user text field detected! Please enter 1-3 characters.");
        return;
        }
            console.log("User text: [" + user_text + "]");
            user_font_color = answers["text-color"];

            console.log("User font color: [" + user_font_color + "]");
            user_shape_color = answers.shape;

            console.log("User shape color: [" + user_shape_color + "]");
            user_shape_type = answers["pixel-image"];
            
            console.log("User entered shape = [" + user_shape_type + "]");

        let user_shape;
        if (user_shape_type === "Square" || user_shape_type === "square") {
            user_shape = new Square();
            console.log("Selected Square shape");
        }
        else if (user_shape_type === "Circle" || user_shape_type === "circle") {
            user_shape = new Square();
            console.log("Selected Circle shape");
        }
        else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
            user_shape = new Square();
            console.log("Selected Triangle shape");
        }
        else {
            console.log("Invalid shape!");
        }
            user_shape.setColor(user_shape_color);
        
        var svg = new Svg();
            svg.setTextElement(user_text, user_font_color);
            svg.setShapeElement(user_shape);
            svgString = svg.render();

        console.log("Displaying shape:\n\n" + svgString);

        console.log("Shape generation complete!");
        console.log("Writing shape to file...");
        writeToFile(svg_file, svgString);
} 
init()