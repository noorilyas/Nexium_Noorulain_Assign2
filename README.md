Your `README.md` is already **very strong** and shows real effort. Just a few small improvements in **formatting**, **consistency**, and **clarity** will make it **professional and submission-ready**.

Here is the **final polished version**:

---

# 📄 Blog Summariser – Nexium Internship Assignment 2

A full-stack web app that lets users enter a blog URL, scrapes the blog content, simulates an English summary, translates it into Urdu using a dictionary-based approach, and stores the data in **MongoDB** and **Supabase** via an **n8n** workflow.

---

## 🌐 Live Deployment

🔗 [View Live App on Vercel](https://nexium-noorulain-assign2.vercel.app/internship/assignment-2)

---

## 🚀 n8n Workflow (Live & Connected)

The app sends a `POST` request to the following live webhook:

```
https://nexium-noor.app.n8n.cloud/webhook/summarize-blog
```

This webhook:

* Receives the blog URL, English & Urdu summaries, and full text
* Saves the **summary + metadata** to **Supabase**
* Saves the **full blog text** to **MongoDB Atlas**

### 📨 Example Payload Sent:

```json
{
  "url": "https://example.com",
  "summary": "This blog discusses key insights about productivity...",
  "urduSummary": "یہ بلاگ پیداواری صلاحیت کے اہم نکات پر روشنی ڈالتا ہے...",
  "fullText": "Full blog content..."
}
```

---

## 💻 Features

* ✨ Built with **Next.js** and **ShadCN UI**
* 🎞️ Smooth animations using **Framer Motion**
* 🔍 Scrapes blog content from the provided URL (via `/api/scrape`)
* 💡 Simulates English summary using static logic
* 🌐 Translates English summary to Urdu using a custom JS dictionary
* 📦 Stores full blog content in **MongoDB**
* 🧾 Stores URL, summaries, and timestamp in **Supabase**
* ⚙️ Integrated with **n8n webhook**
* ☁️ **Deployed on Vercel**

---

## 🧰 Tech Stack

* **Next.js** – React framework with server components
* **Tailwind CSS + ShadCN UI** – Modern UI components
* **Framer Motion** – UI animation
* **Supabase** – Stores summaries and metadata
* **MongoDB Atlas** – Stores full blog content
* **n8n Cloud** – Handles webhook automation
* **Vercel** – Hosting and deployment

---

## 📁 Project Structure

nexium-assignment-2/
├── .next/ # Next.js build files
├── node_modules/ # Node.js dependencies
├── public/ # Static assets
├── src/
│ └── app/
│ ├── api/
│ │ └── scrape/
│ │ └── route.js # API route for blog scraping
│ ├── internship/
│ │ └── assignment-2/
│ │ ├── components/
│ │ │ ├── BlogForm.jsx # Component for blog URL input
│ │ │ └── SummaryDisplay.jsx # Component to show Urdu summary
│ │ └── data/
│ │ └── urduDict.js # Urdu dictionary/helper
│ └── page.js # Main UI page



## 🧪 Test URL

Use this blog for testing:

🔗 `https://blog.hubspot.com/marketing/marketing-skills`

---

## 🔐 Environment Variables (on Vercel)

```
SUPABASE_URL=your_supabase_url  
SUPABASE_SERVICE_ROLE_KEY=your_supabase_key  
MONGODB_URI=your_mongodb_connection_string  
```

> These are securely configured on Vercel and excluded from version control using `.gitignore`.

---

## 🧠 Author

**Noorulain Ilyas**
AI-First Web Development Intern
🔗 [GitHub Profile](https://github.com/noorilyas)

---

