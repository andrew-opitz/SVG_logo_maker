const { Circle, Triangle, Square } = require('./shapes') 

describe('Shape Rendoring', () => {
    test('Circle Rendoring',() => {
        const circle = new Circle()
        circle.setColor('Red')
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="Red" />')
    }) 
})

    test('Triangle Rendoring',() => {
        const triangle = new Triangle()
        triangle.setColor('Green')
        expect(triangle.render()).toEqual('<polygon points="155,10 245,190 65,190" fill="Green"/>')
    }) 

    test('Square Rendoring',() => {
        const square = new Square()
        square.setColor('Blue')
        expect(square.render()).toEqual('<rect x="15" y="10" width="250" height="250" fill="Blue"/>')
}) 