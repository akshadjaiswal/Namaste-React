# Namaste React
# Chapter 08 - Let's get Classy

## Q: (Research) Why do we use `super(props)` in constructor?
A: `super(props)` is used to inherit the properties and access variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.