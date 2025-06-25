

# Outly — Event Discovery Platform (MVP)

Outly is a minimalist, location-focused event discovery platform built as part of my technical portfolio to demonstrate full-stack fundamentals, front-end interactivity, and cloud deployment. Inspired by platforms like **Eventbrite**, Outly helps users discover events by category, search location, and join events — all within a clean, user-friendly interface.

This project was developed as part of my **AWS Cloud and Software Engineering training**, with an emphasis on building real-world, scalable solutions.

---

##  Live Demo

Frontend hosted on AWS S3 (Static Website):

**[Visit Outly](http://outlyfrontend.s3-website-ap-southeast-2.amazonaws.com)**

---

##  Tech Stack

| Layer         | Technology                                               |
| ------------- | -------------------------------------------------------- |
| Frontend      | HTML, CSS, JavaScript (Vanilla)                          |
| Styling       | Custom CSS with responsive layout                        |
| Cloud Hosting | AWS S3 (Static Website), CloudFront (optional for HTTPS) |
| Design Assets | Canva-generated event imagery                            |

---

##  Features Overview

 Fully responsive landing page
 Event listing with dynamic filtering by category
 Real-time search by city or event title
 Modal pop-up with detailed event information
 Interactive **Join Event** button with live attendee updates
 Designed for future scalability with backend/API integration

---

## 📁 Project Structure

```
outly-cdp/
├── css/
│   └── style.css              → Custom styles and layout
├── images/                    → Event images designed via Canva
├── js/
│   └── main.js                → Event logic, filtering, modals
├── index.html                 → Landing page
├── outly-events.html          → Core event listing and interaction page
└── README.md                  → Project documentation
```

---

## ✨ Functionality Breakdown

**Search and Filter**

* Users can search events by **title** or **city**
* Category filters (Music, Tech, Business, etc.) dynamically narrow results

**Event Modals**

* Click any event card to reveal detailed information
* Modal includes image, title, city, date, category, attendees

**Join Event Workflow**

* Join button increments attendee count
* Visual feedback confirms successful joining
* System designed to later integrate with real-time backend updates

---

## 💡 Future Roadmap

| Feature                  | Status      | Notes                                       |
| ------------------------ | ----------- | ------------------------------------------- |
| Backend API with Node.js | Planned     | REST API for event creation and management  |
| MongoDB Integration      | Planned     | Store events dynamically (NoSQL)            |
| User Authentication      | Planned     | Secure joining, user profiles               |
| Full AWS Deployment      | In Progress | Serverless backend with AWS Lambda & S3     |
| Responsive Enhancements  | Completed   | Current layout adjusts to screen sizes      |
| Modal Join Button Sync   | Completed   | Attendee count updates from modal and cards |

---

## 🛠️ Lessons & Technical Growth

This project reflects my hands-on experience in:

 Building front-end interfaces with clean UX principles
 Hosting real projects on AWS infrastructure
 Exploring backend setup (Node.js, MongoDB) for future scalability
 Understanding the software development lifecycle for MVP products

Although this version uses static data for demonstration, the structure is designed for easy expansion into a fully functional, database-driven platform.

---

##  About Me

I'm a Software Engineering student with certifications in:

* AWS Solutions Architect
* Azure Fundamentals
* CompTIA Network+, Cloud+, Security+

Through Outly, I aimed to apply these technical skills in a real-world project, demonstrating my ability to:

* Design and build usable interfaces
* Work with AWS cloud tools
* Translate business ideas into functioning prototypes

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/manlikeolihi/outly-cdp.git
cd outly-cdp
```

2. Open `index.html` or `outly-events.html` in your browser.

3. Modify `main.js` to adjust event data or integrate future APIs.

---

##  Final Thoughts

Outly reflects my ambition to build scalable, modern software solutions while learning cloud platforms and front-end development. It's an evolving project — feedback, collaboration, and suggestions are welcome as I continue enhancing it.


