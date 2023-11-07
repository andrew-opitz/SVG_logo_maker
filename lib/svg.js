class SVG {
    constructor(){
        this.text='',
        this.shape=''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.shape}
      
        ${this.text}
      
      </svg>`
    }
    setShape(shapeElement){
        this.shape = shapeElement.render()
    }
    setText(text, color){
        this.text =`<text x="150" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
}
module.exports = SVG