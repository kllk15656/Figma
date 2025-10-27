This tutorial provides a step-by-step guide on how to use Figma’s core features effectively when creating wireframes and interactive prototypes. It covers essential tools and techniques to structure layouts, build reusable components and create interactive design elements using variants.

## Part 1: Setting up a wireframe
### Step 1
In the main Figma dashboard, click on the ‘Design’ button to create a new design file.

![Figma Design](../tutorial-images/tutorial-img1.jpg)

### Step 2
This will take you to the canvas. Within the design tools panel, add a frame and select your preferred screen size within the properties panel.

![Figma Canvas](../tutorial-images/tutorial-img2.jpg)

![Figma Add Frame](../tutorial-images/tutorial-img3.jpg)
![Figma Frame Selection](../tutorial-images/tutorial-img4.jpg)

### Step 3
You can now explore adding elements to your design file. Within the Design Tools, you can include:
- Text
- Shapes
- Vectors
- Drawings

Then, using the properties panel you can adjust:
- Position
- Layout
- Typography
- Appearance
- Colour
- Stroke
- Effects

## Part 2: Setting up main components
When you want to reuse elements across multiple pages of your wireframes, it's helpful to create a components. This means you can then add instances of this component throughout your design files, and they will automatically inherit its properties.

The following example demonstrates how to create multiple components for image icons.

### Step 1
Press Ctrl+Shift+K to insert your image and click ‘Place all’ to add them to the canvas. 

*Tip: It's useful to keep your components within their own frame separate from your wireframes.*

![Add Image](../tutorial-images/tutorial-img5.jpg)

![Place All Images](../tutorial-images/tutorial-img6.jpg)

### Step 2
Make sure all items are selected within the ‘Layers’ tab.

![Layers Tab](../tutorial-images/tutorial-img7.jpg)

Then within the properties tab, click on the ellipsis and select ‘Create multiple components.

![Layers Tab](../tutorial-images/tutorial-img8.jpg)

### Step 3
To make your components responsive to different screen sizes, enable ‘Auto Layout’ by pressing Shift + A or clicking ‘Auto Layout’ (make sure all your components are selected). This will group all icons into a single parent container.

![Layers Tab](../tutorial-images/tutorial-img9.jpg)

### Step 4
Next, you can set the layout properties for the component's frame. By setting the Gap to Auto, the spacing will automatically adjust whenever the size of the frame changes. In this example, the following properties have been set:

- Gap: Auto
- Flow: Horizontal
- Alignment: Centre (click the middle block)
- Padding: 36

![Layers Tab](../tutorial-images/tutorial-img10.jpg)
![Layers Tab](../tutorial-images/tutorial-img11.jpg)

*Tip: You can change the order of your icons by double clicking an icon and using the arrow buttons on your keyboard to switch position.*

### Step 5
Ensure each individual icon is sized correctly by adjusting its dimensions in the properties panel. In this example, the width and height are both set to 32px.

*Tip: Double click each individual icon and make sure only that specific item is selected in the Layout panel before adjusting its properties*

![Layout Properties](../tutorial-images/tutorial-img12.jpg)
![Components](../tutorial-images/tutorial-img13.jpg)

### Step 6
Once your component is set up, you can create an instance to include in your wireframes. To do this, hold 'Alt' on your keyboard and drag the component frame to duplicate it as an instance.

![Components](../tutorial-images/tutorial-img14.jpg)

Then, drag the corner of your component frame to resize it to your desired dimensions. It will now automatically adjust the sizing properties to match those set in the main component.

![Components](../tutorial-images//tutorial-img15.jpg)

*Tip: You can tell the difference between components and instances in the layout panel. The components will have 4 diamonds, and the instances will appear as one diamond.*

![Components](../tutorial-images/tutorial-img16.jpg)

## Part 3: Creating varients
After learning how to create components, you can extend their functionality further by creating variants. These are useful when designing elements that have multiple states. In this example, we learn to create a checkbox component with 2 variants: checked, unchecked.

### Step 1
Using Figma’s design tools, add a shape onto the canvas to form a checkbox. In this example, a square is used with the following properties applied:

- Fill: No fill
- Stroke colour: #202562
- Corner radius: 2
- Layout dimensions: 16 x 16

![Components](../tutorial-images/tutorial-img17.jpg)
![Components](../tutorial-images/tutorial-img18.jpg)

## Step 2
With the shape selected, click Ctrl+Alt+K or right click and select ‘Create component’.

![Components](../tutorial-images/tutorial-img19.jpg)

## Step 3
Then, click the + button within the properties panel and select ‘Variant’ (ensure you have the component selected).

![Components](../tutorial-images/tutorial-img20.jpg)

## Step 4
This will set the original shape as the first variant. To add another, click on the purple + button.

![Components](../tutorial-images/tutorial-img21.jpg)
![Components](../tutorial-images/tutorial-img22.jpg)

To create the ‘unchecked’ effect, you can add another square inside the 2nd variant. Make sure it is placed under 'Varient 2' in the Layers tab.

![Components](../tutorial-images//tutorial-img23.jpg)

Ensure you rename each varient so its easier to reference later in your designs.

![Components](../tutorial-images/tutorial-img24.jpg)

## Step 5
After creating variants, you can add ‘interactions’ which will take effect in the prototype. In ‘Prototype mode’, select the first variant (unchecked), hover over the checkbox until the blue + appears, and drag it to the second variant. This will create a connection and allow you to set transition properties.

![Components](../tutorial-images/tutorial-img25.jpg)

![Components](../tutorial-images/tutorial-img26.jpg)

## Step 6
Now, when placing an instance of the checkbox component into the wireframes, you can easily select which state to include in your design.

![Components](../tutorial-images/tutorial-img27.jpg)

## Wireframe Tutorial

Watch our wireframing tutorial using Figma [here!](https://youtu.be/owvuJGOHhcA)

[![Wireframing Tutorial](https://img.youtube.com/vi/owvuJGOHhcA/0.jpg)](https://youtu.be/owvuJGOHhcA)
