# Product list with cart

## The challenge

Your users should be able to: 

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Built with

1. React + Typescript
2. CSS Modules

### What I learned

-- CSS short hand: `inset: 0` can replace `top/right/bottom/left: 0`
-- Creating variables for font with `/* font: [font-weight] [font-size]/[line-height] [font-family]; */`
-- Using the picture element for different images depending on screen size. With the media attribute specifies a media condition (similar to a media query) that the user agent will evaluate for each <source> element.
```
<picture>
    <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
    <img src={image} alt="MDN" />
</picture>
    ```



