# Namaste React 
# Chapter 05 - Let's get Hooked!

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?
A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export`, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
``` 
and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from MyComponent.js file like:
```
const MyComponent = () => {}
export default MyComponent;
```
and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
```
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
``` 
and the component is imported from MyComponent.js file like:
```
import * as MainComponents from "./MyComponent";
```
Now we can use them in JSX as:
```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:
```
import MyComponent, {MyComponent2} from "./MyComponent";
```