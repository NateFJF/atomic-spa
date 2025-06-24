# Atomic SPA – Angular Single Page Application

This project is a technical demonstration of building a modular and scalable Single Page Application (SPA) using Angular and the Atomic Design methodology. The app displays a table of file data with filtering, sorting, and export functionality.


---

## 📆 Features

* ✅ Built with **Angular 17** using **Standalone Components**
* ✅ Atomic Design structure: **Atoms**, **Molecules**, **Organisms**, **Templates**, **Pages**
* ✅ **Sorting** by File Number
* ✅ **Filtering** by State via tab navigation
* ✅ **Export** table data to CSV
* ✅ Modern SCSS styling and BEM-like class structure
* ✅ Optional integration with **Storybook**

---

## Atomic Design Breakdown

### 🔹 Atoms - The smallest functional UI elements

* `ButtonComponent`: Reusable button
* `IconComponent`: Material icon wrapper
* `CheckboxComponent`: Custom checkbox
* `TabComponent`: Single tab item

### 🔸 Molecules - Combinations of atoms

* `StatCardComponent`: Label + value stat cards
* `TableHeaderComponent`: Sortable column headers

### 🧩 Organisms - Groups of molecules that form distinct sections

* `NavTabGroupComponent`: Tab navigation filter
* `TableRowGroupComponent`: Table data rows
* `FilterActionGroupComponent`: Checkbox + export

### 🖼 Templates - Page layout containers

* `MainTemplateComponent`: Wraps page-level structure

### 📄 Pages - Fully rendered pages

* `DashboardPageComponent`: The SPA’s main interface

---

## 📁 Project Structure

```
src/app/
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
│
├── models/
├── utils/
└── styles/
```

---

## ⚙️ Setup Instructions

### 📌 Prerequisites

* Node.js (v18+)
* Angular CLI

### ▶️ Run the app

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/`.

---

## 📚 Storybook (Optional)

To run Storybook and preview reusable components:

```bash
npm run storybook
```

---

## 📄 Export Functionality

Click the **"Export"** button to download the currently visible table data as a `.csv` file containing:

* `State`
* `File number`

---

## 🔍 Filtering Logic

Clicking on a tab will filter the table by the corresponding `state`.
All filtering is handled reactively via Angular Signals.

---

## 🧠 Design Approach

I followed the **Atomic Design methodology** to enforce modularity and scalability. Each component is clearly scoped and reusable. I used a combination of Angular Signals and traditional `@Input()`/`@Output()` bindings, depending on the use-case, to maintain flexibility and readability. Shared state logic and data transformations were handled via a dedicated service for centralised control and reusability across componenets.

---

## 💡 Future Improvements

Given more time, I would:

* Research mobile responsiveness and accessibility (ARIA)
* Add unit tests for CSV export, sorting, and filtering
* Integrate a design system like Angular Material fully or Tailwind
* Expand Storybook coverage with controls and interactions
* Tighten spacing for full UI fidelity

---

## 📄 License

MIT – Feel free to reuse and modify this project.

---

## ✨ Credits

Developed by [Nathan Farrugia](https://github.com/NateFJF)
