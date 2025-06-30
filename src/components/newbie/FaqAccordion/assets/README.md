# FAQ accordion

Frontend exercise from Frontend Mentor.io

## The challenge

Your challenge is to build out this FAQ accordion and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Built with

1. React + Typescript
2. CSS Modules

### What I learned

- I was having an issue with creating a transition that revealed the answers. I was getting a snap instead of a smooth transition. I learned that because I was using `state` that was mounting/unmounting the element with {open && <div>...</div>} → React removes the element from the DOM immediately, killing the animation.

- Adding in keyboard functionality to an element that doesn't have it by default (such as `<form/>`) requires add `tabIndex={0}`. In this specific project to enhance accessibility, I added `role="button"`to announces the clickable element to screen readers; `aria-expanded`: screen readers will announce if it’s open or not; `aria-controls`: links the button to the answer panel.

- Click events on divs with parent divs that also have click events will get swallowed up by the parent's click event. Need to use `preventDefault()` and `stopPropagation()` appropriately

- It's not appropriate to use Short-circuit expression instead of Ternary expression for conditionally adding classes because a short-circut expression could evaluate to `false` and which is not a valid class name

