## Research Notes 
#### Ciaran 

Diagram
The diagram shows how the technological components in figma work together to give the user a seamless, real-time collaboration design experience.

User Browser/Figma App
The user interacts through their browser or figma app. This is the user interface where designs are created, edited and you can collab.

Frontend: React
The front end of figma is built using react, this powers the interface, menus and collaboration features. React updates the interface in real time.

WebSocket + REST API
Communication between front and backend.

Backend
Manages collab features

Database
Backend communicates with database to store design metadata, user info

Cloud Storage
Handles images, components and design files

External API
Figma connects to external api to extend its functionality 

#### Olivia

Slide 16 – Figma Fundamentals 

We are now going to look at some of Figma’s features and demonstrate how it can be used in Web Development. You will find that the core features are beginner friendly and simple enough learn.  

Slide 17 – Creating a new design file 

After creating a design file, UX and UI designers will begin to work on their wireframes within Figma canvas which we can see here. This is the creative space where they can experiment with different design styles and layouts, and create prototypes to demonstrate their ideas before any development is needed. 

Slide 18 – Working with frames 

The great thing about Figma is its ability to help create responsive designs and test how each feature will look on different screen sizes. This is done through the use of ‘Frames’ which designers will use to contain the elements for each page. In the left hand panel, we can see Figma has a range of preset screen sizes which designers can choose from. 

Slide 19 – Adding basic elements 

After defining the screen dimensions, designers can then begin to add elements to their designs such as shapes, text, vectors and drawings. 

Slide 20– Using the properties panel 

These can then be customised using the properties panels where you can adjust attributes like position, layout and colour. 

Slide 21– Previewing your design (pt1) 

At any point, designers can test their wireframes, by previewing them in the editor using the ‘play prototype’ button, 

Slide 22– Previewing your design (pt2) 

Or alternatively, they can use ‘Present’ mode which is great for presenting the finished wireframes to their clients or colleagues. 

Slide 23– Pro Tools in Figma 

So beyond the basics, Figma has a range of advanced features that streamline the design-to-development handoff. As well as a range of tools to create an interactive prototype which will help represent the user journey across the application. 

Slide 24– Creating a team 

One of the main advantages of Figma is the ability to collaborate with other designers and developers which is done by creating a team.  

Slide 25– Sharing a design file 

This allows designers to share their projects with other team members, and they can also grant access to allow other members to collaborate on the design file.  

Slide 26– Real-Time Collaboration 

This feature is favoured in development teams due to its ability to speed up the design process as it allows users to work on the project simultaneously, as well as the ability to track what other members are doing with the live cursor update. Any changes that are made to the file will be reflected instantly.  

Slide 27- Comments 

Team members also have the ability to share their feedback as they can leave comments on the canvas and tag other members to ensure they see it which we can see here. *WAIT A SECOND TO CHANGE SLIDE* 

Slide 28- Styles 

Another way Figma improves efficiency between designers and developers is through its feature that allows design elements to be saved. This helps maintain consistency throughout the project, as designers can reuse these styles across the design and developers can easily integrate this into their CSS code. This can be done through the use of styles. 

Slide 29- Variables 

Or through the use of variables which allow designers to create collections and set design properties such as Colour, Number, String and Boolean values which developers can use as tokens in their code. 

Slide 30– Components (pt1) 

Within the wireframes, recurrent items such as icons and buttons might be used across multiple pages. To maintain consistency, designers can create components which allows their original design to be saved and reused throughout the project. 

Slide 31– Components (pt2) 

Designers and other team members can then find these components saved from their design files within the ‘Assets’ tab. They can then easily create an instance of this which will ensure the design file is cohesive as all the original design attributes will automatically be applied. In this example, you can see a component frame consisting of 4 icons. You can identify these as components due to the 4 diamonds included in the layers tab. Whereas, any instances will only have a single diamond. 

Slide 32– Auto Layout (pt1) 

By using the Auto-Layout feature, designers can set specific alignment and spacing to their component frames which is a great way to ensure the design is responsive as any new instance created will automatically adjust their properties dependant on its frame container. 

Slide 33– Auto Layout (pt2) 

This is also great for developers as the spacing attributes are consistent throughout the project. In this example, we can see how auto layout is used on a frame of components. When an instance is created for these set of icons and then added to a smaller screen size, the spacing automatically readjusts, even when one of the icons is hidden from view. 

Slide 34– Variants (pt1) 

Figma also allows you to create multiple versions of a component. Which is great for implementing interactive features in the design such as check boxes. These variants are then saved inside the original component and can be found under the ‘assets’ tab. 

Slide 35– Variants (pt2) 

When creating an instance of the component, designers can then set it to various states. In this example, we can see two variants for the component ‘checkbox’ which includes ‘unchecked’ and ‘checked’. *WAIT A SEC BEFORE CHANGING* 

Slide 36– Interactive Components 

Figma’s prototype tools makes it easy to demonstrate real user interaction when presenting wireframes. For example, if a component has different variants, you can define interaction details including the trigger and action which allows you to swich between variants in the prototype. In this example, the checkbox component is set to display as unchecked by default, but on tap, it changes to the checked version. 

Slide 37– Prototype Flows 

Incorporating interactions is an effective way to present the design clearly and demonstrate purpose of each element. An important one to set is the prototype flow, which allows you to define the navigation path and represent the user journey across the design. 

Slide 38- Overlays 

Interactions can also be used for elements that will overlay the main content such as dropdown and popups. Once these are created, you can link them to a component in the main frame, for example a button, so that when it is clicked, the overlay appears in a position of your choice.  

Slide 39– Animations (pt1) 

A more advanced way you can use Figma’s prototype tools, is to create animations to show motion between elements. In this example, there are two instances of a frame that contain a ‘Swipe to delete’ component. By hiding the components position in the first frame through the properties panel, 

 Slide 40– Animations (pt2) 

and then setting an ‘on drag’ interaction, the prototype demonstrates what happens when the user swipes that area. You can explore a range of similar smart animation features in Figmas community files where you will find tutorials and guides on how to implement each one. 

Slide 41– Dev mode 

To help integrate the design files into development, Figma also offers a paid feature called ‘Dev mode’, which streamlines the handoff between designers and developers as the developer can access design specifications, code snippets and assets, as well as new ways to collaborate with the designers. 

Slide 42– Dev Mode – VCS extension 

By using dev mode, developers can benefit from the Visual Studio Code extension which allows Figma files to be used within the editor. In Visual Studio Code, they can preview ready designs, receive updates and feedback and access development resources such as style properties and code snippets. As well as benefiting from intelligent code suggestions based on the Figma design file. 

Slide 43- Plugins 

If you don’t have access to any of Figma’s paid features, you can still benefit from a range of external resources through Plugins. This allows you to you to access tools and execute tasks that streamline the development/design process that are separate from the Figma canvas. Popular plugins include GitHub, Unsplash, Iconify and Google Sheets. 

Slide 44- Widgets 

While plugins connect Figma to external tools, widgets can be used to add interactive resources onto the canvas itself. These can help you create custom interfaces with reusable components and support planning and co-creation by giving you access to features such as sticky notes, interactive charts and accessibility design aids. 

Slide 45– Figma API 

Finally, developers can take full advanced of Figma within their code by using the Figma API. With an access token, they can extract a JSON representation of the Figma design file by using a HTTP request. Overall simplifying the process of turning designs into working code as it will allow you to integrate resources such as components and styles which you can interact with using JavaScript, TypeScript or Python. 

 #### Heather 

 Figma Presentation  

Scenario: Using Figma for Collaborative UI/UX Design  

Figma is a commonly used tool for collaborative user interface (UI) and user experience (UX) design projects, especially when team members are working in different cities, countries or remotely. Because it’s cloud-based, multiple users can access and edit the same project in real time, making it an ideal tool for distributed teams. 

For example, during the design phase of a mobile application, a UI designer can create wireframes and visual components while a UX researcher adjusts the user flows and layout structure at the same time. A project manager might review the design and leave comments directly on the file, and a developer can inspect elements and export any assets without needing separate tools.  

Because everyone works from the same file, sees updates instantly and can contribute to the project without needing to send files back and forth between the team, this kind of setup allows for faster refinement, clearer communication and fewer version control issues. Figma’s built-in tools like comment threads, auto layout and inspect mode support this kind of workflow and help streamline the design-to-development process.  

️Describe Pros & Cons of Figma  

Cross-Platform Accessibility: No matter what device is being used, as long as it’s modern, Figma is accessible across a range of devices and platforms. (Modern browsers, Windows, IOS, Linux, mobile devices including Android and Apple).  

 

Real-Time Collaboration: Teams can work on the same project simultaneously without version conflicts, changes are updated instantly allowing for a seamless collaboration project.  

 

Seamless version control: Every change is saved in the cloud automatically with a detailed history enabling designers and developers to rollback to an earlier project version with ease. This eliminates file confusion and the hassle of having duplicate file saves of the project.  

 

Powerful AI-Integration: AI makes early stage design in Figma accelerate, with new AI features such as Text-To-Speech and content generation. Using the AI features offered by Figma, teams can quickly create mock ups, generate code snippets and much more, saving them hours of work in the process. 

 

Component-Based Design: Teams can build reusable components and design systems, that keeps their project consistent. Updates made to the master component ripple across all instances, ensuring for visual uniformity whilst reducing repetitive edits.  

 

 

 

 

Cons 

 

Dependant on Internet: While you can use Figma offline on desktop, Figma’s true strength lies within cloud collaboration. Having weak or unstable internet connection may disrupt workflows, limit updates and slow down real-time collaborative work.  

Limited Offline Functionality: Using offline mode also restricts what features can be used. Users can edit files offline, but may face sync issues until they reconnect to the internet. 

Performance on Large Files: Projects that are quite complex with numerous artboards, high resolution images or multiple people working on a project can cause noticeable lag, even on a powerful machine which can be frustrating.  

File and Library Overload: Having a big team doing a collaborative project on Figma can lead to shared libraries, permissions and components becoming quite messy. To avoid this, it’s important to have strict organizational rules in place. 

Plugin Quality Variability: While there is a huge amount of plugins, quality does vary widely. Some of the plugins can be outdated, buggy or poorly supported. Individuals and teams will need to carefully choose what plugins they use before integrating them into their workflows. 

Paywall: Figma is free to use with a lot of features and some plugins available to use, however, they do offer a paid plan, which has a lot more to offer. For large teams, costs can add up quickly compared to one-time purchase software. 

Heavy Browser Usage: Running Figma along with other resource-intensive tools such as Teams can strain system memory resulting in slower performance, some lag and perhaps crashes. 

 

Figma Alternatives  

Adobe XD – Offers seamless integration with Photoshop and Illustrator, has robust prototyping tools and voice interaction support and is best for teams that already use Adobe Creative Cloud for projects.  

Sketch – Native macOS performance, has a strong plugin ecosystem and excellent vector editing tool, sketch is ideal for Mac users. (Mac Only) 

Baslamiq – It is basic, but offers quick and e6asy mockups, it prioritizes simplicity over polishing. It is a great tool for early-stage wireframing. 

Marvel – It has an intuitive interface with usability testing features and handoff tools for developers, Marvel allows for rapid prototyping and is ideal for user testing. 

Mockplus – It is best for teams that want everything in one place, from wireframing to final design. You can build prototypes quickly, manage your design system with ease and worth smoothly with your team, without needing a lot of plugins or extra tools. 

UXPin - Offers designers the tools to design realistic and interactive prototypes that behave like a real app. You can add logic, states and even real data to your design within UXPin. It is a handy tool for accessibility features and testing. 

 

So, what makes Figma better?  

Figma stands out for it’s real-time collaboration ability, browser-based accessibility and seamless design-to-development workflow.  

 

Figma runs in the browser, so no installation is needed. It also works across Windows, MacOS, Linux and even Chromebooks. 

It is beginner friendly with it’s clean and intuitive interface, it is easy to learn and fast to use. 

Multiple people can work on the project simultaneously weather they are designing, editing or commenting.  

Live commenting and shared libraries make it easy for a team to stay aligned on their project. 

It has built-in version control, people don’t need to manage file versions manually. 

Developer handoff is smooth with inspect tools, CSS code snippets and asset exports directly from the design file. 

It supports vector editing, prototyping and responsive design in one place without needing to switch to other tools.  

Figma offers a generous free plan for individuals and small teams, even though some features may be blocked by a paywall, there is plenty features available to use completely free of charge. (Offers majority of core features) 

No need to buy a license or worry about platform restrictions, individuals and teams can upgrade their plan if they wish by a monthly or annual subscription. 

### Tables 


![Limitations Table](limitationstable.png)


![Free Plans & Trials Table](freeplanstable.png)

 ### References

[Figma](https://www.figma.com/blog/everything-you-need-to-know-about-dev-mode/) (2024) *Everything You Need to Know About Dev Mode* | Figma Blog. [online] Available at: https://www.figma.com/blog/everything-you-need-to-know-about-dev-mode/.


[What is Figma?](https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma) Figma Learn (2024) *What is Figma?* [online] Available at: https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma (Accessed 7 October 2025).

[What is Figma?](https://www.geeksforgeeks.org/websites-apps/what-is-figma/) (2024) GeeksForGeeks. *What is Figma?* [online] Available at: https://www.geeksforgeeks.org/websites-apps/what-is-figma/ (Accessed 7 October 2025).

[Pros & Cons of Figma](https://projectmanagers.net/the-pros-and-cons-of-using-figma-software/ ) Kanai, P. (2025) *The Pros And Cons Of Using Figma Software* [online] Available at: https://projectmanagers.net/the-pros-and-cons-of-using-figma-software/ (Accessed 10 October 2025).

[UXPin vs Adobe XD](https://www.uxpin.com/studio/blog/figma-vs-adobe-xd-vs-uxpin/) (2023) UXPin. *What’s the Difference Between Figma vs AdobeXD vs UXPin?* [online] Available at: https://www.uxpin.com/studio/blog/figma-vs-adobe-xd-vs-uxpin/ (Accessed 12 October 2025).

[Mockplus](https://www.mockplus.com/) (2025) Mockplus. [online] Available at: https://www.mockplus.com/ (Accessed 12 October 2025).

[Balsamiq](https://balsamiq.com/) (2025) Balsamiq. [online] Available at: https://balsamiq.com/ (Accessed 12 October 2025).

[Marvel](https://marvelapp.com/) (2025) Marvel. [online] Available at: https://marvelapp.com/ (Accessed 12 October 2025).

[UXPin](https://www.uxpin.com/) (2025) UXPin. [online] Available at: https://www.uxpin.com/  (Accessed 12 October 2025).

[Sketch](https://www.sketch.com/) (2025) Sketch. [online] Available at: https://www.sketch.com/ (Accessed 12 October 2025).
 
[Coursera](https://www.coursera.org/learn/figma-pro-pt-1-auto-layouts-grids--components/lecture/arshB/class-project-01-responsive-lower-navigation) (2025) Coursera *Figma Pro Pt. 1: Auto Layouts, Grids & Components.* [online] Available at: https://www.coursera.org/learn/figma-pro-pt-1-auto-layouts-grids--components/lecture/arshB/class-project-01-responsive-lower-navigation (Accessed 27 Oct. 2025)

[DesignLab](https://designlab.com/figma-101-course/introduction-to-figma) (n.d.). Design Lab *Figma 101: Introduction to Figma* | [online] Available at: https://designlab.com/figma-101-course/introduction-to-figma.

[FigmaLearn](https://help.figma.com/hc/en-us/articles/360040318013-Play-your-prototypes) (2025) Figma Learn - Help Center. *Play your prototypes.* [online] Available at: https://help.figma.com/hc/en-us/articles/360040318013-Play-your-prototypes (Accessed 27 Oct. 2025).

[TemidJoy](https://temidjoy.medium.com/) Adefioye, T. (2018). *Easiest way to collaborate with your design team using Figma.* [online] Medium. Available at: https://temidjoy.medium.com/easiest-way-to-collaborate-with-your-design-team-using-figma-9e906b7723ec.

[Digidop](https://www.digidop.com/blog/features-better-collaboration-figma.) (2023) Digidop. *Figma, the design tool built for collaboration.* [online] Available at: https://www.digidop.com/blog/features-better-collaboration-figma.

[FigmaLearn](https://help.figma.com/hc/en-us/articles/) (2025) Figma Learn - Help Center. *Create interactive components with variants.* [online] Available at: https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants.

[Figma](https://developers.figma.com/docs/rest-api/) (2025) Figma.com. *Introduction | Developer Docs.* [online] Available at: https://developers.figma.com/docs/rest-api/.

[VolumeNine](https://www.v9digital.com/insights/plugins-vs-widgets/) (2025) Volume Nine. *Plugins vs. Widgets.* [online] Available at: https://www.v9digital.com/insights/plugins-vs-widgets/.

[Codefinity](https://codefinity.com/courses/v2/f9b355ab-23dd-4d38-a615-a41b6685d244/4a020f52-2309-406c-924b-c7485d487ebc/caa06e5e-0c4c-474d-95f6-d8075a3789ca) (2024) Codefinity. *Codefinity: Courses with certificates | Online Learning Platform.* [online] Available at: https://codefinity.com/courses/v2/f9b355ab-23dd-4d38-a615-a41b6685d244/4a020f52-2309-406c-924b-c7485d487ebc/caa06e5e-0c4c-474d-95f6-d8075a3789ca (Accessed 27 Oct. 2025).