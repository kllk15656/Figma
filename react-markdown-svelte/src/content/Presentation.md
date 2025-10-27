Welcome to the Figma presentation slides! 

## Slide 1: Front Page

![Slide1](/assets/slides/Slide1.jpg)

Presentation front page with presenter names. 

## Slide 2: Introduction to Figma

![Slide2](/assets/slides/Slide2.jpg)

Figma is a cloud-based and protoyping tool. It's biggest stength lies in how easy it makes collaboration, working in a team, anytime, anywhere.

## Slide 3: Figma Features

![Slide3](/assets/slides/Slide3.jpg)

Figma is not just a design tool, it is built to support full workflow. Let's look at how each mode supports that.
Design Mode - Create and arrange shapes, layouts, text and images, everything you need to build a user interface.
Prototype Mode - Let's you connect screens and add interactions and simulate how a user will move through your design. 
Developer Mode - Bridges the gap between design and code, inspecting elements and getting CSS snippets.

And finally, real-time collaboration allowing multiple people to work on a file at the same time.

## Slide 4: Button Interactions

![Slide4](/assets/slides/Slide4.jpg)

This slide shows how we can use Figma to simulate button interactions, a key part of user testing. We have 3 buttons here, "Submit", "Processing" and "Sent" buttons. 
On the right, you can see how these buttons are laid out in Figma and represent the different states and how they can link to simulate user flow. 

## Slide 5: Mobile Navigation Flow

![Slide5](/assets/slides/Slide5.jpg)

Similar to the previous slide, we have 3 screens "Home", "Profile" and "Settings", a common structure in mobile app design. By linking these frames, we can test
how a user moves through them.

## Slide 6: Main Technology Components 

![Slide6](/assets/slides/Slide6.jpg)

The system has two main parts, the front-end which is built with react and typescript, it runs in the browser and connects to the back-end using web socket and APIs. 
The back-end handles collaboration, user log in and file storage - and links to cloud services. Let's look at how the backend connects with other components on the next slide.

## Slide 7: Main Technology Components 

![Slide7](/assets/slides/Slide7.jpg)

The database, often mongoDB, stores the user data, design files and version history. It is queued whenever back-end services are used such as saving a file. 

API and integrations allow Figma to connect with external tools like github or plugins. 

These interfaces extend fuctionality and support version control and developer workflows.

## Slide 8: System Architecture Diagram 

![Slide8](/assets/slides/Slide8.jpg)

Here is a simplified diagram that shows how the system wroks.

1. The user interacts with the front-end through the browser.
2. It connects to the back-end via websocket and REST API. 
3. The back-end handles collaboration, login and version control that links to the database, cloud storage and external APIs. 

## Slide 8: Scenrario - Collaborative UI/UX Design With Figma 

![Slide9](/assets/slides/Slide9.jpg)

Imagine that a team has a project to create a mobile application. They can begin this together in Figma, from initial sketches, to wireframes, to the full producut prototype. 
It's real-time editing capabilities allow designers, developers and stakeholders to work on the same file simultaneously, eliminating any version control issues and streamling feedback.
Figma's features like auto-layout, comment threads and inspect mode support this seamless collaboration, accelerating the design-to-development process. 

## Slide 10: Pros of Figma 

![Slide10](/assets/slides/Slide10.jpg)

Slide Title: Pros of Figma
Let’s take a look at what makes Figma such a powerful tool for designers and teams.
- Cross-Platform Accessibility
Figma runs in the browser, so it works on Windows, Mac, Linux and even mobile. No downloads or setup needed.
- Real-Time Collaboration
Multiple people can edit the same file at the same time, with instant updates.
- Automatic Version Control
Every change is saved automatically, and you can go back through the version history. That makes it easy to recover work or review progress.
- Scalable Design Systems
Shared libraries and templates help teams stay consistent with branding and layout, especially in large organizations.
- Component-Based Design
Reusable components like buttons or nav bars can be updated globally. This saves time and keeps everything aligned.
- Intuitive Interface
Figma’s layout is clean and easy to learn, even for beginners. You can jump in and start prototyping quickly.
- Design-to-Development Integration (Dev Mode)
Dev Mode lets developers inspect designs, grab CSS, and export assets directly. It smooths out the handoff between design and code.
Whether you’re working solo or with a team.

## Slide 11: Cons of Figma

![Slide11](/assets/slides/Slide11.jpg)

Let’s balance things out by looking at some of Figma’s limitations. While it’s a powerful tool, there are a few areas where teams might run into challenges.
- Internet Dependency
Figma relies on a stable internet connection. If your Wi-Fi drops or lags, it can interrupt collaboration or prevent changes from syncing properly.
- Limited Offline Features
There is an offline mode, but it’s not fully featured. You might lose access to certain tools or experience sync issues when reconnecting.
- File and Library Overload
In large teams, shared libraries can get messy fast. Without clear structure or permissions, it’s easy for things to become disorganized.
- Plugin Quality Varies
Figma has a huge plugin ecosystem, but not all plugins are reliable. Some may be outdated or buggy, so it’s important to vet them before use.
- Cost for Premium Features
The free version is generous, but advanced features—like team management and analytics—are locked behind paid plans.
- High Resource Usage
Running Figma alongside other tools like Teams or Zoom can strain your system, especially on older machines. It’s worth keeping an eye on performance.
- Global Colour Management Limitations
Managing colour schemes across large projects can be tedious. Figma doesn’t offer robust global colour control out of the box, though there are plugins that help with this.

Figma is still a great tool, but knowing these limitations helps teams plan around them and choose the right workflows.

## Slide 12: Figma Alternatives

![Slide12](/assets/slides/Slide12.jpg)

There are lots of other tools out there that offer similar features to Figma, depending on what your team needs. This slide gives a quick overview of six popular alternatives.

-Adobe XD is great if you're already using Adobe Creative Cloud. It connects well with Photoshop and Illustrator, and has strong prototyping tools including voice interaction. Just note that it’s now only available via subscription through the Creative Cloud.

-Sketch is a macOS-native tool with excellent vector editing and a huge plugin ecosystem. It’s fast and lightweight, but only works on Apple devices.

-Balsamiq is ideal for quick wireframes. It’s simple and stripped back, which makes it perfect for early-stage mock-ups when you’re focusing on layout rather than polish.

-Marvel is known for its intuitive interface and built-in usability testing. It’s good for rapid prototyping and has developer handoff tools built in.

-Mockplus is an all-in-one platform. You can go from wireframes to final design without needing lots of plugins. It’s especially useful for teams that want everything in one place.

-UXPin lets you build realistic, interactive prototypes with logic, states and variables. It’s great for testing how a design behaves in a real environment before development starts.

Each of these tools has its own strengths, so it’s worth exploring them if your team has specific needs or workflows that Figma doesn’t quite cover.

## Slide 13: Choosing The Right Tool  

![Slide13](/assets/slides/Slide13.jpg)

This slide compares Figma with six alternatives based on platform, collaboration, and design limitations.
Figma stands out for being browser-based and great for real-time teamwork. But it’s not perfect—offline editing is limited and it leans more toward digital design than product design.
Adobe XD and Sketch are desktop-only and lack built-in collaboration. Balsamiq is super simple but not suited for high-fidelity design. Marvel and Mockplus are browser-based but have lighter collaboration features. UXPin is powerful but can be complex for new users.
Each tool has its trade-offs. It’s about choosing what fits your team’s workflow and goals.

## Slide 14: Choosing The Right Tool 

![Slide14](/assets/slides/Slide14.jpg)

This slide compares which tools offer free access or trial options—important for students, startups or anyone testing new workflows.
Figma has a generous free plan with real-time collaboration and scalable features. No trial needed.
Adobe XD, Sketch, and Balsamiq don’t offer free plans, but each has a 30-day trial. Adobe XD is subscription-only now.
Marvel, Mockplus, and UXPin all offer free plans plus short trials—ranging from 7 to 15 days. These are good options if you want to explore features before committing.
Free access varies a lot, so it’s worth checking what fits your team’s budget and workflow.

## Slide 15: What Makes Figma The Right Choice 

![Slide15](/assets/slides/Slide15.jpg)

This slide sums up why Figma stands out as a top choice for design and collaboration.
It runs in the browser, so it’s easy to access from anywhere. The interface is beginner-friendly, and real-time collaboration makes teamwork smooth and efficient.
Figma also includes built-in version control, team alignment tools, and a generous free plan. For developers, the handoff is seamless thanks to inspect mode and asset export.
It’s an all-in-one workspace with flexible pricing, making it ideal for students, startups and professional teams alike.
Figma brings together accessibility, collaboration and powerful design tools—all in one platform.

## Slide 16: Figma Fundamentals 

![Slide16](/assets/slides/Slide16.jpg)

We are now going to look at some of Figma’s features and demonstrate how it can be used in Web Development. You will find that the core features are beginner friendly and simple enough learn.  

## Slide 17: Creating a new design file

![Slide17](/assets/slides/Slide17.jpg)

After creating a design file, UX and UI designers will begin to work on their wireframes within Figma canvas which we can see here. 
This is the creative space where they can experiment with different design styles and layouts, and create prototypes to demonstrate their ideas before any development is needed. 

## Slide 18: Working With Frames 

![Slide18](/assets/slides/Slide18.jpg)

The great thing about Figma is its ability to help create responsive designs and test how each feature will look on different screen sizes. This is done through the use of ‘Frames’ which designers will use to contain the elements for each page. 

In the left hand panel, we can see Figma has a range of preset screen sizes which designers can choose from. 

## Slide 19: Adding basic elements

![Slide19](/assets/slides/Slide19.jpg)

After defining the screen dimensions, designers can then begin to add elements to their designs such as shapes, text, vectors and drawings. 

## Slide 20: Using the properties panel 

![Slide20](/assets/slides/Slide20.jpg)

These can then be customised using the properties panels where you can adjust attributes like position, layout and colour. 

## Slide 21: Previewing your design (pt.1)

![Slide21](/assets/slides/Slide21.jpg)

At any point, designers can test their wireframes, by previewing them in the editor using the ‘play prototype’ button

## Slide 22: Previewing your design (pt.2)

![Slide22](/assets/slides/Slide22.jpg)

Alternatively, they can use ‘Present’ mode, which is great for showing finished wireframes to clients or colleagues.

## Slide 23: Pro Tools in Figma

![Slide23](/assets/slides/Slide23.jpg)

Beyond the basics, Figma offers advanced features that streamline the design-to-development handoff. These tools help create interactive prototypes that represent the user journey.

## Slide 24: Creating a team

![Slide24](/assets/slides/Slide24.jpg)

Figma supports collaboration by allowing users to create teams. This makes it easy to work with other designers and developers.

## Slide 25: Sharing a design file

![Slide25](/assets/slides/Slide25.jpg)

Designers can share their projects with team members and grant access for others to collaborate directly on the file.

## Slide 26: Real-Time Collaboration

![Slide26](/assets/slides/Slide26.jpg)

Real-time collaboration speeds up the design process. Users can work simultaneously and track each other’s activity with live cursor updates. Changes are reflected instantly.

## Slide 27: Comments

![Slide27](/assets/slides/Slide27.jpg)

Team members can leave comments on the canvas and tag others to ensure feedback is seen. *WAIT A SECOND TO CHANGE SLIDE*

## Slide 28: Styles

![Slide28](/assets/slides/Slide28.jpg)

Design elements can be saved as styles to maintain consistency. These styles can be reused across the project and easily integrated into CSS code.

## Slide 29: Variables

![Slide29](/assets/slides/Slide29.jpg)

Variables allow designers to define properties like colour, number, string, and boolean values. Developers can use these as tokens in their code.

## Slide 30: Components (pt.1)

![Slide30](/assets/slides/Slide30.jpg)

Reusable components like icons and buttons help maintain consistency. Designers can save and reuse them across multiple pages.

## Slide 31: Components (pt.2)

![Slide31](/assets/slides/Slide31.jpg)

Components are stored in the ‘Assets’ tab. Instances inherit the original design attributes. In this example, 4 diamonds in the layers tab show a component, while a single diamond shows an instance.

## Slide 32: Auto Layout (pt.1)

![Slide32](/assets/slides/Slide32.jpg)

Auto Layout lets designers set alignment and spacing rules. New instances adjust automatically based on their container, making designs responsive.

## Slide 33: Auto Layout (pt.2)

![Slide33](/assets/slides/Slide33.jpg)

Auto Layout ensures consistent spacing for developers. In this example, icons adjust automatically for smaller screens—even when one is hidden.

## Slide 34: Variants (pt.1)

![Slide34](/assets/slides/Slide34.jpg)

Variants allow multiple versions of a component, useful for interactive features like checkboxes. These are saved inside the original component.

## Slide 35: Variants (pt.2)

![Slide35](/assets/slides/Slide35.jpg)

When creating an instance, designers can set different states. This example shows ‘unchecked’ and ‘checked’ variants for a checkbox. *WAIT A SEC BEFORE CHANGING*

## Slide 36: Interactive Components

![Slide36](/assets/slides/Slide36.jpg)

Figma’s prototype tools simulate user interaction. You can define triggers and actions to switch between variants—like tapping a checkbox to change its state.

## Slide 37: Prototype Flows

![Slide37](/assets/slides/Slide37.jpg)

Prototype flows define navigation paths and represent the user journey. They help clarify the purpose of each design element.

## Slide 38: Overlays

![Slide38](/assets/slides/Slide38.jpg)

Overlays are used for dropdowns and popups. You can link them to components like buttons so they appear when clicked, in a position you choose.

## Slide 39: Animations (pt.1)

![Slide39](/assets/slides/Slide39.jpg)

Figma’s prototype tools support animations. In this example, a ‘Swipe to delete’ component is hidden in the first frame using the properties panel.

## Slide 40: Animations (pt.2)

![Slide40](/assets/slides/Slide40.jpg)

By setting an ‘on drag’ interaction, the prototype shows what happens when the user swipes. You can explore more animations in Figma’s community files.

## Slide 41: Dev Mode

![Slide41](/assets/slides/Slide41.jpg)

Dev Mode is a paid feature that helps developers access specs, code snippets, and assets. It streamlines collaboration between designers and developers.

## Slide 42: Dev Mode – VCS Extension

![Slide42](/assets/slides/Slide42.jpg)

With Dev Mode, developers can use the Visual Studio Code extension to preview designs, receive updates, and access style properties and code snippets.

## Slide 43: Plugins

![Slide43](/assets/slides/Slide43.jpg)

Even without paid features, Figma offers plugins to extend functionality. These connect to external tools and streamline tasks. Popular plugins include GitHub, Unsplash, Iconify and Google Sheets.

## Slide 44: Widgets

![Slide44](/assets/slides/Slide44.jpg)

Widgets add interactive resources directly to the canvas. They support planning and co-creation with tools like sticky notes, charts and accessibility aids.

## Slide 45: Figma API

![Slide45](/assets/slides/Slide45.jpg)

Developers can use the Figma API to extract a JSON version of the design file. This simplifies turning designs into working code using JavaScript, TypeScript or Python.