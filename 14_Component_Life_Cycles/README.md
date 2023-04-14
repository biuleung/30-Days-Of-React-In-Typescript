30 Days Of React:Component Life Cycles

https://github.com/Asabeneh/30-Days-Of-React/blob/master/14_Day_Component_Life_Cycles/14_component_life_cycles.md

contructor: The constructor() method is executed before any other methods

getDerivedStateFromPros: is called right before rendering the component in the DOM

render: render whenever there is change in state

componentDidMount: is called after component is render

shouldComponentUpdate: does not return true the application will never update

componentDidUpdate: takes two parameters: the prevProps and prevState. It is called after the component is updated in the DOM

componentWillUnmount: gets called when a component is unmounted
