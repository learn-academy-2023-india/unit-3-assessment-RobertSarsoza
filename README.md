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

### Interview Practice Questions

1. What are three (3) syntax difference between HTML and JSX?
html syntax difference- 
1. class= 
2. style="color: x;"

JSX syntax difference-
1. className
2. style={{ color: "x" }}

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
div tag
span tag

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming:
OOP-
2. Ruby:
Ruby-
3. Ruby Hashes:
Ruby Hashes- 
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
