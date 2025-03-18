Did the crash course from "React Tutorial for Beginners" by "Programming with Mosh"

Attaching the learning notes so that you can have a brief of what all I learnt:

React Notes:

	.ts = plane typescript
	.tsx = react components

	2 ways to create a React component
		1. class or 2. function (recommend)

	These days, functional one is popular

	BabelJS.io/repl -> how the jsx is converted into js code equivalent to HTML code by using methods, tags etc etc

	JS Expression : A piece of code that produces value

	Update in Virtual dom rendering is done by react-dom which a different library

	React is platform agnostic

	Library = Tool for specific functionality, doesn't enfore your backend logic or strict template
	Framework = A set of tools and guidelines for building an App. Could enforce a template

	React only handles UI, rest things like Routing, Managing app state, Animations etc, react is not opionated on those.
	So we can pick the right tools for those jobs.

	class is a reserved keyword in JS and TS

	In react you can only return a single element of HTML. i.e. either H1, or ul and so on. You cant combine them and send it
	To solve this, one way to do this is to keep it inside div.
	Better way is to do it via Fragment. Even better way is to just use <> </> i.e. empty brackets which internally translates to a fragment
	Fragment basically helps not to create extra unnecessary div elements. (As extra divs can mess up the CSS Layouts)

	In jsx there is no for loop. Or you cant write if statement inside jsx. Only exception is {}
	In jsx you can only use html elements or other react components. Hence you must have to use expression {} to fill in html code.

	For ListGroup each item should have a unique key prop because otherwise react has to check and render the entire list.
	This way it can only update selected keys and not refresh the entire listgroup.

	true && 'Sreeram' => 'Sreeram'
	false && 'Sreeram' => false

	if {} results into false, then nothing is rendered on the screen

	SyntheticBaseEvent = as different browsers have different implementations of Event object. Hence react team uses this wrapper around native event object. 

	handle<TypeOfEvent> e.g. handleClick = this is an event handler

	Type Annotation is nothing but the data type of the given object in Typescript. This is explicit and enforced. 
	Not primitive like data type.

	In react, when a variable is updated, react doesn't re render that section. It only will happen when the entire page reloads.
	Hence we must use state to track these chanegs and update.
	Hence to use states => we use useState

	Each component is going to have it's own state

	Props are the inputs to our components, whereas state are the internal / local variables of the components
	We should treat props as immutable (this is an anti pattern)
	Both props and state cause re render in react.

	using an interface you can define the shape or interface of an object

	Destructuring = Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a concise way.
	const fruits = ["Apple", "Banana", "Mango"];

	// Without destructuring
	const first = fruits[0];
	const second = fruits[1];

	// With destructuring
	const [fruit1, fruit2, fruit3] = fruits;

	onClick is basically a built-in event handler prop for handling DOM events;
	where as onSelectItem is a custom prop (property) which we created and attached with an eventHandler.

	There is a special prop that all components support and is called children. 
	<Alert>Hello world</Alert> , in this case children: string will work.
	But in case you make it more complex by passing say <span> tag inside. Then using string wont work.
	In that case, change type from string to ReactNode.
	
 	color?: string;  -> The question mark means it is optional
  	color?: "primary"; -> This will restrict the option to primary only. Anything else will give a compilation error
   	color?: 'primary' | 'secondary' | 'danger' -> now you can choose one of the provided options
	
 	When you pass an onClick handler to a custom component like <Alert>, React treats it as a prop, not as an event listener


