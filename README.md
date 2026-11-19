# JavaScript Set 2 – Arrays, Objects and Decision Making

This repository contains the two practical assignments from **Set 2**. Both projects are built using plain HTML, CSS and JavaScript.

## Projects

### 1. Shopping Cart with Discount
A stationery shopping cart where a user can increase or decrease item quantities, remove items, and view the bill.

**Features**
- Stores products in an array of objects.
- Displays item name, price, quantity and row total.
- Quantity cannot be reduced below 1.
- Allows items to be removed from the cart.
- Calculates subtotal and payable amount.
- Applies a 10% discount when the subtotal is ₹1,000 or more.
- Displays an empty-cart message when all items are removed.

**Sample calculation**
- Notebook: 3 × ₹120 = ₹360
- Pen Pack: 2 × ₹60 = ₹120
- Water Bottle: 2 × ₹350 = ₹700
- Subtotal: ₹1,180
- Discount (10%): ₹118
- Amount payable: ₹1,062

### 2. Multiple-Choice Quiz
A four-question JavaScript quiz that displays one question at a time and calculates the final score.

**Features**
- Stores four questions, options and correct-answer indexes in an array of objects.
- Displays one question at a time with radio buttons.
- Keeps the Next button disabled until an option is selected.
- Checks answers and calculates the score.
- Displays score, percentage and a result message.
- Provides a Restart Quiz button.

## Repository structure

```text
JavaScript-Set-2/
│
├── README.md
├── .gitignore
│
├── Scenario_1_Shopping_Cart/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Scenario_2_Multiple_Choice_Quiz/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── screenshots/
    └── (Add your project screenshots here)
```

## Technologies used

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)

No frameworks, external libraries, package installation or backend server are required.

## How to run

1. Clone or download this repository.
2. Open the repository folder in Visual Studio Code.
3. Open either `Scenario_1_Shopping_Cart` or `Scenario_2_Multiple_Choice_Quiz`.
4. Open that folder's `index.html` file in a web browser. You can also use the VS Code Live Server extension.

Run each project separately using its own `index.html` file.

## Assignment concepts demonstrated

- Arrays and objects
- DOM selection and manipulation
- Event listeners and event handling
- `if`, `else if` and `else` decision making
- Array methods such as `map`, `forEach`, `reduce` and `splice`
- Template literals
- Functions and variables
- Radio buttons and form interaction

## Screenshots

After running both projects, capture screenshots of:
- Shopping cart with the initial quantities.
- Shopping cart after changing quantities and applying the discount.
- Empty shopping cart.
- Quiz question screen with an option selected.
- Quiz result screen.

Add the screenshots to the `screenshots/` folder before submitting, if screenshots are required by your college.

---

**Academic submission:** JavaScript Set 2 – Arrays, Objects and Decision Making
