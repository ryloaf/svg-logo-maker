class Shape{
// Defines Shape class with a constructor to initialize color and set the color value

    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

// Defines Circle class that extends Shape and renders and SVG with elements defined in the 'index.js'
class Circle extends Shape{
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

// Defines Square class that extends Shape and renders and SVG with elements defined in the 'index.js'
class Square extends Shape{
    render() {
        return `<rect x="0" y="0" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

// Defines Triangle class that extends Shape and renders and SVG with elements defined in the 'index.js'
class Triangle extends Shape{
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Square, Triangle };