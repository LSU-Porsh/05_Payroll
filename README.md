# Simple Payroll Website

## Project Description

The **Simple Payroll Website** is a basic web-based payroll calculator designed to calculate an employee's total pay based on their name, hours worked, and hourly rate.

This project is created for educational purposes and demonstrates basic web development concepts such as HTML forms, input validation, calculations, styling, and multiple web pages.

## Features

* Enter an employee's name.
* Enter the number of hours worked.
* Enter the employee's rate per hour.
* Calculate the employee's total pay.
* Apply overtime pay rules for hours worked beyond the regular working hours.
* Validate employee information and prevent negative values.
* Display payroll results clearly.
* Professional and user-friendly form design.
* Employee List page for viewing employee information.

## Tasks for Students

The project includes the following tasks:

* Fix the payroll calculation bug by adding an overtime pay rule.
* Add validation to prevent negative hours worked and negative hourly rates.
* Improve the website styling and make the form look more professional.
* Create a new **Employee List** page.
* Update the README file with contributor information and project instructions.

## How the Payroll Calculation Works

The regular working hours are calculated using the employee's normal hours.

If an employee works beyond the regular working hours, the additional hours are considered overtime.

**Example:**

* Regular hours: 40 hours
* Hours worked: 45 hours
* Rate per hour: ₱100
* Regular pay: 40 × ₱100 = ₱4,000
* Overtime hours: 5 hours
* Overtime pay is added based on the project's overtime rule.

The final amount is the employee's total pay.

## Project Structure

A typical project structure may look like this:

```text
Simple-Payroll-Website/
│
├── index.html
├── employee-list.html
├── style.css
├── script.js
└── README.md
```

### File Descriptions

* **index.html** – Contains the main payroll form.
* **employee-list.html** – Displays the list of employees.
* **style.css** – Contains the website's design and styling.
* **script.js** – Handles payroll calculations, validation, and other functions.
* **README.md** – Contains information and instructions about the project.

## Requirements

To run this project locally, you only need:

* A computer
* A modern web browser such as Google Chrome, Microsoft Edge, or Mozilla Firefox
* Git (if cloning the repository)

No additional frameworks, libraries, or server software are required.

## How to Run the Project Locally

### Method 1: Using Git

1. Open **Git Bash**, Command Prompt, or a terminal.
2. Clone the repository:

```bash
git clone <repository-url>
```

3. Go to the project folder:

```bash
cd <project-folder>
```

4. Open the project folder.
5. Double-click `index.html`.
6. The website will open in your default web browser.

### Method 2: Opening the HTML File Directly

1. Download or copy the project files to your computer.
2. Locate the project folder.
3. Find the `index.html` file.
4. Double-click `index.html`.
5. The payroll website will open in your web browser.

## How to Use the Website

1. Open the payroll website.
2. Enter the employee's name.
3. Enter the number of hours worked.
4. Enter the employee's hourly rate.
5. Click the **Calculate** button.
6. Review the calculated total pay.
7. Use the **Employee List** page to view employee information if available.

## Input Validation

The website should prevent invalid payroll information.

Examples of invalid input include:

* Empty employee name
* Negative hours worked
* Negative hourly rate
* Invalid characters or values in numeric fields

Users should receive an appropriate message when invalid information is entered.

## Contributors

* **Justin Troy M. Estrevillo** – Documentation and README Manager

## Contribution Workflow

1. Claim an Issue from the Project Board.
2. Create a new branch for your work.
3. Make the required changes.
4. Test your changes locally.
5. Commit your changes with a clear commit message.
6. Push your branch to the GitHub repository.
7. Open a Pull Request linked to the Issue.
8. Wait for the changes to be reviewed.
9. Once approved, the Pull Request can be merged.
10. Once merged, the linked Issue will close automatically.

## Example Git Workflow

```bash
git checkout -b feature-your-task
```

After making your changes:

```bash
git add .
git commit -m "Update payroll project"
git push origin feature-your-task
```

Then create a **Pull Request** on GitHub.

## Purpose of the Project

The purpose of this project is to provide students with hands-on experience in:

* HTML
* CSS
* JavaScript
* Form handling
* Input validation
* Basic payroll calculations
* Git and GitHub
* Branching
* Pull Requests
* Issue tracking
* Team collaboration

## License

This project is created for educational purposes.
