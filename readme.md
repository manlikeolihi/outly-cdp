# SaaS Company Landing Page

This is part of my [YouTube HTML/CSS tutorial](https://www.youtube.com/watch?v=HXYZxVbWkjc) on building a professional website for beginners.

This project is from the [iCodeThis](https://icodethis.com/?ref=traversy) challenge website and does not use any frameworks or libraries. It is built with pure HTML and CSS and a bit of JavaScript for the hamburger menu and the FAQ accordion.

<img src="./images/screen.png" width="500" style="display:block;margin: 40px auto" />

## Steps to use Docker 

```shell
docker build -t saas-landing-page:1 .
```

```shell
docker run -d -p 80:80 saas-landing-page:1
```


Great — here’s a detailed, from-scratch breakdown of everything we’ve done so far in building your Eventbrite-style MVP project:

---

## 🛠️ OVERVIEW

We’ve built a **static front-end web app** using **HTML, CSS, and JavaScript** to simulate an event discovery platform, called **Outly**, styled cleanly, showcasing multiple events with filters, interactivity, and dynamic UI updates.

---

## 📁 PROJECT STRUCTURE

```
OUTLY-PROJECT/
│
├── css/
│   └── style.css           → All the styles for layout, spacing, buttons, etc.
│
├── images/                → Contains your 7 event images (named based on event type)
│
├── js/
│   └── main.js            → Contains logic: search, filters, modals, join handling
│
├── index.html             → Main home/landing page (optional)
├── outly-events.html      → The core page that lists and manages events
└── readme.md              → Project description and usage notes
```

---

## ✅ FUNCTIONALITY IMPLEMENTED

### 1. **HTML (Structure – `outly-events.html`)**

* We created a **header** with a page title and subtitle.
* The **main section** displays **cards for each event**, using Bootstrap for layout.
* Each card includes:

  * An image (from `images/`)
  * Title, city, date, category, attendee count
  * A **"Join Event"** button
* A **search bar** was added to filter events by title or city.
* **Category filter buttons** (e.g., Music, Tech) let you narrow results by event type.
* A **modal popup** shows more detailed info when a card is clicked.

---

### 2. **CSS (Style – `style.css`)**

* Custom classes to:

  * Style the header banner (blue background, centered white text)
  * Style the event cards (spacing, box-shadow, image sizing)
  * Define modal styles (centered popup, close button, backdrop)
  * Add responsiveness using Bootstrap grid

---

### 3. **JavaScript (Logic – `main.js`)**

#### a. **Event Data**

We used an **array of objects** in `main.js` for each event:

```js
const events = [
  {
    title: "Live Music Night",
    city: "Sydney",
    date: "Oct 15, 2025",
    category: "Music",
    attendees: 120,
    capacity: 300,
    image: "images/event-music.jpg"
  },
  ...
];
```

#### b. **Rendering Cards**

We loop through the `events` array and create Bootstrap card elements using `innerHTML`.

#### c. **Search**

* User types into the input box.
* JavaScript listens to the `input` event and filters the array based on:

  * `event.title.toLowerCase().includes(query)`
  * `event.city.toLowerCase().includes(query)`

#### d. **Category Filter**

* Filter buttons are rendered dynamically.
* When clicked, we update the filter state and re-render the cards with only matching events.

#### e. **Modal Popup**

* Clicking a card shows a modal with:

  * Large image
  * Title
  * City, Date, Category, Attendees
* Modal is shown by toggling its `.show` class.

#### f. **Join Button**

* Each card has a "Join Event" button.
* When clicked:

  * Attendee count increases
  * A popup (`alert()`) confirms the join
  * The event card re-renders to reflect new count
* NOTE: If joined from the **modal**, we’ll soon add a "Join" button inside the modal as well.

---

## 📸 IMAGES

* Images were designed in **Canva** and exported as `.jpg` files.
* All saved in the `images/` folder.
* Each filename corresponds to the event:
  `event-music.jpg`, `event-tech.jpg`, `event-comedy.jpg`, etc.
* Suggested size: **600x400px**

---

## 🧪 WHAT’S WORKING RIGHT NOW

✅ Event cards are displaying correctly
✅ Search by city/title works
✅ Category filtering works
✅ Modal opens with full event details
✅ Join Event updates attendee count (from cards)
✅ Images are displayed for each event

---

## 🧱 NEXT STEPS

Here’s what we’ll build next:

1. **Add "Join Event" button inside the modal**
   → Currently only exists on the main card
   → Make it reflect the join and update count

2. **Ensure attendee count updates in both views**
   → Modal and card must stay in sync

3. **Enhance styling if needed** (icons, animations, mobile responsiveness)

4. **Deploy to AWS**
   → Likely using **S3 + CloudFront** to serve static files
   → I’ll guide you through AWS hosting too

---

Would you like us to begin by making the “Join” button work inside the modal now? Or would you prefer we move on to hosting prep?






Absolutely — let me break this down clearly and in detail so that you can **understand MongoDB** and confidently explain it during your presentation. I’ll also include a **brief explanation you can read or include in your slides** about why you *tried to use it but didn’t in the final version*.

---

## 🧠 What is MongoDB?

MongoDB is a **NoSQL database**, which means:

* It stores data in a **flexible, JSON-like format** (called BSON).
* Unlike SQL (which uses tables and rows), MongoDB stores data in **collections of documents**.
* Think of it like a **digital folder full of Word documents** — each document can have different fields, sizes, and values.

---

### 🧱 Example of a MongoDB Document

```json
{
  "title": "Live Music Night",
  "location": "Sydney",
  "date": "2025-10-15",
  "category": "Music",
  "capacity": 300,
  "attendees": 120
}
```

That’s ONE event stored as a document in the database.

MongoDB stores thousands (or millions) of these documents, and you can easily search, add, delete, or update them using **queries**.

---

## 🔍 What Can MongoDB Do?

| Feature                      | What it Means                                                   |
| ---------------------------- | --------------------------------------------------------------- |
| 🔍 **Queryable**             | You can search for events by title, city, or category           |
| 📁 **Document-based**        | Each event is a document – easy to model real-world data        |
| ✏️ **Flexible Schema**       | No need to define fixed columns (unlike SQL databases)          |
| ⚡ **Real-Time Reads/Writes** | Add new events, update attendees, delete events on the fly      |
| 🌐 **Works With APIs**       | MongoDB connects easily with backend servers like Node.js       |
| 🛠️ **Works With Mongoose**  | In Node.js apps, Mongoose helps structure and validate the data |

---

## 🧠 Why Do Developers Use MongoDB?

Because it’s:

* **Fast** for read/write operations
* **Perfect for projects like event websites**
* **Scalable** (can support millions of users and events)
* **Developer-friendly** — JSON is easy to understand and code with

---

## 🧱 Example Scenario with MongoDB

Let’s say a user fills out a form to create a new event.

```js
{
  title: "Startup Pitch Night",
  location: "Canberra",
  date: "2025-11-01",
  category: "Business",
  capacity: 300
}
```

Instead of hardcoding this into your frontend like we’re currently doing, MongoDB would **store this automatically**.

Then your frontend would **fetch all stored events** from MongoDB using an API (like `GET /events`) and render them.

---

## ❌ Why We Didn't End Up Using It

> During development, we initially considered integrating MongoDB as a database solution to store and manage events dynamically. However, we encountered several limitations:

1. **Project Scope:** Our CDP requirement focused more on frontend presentation and AWS hosting, rather than backend/database integration.
2. **Time Constraints:** Integrating MongoDB would require setting up a backend server (Node.js + Express), creating REST APIs, connecting via Mongoose, and managing data flow.
3. **Hosting Requirements:** Hosting the full stack (MongoDB, Node.js backend, and frontend) would require more advanced AWS setup, possibly using EC2, Lambda, or Elastic Beanstalk — which was beyond the intended project scope.
4. **Presentation Simplicity:** To keep the demo clean and understandable for all audiences, we opted for a static frontend with hardcoded event data in JavaScript.

So, while MongoDB is **ideal for real-world event platforms** (like Eventbrite), for the purpose of our MVP and clear presentation, we focused on getting the **frontend right first**.

---

## ✅ But We Learned From It

Even though we didn’t fully implement it, this experience gave us a strong understanding of:

* **How MongoDB works**
* **What a full-stack app involves**
* **When to use JSON + databases vs. hardcoded arrays**
* And why simplifying early helps us focus on design, user experience, and AWS deployment

---

If you want, I can also write a **slide summary** for your PowerPoint or PDF deck with diagrams or bullet points to explain this clearly.





Awesome! 🎉 Glad it's working!

---

### 💡 So Why Did the Port Have to Change?

Here’s a breakdown:

#### 🔌 1. **Ports are like channels on your computer**

* Every application or service that communicates over the network uses a **port**.
* Port `5000` is commonly used by developers, but **macOS also uses some ports internally** (like what you saw: `ControlCe` using 5000).

---

#### 🚫 2. **"Address already in use" = That port is taken**

* Your Node.js server tried to "listen" on `5000`, but another app (macOS system service in this case) was already using it.
* You can only have **one process per port** at a time.

---

#### 🔁 3. **You changed the port to avoid the clash**

* By switching to `5001`, you gave your server a new “channel” that wasn’t in use — so now it runs freely.

---

### ✅ How to Pick a Port Safely

You can use any port number between:

* **1024 and 65535**

Just avoid:

* Common ones like 3000 (used by React apps), 5000 (often taken), 8080 (used by proxies/web servers)

---

Let me know when you want to:

* Add a **"Join Event"** feature (update attendee count)
* Move your backend to **MongoDB**
* Deploy frontend on AWS












Here’s a detailed **debug history** of your issue with connecting MongoDB to your Outly project, and how you overcame it. You can paste this into your `README.md` under a section like `## Debugging History` or `## Lessons Learned`.

---

## 🐞 Debugging History

### ❌ Initial Problem

* The frontend (`outly-events.html`) displayed event cards briefly but would disappear when the backend server (`server.js`) was running.
* The `/api/events` route in Postman and browser returned an empty array `[]` or failed to connect.
* `node server.js` would run without crashing, but no events were shown in frontend or Postman.

---

### 🧩 Troubleshooting Steps & Observations

1. **Basic Setup Worked Without Backend**

   * When the backend wasn’t running, the frontend was showing 3 hardcoded events (from `events.json`).
   * This confirmed the frontend wasn’t broken — the backend integration was the issue.

2. **MongoDB Connection Issues**

   * Despite setting up the connection string in `.env`, no data was retrieved.
   * Multiple clusters were created in MongoDB Atlas, leading to confusion about which one was actually connected.

3. **Mongoose Was Not Installed**

   * Error: `Cannot find module 'mongoose'`
   * ✅ Fix: Ran `npm install mongoose` to resolve the missing dependency.

4. **Incorrect or Obscured MongoDB URI**

   * URI used:

     ```
     mongodb+srv://olihiidikwu:Continental101@@@...
     ```
   * Triple `@` symbols were misinterpreted in the URI string, which broke parsing.
   * ✅ Fix: Changed password to remove special characters or re-encoded them safely.

5. **Connected to Wrong Database**

   * The database (`outlyDB`) was correctly named, but an *empty* database was being queried.
   * Postman was showing `[]` because the correct `collection` (events) didn’t exist or was in another cluster.
   * Atlas showed multiple databases (with and without events), but the active cluster was reading from the wrong one.

6. **Collection in MongoDB Was Empty**

   * A database existed, but it had no populated `events` collection.
   * ✅ Fix: Inserted sample events either manually or through a script.

7. **Accidental Dependency on `events.json`**

   * Initially, events were loaded statically from `events.json`. Once backend was introduced, `main.js` was modified to fetch events via `/api/events`.
   * ✅ Fix: Removed unused `events.json` and relied only on live MongoDB backend.

---

### ✅ Resolution

* **Fixed connection string** by:

  * Ensuring only one `@` symbol was in the encoded password.
  * Confirming the active cluster in MongoDB Atlas was used.
* **Inserted event documents** into MongoDB collection (`events`).
* **Backend route `/api/events`** now returns correct JSON.
* **Frontend** successfully fetches and displays events.

---

### 🧠 Lessons Learned

* Avoid special characters in MongoDB passwords, or URL-encode them (`@` becomes `%40`).
* Always confirm which cluster/database/collection you are connected to in MongoDB Atlas.
* Use `console.log` in `server.js` to debug `mongoose.connect()` and route outputs.
* Double-check `CORS`, port configurations, and that MongoDB collections have actual data.
* Use Postman early to test endpoints before hooking them to the frontend.

---

Would you like this as a markdown `.md` file download too?





















Perfect — since the site is now live and functional, here's a clear, step-by-step documentation you can use for your presentation and README:

---

### 🛠️ Outly CDP: AWS Frontend Hosting Documentation

#### ✅ Objective

Host the frontend of the *Outly* event discovery platform on AWS S3 with public access, accessible via a static website endpoint.

#### 🌐 Live Website

[http://outlyfrontend.s3-website-ap-southeast-2.amazonaws.com](http://outlyfrontend.s3-website-ap-southeast-2.amazonaws.com)

---

### 📁 Files Used

* `index.html`
* `main.js`
* `style.css`
* `event images` (Canva-designed or project images)

---

### 📦 Step-by-Step Hosting on AWS S3

#### 1. **Create S3 Bucket**

* Navigate to S3 in AWS Console.
* Click **Create bucket**.
* Bucket name: `outlyfrontend` (must be unique globally).
* Region: `Asia Pacific (Sydney) ap-southeast-2`.
* Uncheck “Block all public access”.
* Acknowledge the warning and create the bucket.

#### 2. **Upload Files**

* Open the `outlyfrontend` bucket.
* Upload your frontend files (`index.html`, `main.js`, `style.css`, images).
* When uploading, under **Permissions**, check:

  * ✅ Grant public read access to these objects (enable ACLs if needed).

#### 3. **Set Bucket Policy**

* Go to the **Permissions** tab → **Bucket Policy**.
* Paste the following (replace `your-bucket-name` with `outlyfrontend`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForWebsite",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::outlyfrontend/*"
    }
  ]
}
```

Click **Save**.

#### 4. **Enable Static Website Hosting**

* Go to the **Properties** tab.
* Scroll to **Static website hosting**.
* Click **Edit**, then:

  * ✅ Enable
  * Index document: `index.html`
* Click **Save**.
* Copy the **Bucket website endpoint** — this is your public link.

---

### 🔐 Note on Browser Warning

The site uses HTTP instead of HTTPS (not secure):

* AWS S3 static hosting endpoints **do not** support HTTPS by default.
* You can later use AWS **CloudFront** + **SSL Certificate** via ACM for a secure HTTPS setup.

---

### 🧠 Key Debugging Lessons

* Public access must be explicitly allowed via both **ACLs** and **Bucket Policy**.
* If you see access denied or empty pages:

  * Double-check file names, extensions, and case sensitivity.
  * Ensure permissions are correctly configured.
  * Make sure `index.html` exists and is correctly uploaded.



Let me know when you're ready to prep the backend (Express.js on AWS Lambda), or your slides — we can streamline that next.


