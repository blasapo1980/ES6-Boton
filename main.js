'use strict'

class Button{
  constructor(element, text, icon){
    this.element = document.querySelector(element);
    this.text = text;
    this.icon = icon;
    this.render();
  }
  render(){
    this.element.innerHTML = `
      ${this.text}
      <i class="fa fa-${this.icon}"></i>
    `;
  }
}
const prueba = new Button('.hello-button1','Holi', 'hand-rock-o');
const prueba2 = new Button('.bye-button1','Adios', 'heart');

// Segundo ejercicio
// Debemos crear una clase nueva llamada ColorButton que herede de la clase Button.
// Las diferencias de esta clase con su clase padre (Button) serán las siguientes:
// Esta clase deberá generar instancias que tengan una propiedad color para poder
//  modificarla y establecer un color. Ese color será el que posteriormente se utilize
//  para cambiar el color de fuente del botón.
// El método render deberá realizar las mismas operaciones que el método render de B
// utton pero además deberá modificar el estilo del botón para que el texto de este
// sea del color de la propiedad color:

class redButton extends Button{
  constructor(element, text, icon, color){
    super(element,text, icon);
    this.color = color;
    this.render();
  }
  render(){
    this.element.style.color = this.color;
    super.render();
  }
}


const prueba3 = new redButton('.hello-button2','Love music', 'music','red');
const prueba4 = new redButton('.bye-button2','Love nature', 'tree','blue');
