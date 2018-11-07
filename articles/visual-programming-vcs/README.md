# Visual Programming & Version Control: Future Considerations
## Graphical Code Needs Visual Comparison Tools

![Gitlab application screengrab](images/pankaj-patel-729895-unsplash.jpg)

---

Graphical coding techniques such as [Model-driven development](https://en.wikipedia.org/wiki/Model-driven_engineering) (**MDD**) and [visual programming languages](https://en.wikipedia.org/wiki/Visual_programming_language) (**VPL**) seem to come and go throughout software development communities. Even in communities that largely remain in hand-written paradigms, tools and plugins that interact with source code and/or development environments continually improve. To demonstrate this point, projects utilizing web template languages often use simple editors and a combination of tools like [ESLint](https://eslint.org/), [postcss](https://postcss.org/) and [Webpack](https://webpack.js.org/) that analyze, modify and generate from source code. On the other side, Matlab/Simulink have refined graphical models for developing embedded control systems software.

Altogether, it appears that as generative and automated tools evolve, source code and its creation is continually influenced by integrated processes. But what are the consequences of further innovations in such tools? Do they promise milestones in software productivity? Are there inevitable walls and glass ceilings in which these tools are destined to run up against?

In this piece I assert that a future consideration for these tools is their interaction with [version control systems](https://en.wikipedia.org/wiki/Version_control) (**VCS**).

## Computer Aided Software Engineering — Silver Bullet?

In the 1980s, **CASE**<sup>1</sup> and **4GL**<sup>2</sup> arose with the ambitious intentions of automating software engineering design processes, specifically to alleviate various costs of development. However their promises remained largely unfilled: many companies that bought into these technologies left them “on the shelf” [2]. Perhaps without coincidence, it is around this time that Fred Brooks published a seminal article titled “No Silver Bullet — Essence and Accident in Software Engineering” [1-2].

In the article, Fred claims that all of the major innovations in software development have already been uncovered and then goes on to demonstrate that software has a complicated “essence” of which there exists no “silver bullet” solution(s). Of the candidate silver bullets surveyed throughout the article, Fred honed in on topics near and dear to CASE: high-level design languages, automatic programming, graphical programming and environment tools.

>There is no single development, in either technology or in management technique, that by itself promises even one order-of-magnitude improvement in productivity, in reliability, in simplicity.

Fred did, however, predict utility in static analysis tools while carefully noting that such tools are separate from essence: syntactic analysis, linting and related aides do not unravel errors at the conceptual levels that contribute to the large costs of development. In hindsight this is not surprising as we now see widespread adoption of **IDEs**<sup>3</sup> and despite their power, they do not replace an understanding of program design. However, it’s worth understanding why these have become so widely adopted in order to gain insight on what may make future innovations successful.

I believe an integral reason IDEs and related technologies are successful is because they’re comprised of a rich system of configurable, simple and most importantly **cohesive** plugins. Modern IDEs integrate with multiple languages, version control systems, build systems, debugging tools, and so on. Rarely is a developer locked into a specific configuration. Further, the extensive set of plugins and their accompanying support are usually a product of open source.

Altogether, it’s as if the IDEs are malleable and rather just “there” to adapt to most situations. One doesn’t feel constrained by other tools in their toolbox. If there’s no existing configuration for the task at hand, an open source solution can often be crafted.

With this information in mind while carefully re-examining Fred’s statement, the words “**by itself**” pop out. Indeed in the next paragraph, Fred carefully states:

>Skepticism is not pessimism, however. Although we see no startling breakthroughs — and indeed, I believe such to be inconsistent with the nature of software — many encouraging innovations are under way. A disciplined, consistent effort to develop, propagate, and exploit these innovations should indeed yield an order-of-magnitude improvement. There is no royal road, but there is a road.

Thus, as shown in the case of IDEs, innovations in software development processes and tools are seen when a collection of efforts propagate in time. No one “magic tool” will replace everything.

Where does all of this leave graphical coding technologies such as MDD and Visual Programming Languages? Will they eventually be widely adopted? Although I refrain from offering an answer, I assert at least one major factor that will determine their success: a need for integrating with existing ecosystems and in particular, version control systems.

<sup>1</sup>[Computer Aided Software Engineering](https://en.wikipedia.org/wiki/Computer-aided_software_engineering)
<sup>2</sup>[Fourth Generation Programming Languages](https://en.wikipedia.org/wiki/Fourth-generation_programming_language)
<sup>3</sup>[Integrated Development Environment](Integrated Development Environment)

## The Problem with Graphical Coding and VCS

Fred’s article addressed both MDD and VPL, discussing their unlikelihood as silver bullets in software development. VPLs appear to use poor abstractions such as flowcharts which are often constrained by the literal dimensions of computer screens. MDD is potentially a useful solution methodology but it does not ease identification and specification of problems. Furthermore, the general applicability of MDD to a wide range of software systems is questionable.

However as graphical coding techniques gain momentum in academia and in specific industries, there’s a critical issue contingent upon their future: graphical coding paradigms need improved integration with VCS.

One of the major benefits of modern VCS tools is the way multiple developers can view commit histories, differences and review each others’ code. In other words, it’s not just that VCS is used to backup changes, tag commits and share code. It’s that modern VCS allows developers to effectively communicate past, present and future changes with one another. In fact, according to the [Github Flow](https://guides.github.com/introduction/flow/) model, pull requests are meant to be opened and initiated long before they’re ready for merge. The reason is precisely for demonstrating, comparing and tracing differences alongside communication and review [3].

It is precisely these modern VCS benefits that graphical code fails to utilize, as graphical code is obscured in binary and often only able to be viewed by specific editors and/or applications.

## Case Study: UE4 Blueprints

Recently, I started developing with the Unreal Engine (UE4) for the first time. One of the aspects within UE4 is a visual programming language called “Blueprints”, shown below.

The grey areas are comments. White pin lines represent execution flow while blue lines represent data flow. Red nodes are registered events and the green and blue nodes represent methods and functions.

![UE4's Visual Programming Language: Blueprints](images/Blueprint.png)

Although it’s not my cup of tea, I can still think of some benefits to this style of programming:

1. It allows “wiring” of basic functionalities to be handled by a designer.
2. The Blueprint is bound to the entity in the IDE and thus it’s easy to see its effects. That is, the UI and the “blueprint” that directly encodes it logic are side by side. One doesn’t need to map a system of obscure `.cpp` files to pieces of UI.
3. Visuals can be easier to reason about for programs that lend themselves well to simple flow. Indeed, a developer may use similar flow constructs as a form of specification prior to coding in the first place.

**However, there is a major drawback: tracking file changes.** In UE4, Blueprints are stored as binary in `.uasset` files. Similarly in Matlab, models are stored as `.mdl` or `.slx`. These files not only contain the programming logic, but they also encode data about the graphical information such as the positioning and names of each of the nodes. Such information is hard to track and visualize across files.

To illustrate, if I have a clean working directory and then proceed to open a blueprint and drag any one of the nodes ever so slightly **without changing logic** (ie: a purely aesthetic change), a `git status` shows a dirty working directory:

![This change came about from simply moving a Node a few millimeters](images/status.png)

What distinguishes this trivial aesthetic change from an actual modification to the programming logic? Well, in terms of a `git diff`, **nothing**. The sole ‘source of truth’ remains in commit messages. Contrast this with adding white space or a comment to a `.cpp` file. Although these are purely aesthetic changes they are very easily visualized with VCS.

As of this writing, I’ve finished the early stages of a UE4 game which includes a 3D camera attached to a mesh with moving parts, aiming UI, user input/controller logic, a main menu and a level landscape. **None** of those changes are traceable beyond commit messages. To see the state of the software at any one point, I’d have to `checkout` or `reset` to that specific point and open the UE4 IDE.

To me, this is a serious red flag.

- How do we effectively visualize and see changes to software across commits and versions?
- How does one implement an effective “code review” of such graphical paradigms?
- How do collaborators compare and contrast their work against their colleagues’ branches?

Imagine collaborating with a team of developers over a central repository using such graphical programming tools. If a commit is made and put up for review — how do multiple people review it simultaneously in an effective manner? Must they all individually download the proposed version and open it side-by-side another version and manually inspect the blocks and scan for differences?

If methods to compare graphical code changes were to surface, how effective would they be? Comparing textual code across files using basic diff tools is quite effective and often easy to grasp depending on the number of changes. In graphical paradigms, can changes to nodes, locations and wiring be as easily interpreted as the red/green highlighting of text? Are typical screen sizes even a suitable canvas of which such differences can be rendered?

Such challenges must be embraced if graphical paradigms are to be continually pursued.

## Concluding Remarks

Graphical code will never be a silver bullet. If there is a future entailing its widespread adoption it can only be realized through integrating with other tools and existing ecosystems.

Although graphical code and other innovative development techniques may yield benefits in constructing software solutions, a need for source maintenance and thus managing differences and versioning will not disappear.

In particular, graphical coding paradigms need intermediary plugins and tools that stand between them and VCS in order to clearly visualize changes and comparisons. Furthermore these tools need to facilitate collaboration and design review.

---

## References

[1] Brooks, Frederick P., “No Silver Bullet: Essence and Accidents of Software Engineering,”. Computer, vol. 20, no. 4, April 1987, pp. 10–19. 
[Available here]

[2] Glass, Robert L. “‘Silver Bullet’ Milestones in Software History.” Communications of the ACM, vol. 48, no. 8, Aug. 2005, pp. 15–18.

[3] Chacon, Scott. “GitHub Flow”. 2011. [Online]. Available: http://scottchacon.com/2011/08/31/github-flow.html

---

My name is Grey, aka @vapurrmaid. I’m a software student and programming enthusiast. I don’t use social media, but I’d like to connect on [Github](https://github.com/vapurrmaid):

<a href="https://github.com/vapurrmaid">Vapurrmaid's Github</a>

Here's a previous article you may enjoy:

<a href="https://medium.com/@vapurrmaid/code-something-weekly-how-and-why-44640d279ca1">Code Something Weekly: How and Why</a>
