class Shape {
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=color
    }
}

class Circle extends Shape {
render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
}
}

class Triangle extends Shape{
    render(){
        return `<polygon points="100,10 190,190 10,190" fill="${this.color}"/>`
}
}
class Square extends Shape{
    render(){
        return `<rect x="15" y="10" width="250" height="250" fill="${this.color}"/>`
    }
}
module.exports = {Circle, Triangle, Square}