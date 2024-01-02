# Assessment for Unit 3

Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.

A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.

The step-by-step instructions [here](https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md) breakdown the git and GitHub process for this assessment.

Assessment should be accessed through the GitHub Classroom link provided to you in Slack.

PRs should be posted _before_ class begins on Tuesday, January 2, 2024.

#### Process

- Accept the assignment via GitHub Classroom link shared with you in Slack
- `cd` into an appropriate location on your local, we recommend the Desktop
- Clone the assessment repository
- `cd` into the assessment
- Create a branch with the unit and your name, e.g `unit-3-sarah-proctor`
- Run $ `yarn` to install the React dependencies
- Run $ `yarn start` to start the server
- Complete all assessment tasks
- Git add files, commit, push to your branch
- Create a pull request and leave the branch open for review!

---

### React Challenge

1. React Debugging: The Card Draw React application has three (3) errors that need to be fixed. Use the console and error messages to guide you to the solution.

2. React Feature: Add functionality to the `Return Cards and Shuffle Deck` button using the `shuffle` function to reset the Card Draw application to its original state.

3. React Concepts: Add comments to the sever (7) notations in the `drawCard` function describing in detail the functionality of the following line of code.

4. STRETCH (optional): Add stylings of your choice to the application. Ensure the styling does not interfere with the card draw functionality.
((didnt do :( i want to do this still when I find the time)))

### Interview Practice Questions

1. What are three (3) syntax difference between HTML and JSX?
html syntax difference- 
1. class= 
2. style="color: x;"
3. Comments In HTML, you use <!-- ... --> for comments.

JSX syntax difference-
1. className
2. style={{ color: "x" }}
3. Comments In SX, JavaScript-style comments ({/* ... */}) or single-line comments (// ...) are used.

These differences arise because JSX is a syntactic extension of JavaScript, and it is transpiled into JavaScript code during the build process.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?
yarn runs packages (this was my original answer) chatGpt says that yarn checks for yarn lock file in the project, which I guess locks the dependencies to ensure that the installations are consistent. 
if the yarn lock is present it installs the dependencies specified on the lock file, if not it installs the dependencies based on the package.json file.
once dependencies are installed it updates the file to reflect the exact versions that were installed.
it also looks for any scripts defined in the scripts 
managing dependencies, checking and updating the yarn.lock file, and executing any scripts defined in the package.json file.

3. What is the difference between state values and props in React?
both state and props are used to manage and handle data within components 
state values - 
source data- It is used for managing and storing data that belongs to a component. State is declared and used within the component and is mutable. Changes to state trigger a re-render of the component. 
Mutability-It is mutable and can be updated using the setState function. React components re-render when their state changes.
Declaration-Declared using the useState hook in functional components or as a property in class components
Ownership-Owned and managed by the component where it is declared.
Access-Accessed using useState hook in functional components or this.state in class components.

props-
source data- Short for "properties," props are used to pass data from a parent component to a child component. Props are immutable and are set by the parent component.
Mutability- They are immutable and cannot be modified directly by the component that receives them. Changes in props must come from the parent component.
Declaration-Passed down from a parent component and accessed as arguments in the child component
Ownership-Owned by the parent component that passes them down.
Access-Accessed as arguments in the function component or using this.props in class components.

4. STRETCH (optional): What is the difference between a div tag and a span tag?
both the <div> and <span> tags are container elements used to group content, but they are typically used in different scenarios due to their default styling and behavior.
div tag- Division Tag:

The <div> tag is a block-level container element.
It is used to group and structure content on a web page.
By default, a <div> element starts on a new line and takes up the full width available.
It is often used to create divisions or sections in the layout.
span tag - The <span> tag is an inline container element.
It is used to apply styles to specific portions of text or inline elements.
By default, a <span> element does not start on a new line and only takes up as much width as necessary.
It is often used for applying styles or scripting to small portions of text within a block-level element.

In summary, while both <div> and <span> are container elements, the <div> tag is typically used for block-level grouping and layout purposes, while the <span> tag is used for inline styling and grouping of text elements.

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming:
OOP-programming paradigm based on the concept of "objects," which encapsulate data and behavior. It organizes code into reusable structures (objects) that interact with each other, promoting modularity, flexibility, and code reuse. OOP principles include encapsulation, inheritance, and polymorphism, providing a way to model real-world entities and their relationships in software development.
2. Ruby:
Ruby-Ruby is a dynamic, object-oriented programming language that is designed for simplicity and productivity. ynamic Typing: Variables do not have predefined types, and their types can change during runtime.

Object-Oriented: Everything in Ruby is an object, and the language follows the principles of object-oriented programming.

Garbage Collection: Ruby has automatic memory management through garbage collection, which helps developers focus on writing code rather than managing memory.

Flexibility: Ruby is known for its flexibility and expressiveness, allowing developers to write concise and readable code.

Community and Libraries: Ruby has a vibrant and supportive community, and it comes with a rich ecosystem of libraries and frameworks, most notably Ruby on Rails for web development.

Ruby is often used for web development, scripting, automation, and other general-purpose programming tasks. The Ruby on Rails framework, in particular, has gained popularity for building web applications efficiently.
3. Ruby Hashes:
Ruby Hashes- a hash is a collection of key-value pairs, where each unique key is associated with a specific value. Hashes are also known as associative arrays or dictionaries in other programming languages.
---

### Assessment Review Process

When an instructor reviews a student's assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels in their learning process of new skills in the following levels: novice, advanced beginner, competent, proficient, expert. For this course students will be evaluated as novice, advanced beginner, or competent skill levels. Skill levels are not grades! Skill levels measure current understanding of a set of topics covered in class.

Assessments are expected to be completed on time. In the event of an emergency, a professional developer will communicate to the instructor and reestablish a deadline suitable to both parties. Assessments turned in late without communication will be evaluated at a lower level of skill acquisition.

### Incomplete

An assessment that is considered incomplete is one that did not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able access the next assessment until the current one is complete. An assessment will be considered incomplete due to the following:

- questions with no answer (excluding STRETCH options)
- no pseudo code when requested
- non-working code with no accompanying explanation

### Complete

An assessment that is considered complete is one that met the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.

### Novice

The novice stage is the first level of skill acquisition. In the novice level, the student is just beginning to understand the skill and requires a step-by-step "recipe" to produce an output. An assessment that is considered at the novice level of skill acquisition is one that met the requirements of a valid attempt on every question while closely following process notes from class to produce:

- basic pseudo code
- code that will output content in the terminal
- "your answers" written in the student's own words
- researched answers written in the student's own words that provides additional context

### Advanced Beginner

The advanced beginner stage is the second level of skill acquisition. In the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the "recipe" will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class to produce:

- pseudo code with proper vocabulary terms
- code that will output correct content in the terminal
- "your answers" written in complete sentences the student's own words that provide partially correct comments
- researched answers written in complete sentences in the student's own words that provides additional context

### Competent

The competent stage is the third level of skill acquisition. In the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own "recipe" to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources to produce:

- detailed pseudo code with proper vocabulary terms
- code that will output correct content in the terminal following best practices
- "your answers" written in complete sentences the student's own words that provide correct answers
- well researched and detailed answers written in complete sentences in the student's own words that provides additional context
