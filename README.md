# Goal-Based Savings Planner

A client-side **Goal-Based Savings Planner** built using **React.js (Vite)**.  
The application allows users to create financial goals, track savings progress, and view real-time currency conversion between **INR and USD**.

This project was developed as part of the **Syfe Frontend Intern Take-Home Assignment**.

---

##  Live Demo

 Live URL: https://saving-planner-assignment-syfe.vercel.app/

---

## 🛠 Tech Stack

- React.js (Vite)
- JavaScript
- Tailwind CSS
- Exchange Rate API (INR ↔ USD)
- Client-side state management

---

##  Features

### Goal Creation
- Add multiple savings goals
- Input goal name, target amount, and currency (INR or USD)

### Goal Display
- View goals as cards
- Shows:
  - Goal name
  - Target amount (original currency)
  - Converted target amount
  - Saved amount
  - Progress bar

### Contributions
- Add contributions via modal
- Input contribution amount and date
- Progress updates automatically

### Live Exchange Rate
- Fetches real-time INR ↔ USD exchange rates
- Displays last updated time
- Manual refresh option

### Dashboard Summary
- Total target amount (normalized to USD)
- Total saved amount (normalized to USD)
- Overall progress percentage

### UX & Validation
- Input validation (no negative values, required fields)
- Loading and error handling for API requests
- Responsive layout
- Smooth progress animations

---

##  Setup Instructions


```bash
# Clone the repository
git clone https://github.com/Lovekush-1509/SavingPlannerAssignment-syfe-.git

# Navigate into the project folder
cd SavingPlannerAssignment-syfe-

# Install dependencies
npm install

# Start the development server
npm run dev
