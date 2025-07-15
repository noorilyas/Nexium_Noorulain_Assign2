
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SummaryDisplay from "./SummaryDisplay";
import urduDict from "../data/urduDict";

export default function BlogForm() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [urduSummary, setUrduSummary] = useState("");

const simulateSummary = (text) =>
  `This blog discusses key insights about productivity, including time management, deep work, and  importance of breaks.`;


  // 🆕 smarter word-by-word translator
 const translateToUrdu = (text) =>
   text
     // strip commas / periods so “breaks.” ⇒ “breaks”
     .replace(/[.,]/g, "")
     .split(" ")
     .map((w) => urduDict[w.toLowerCase()] || w)
     .join(" ");

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!url.trim()) return toast.error("Please enter a blog URL");

  const en = simulateSummary(url);
  const ur = translateToUrdu(en);
  setSummary(en);
  setUrduSummary(ur);

  toast.success("Summary generated!");

  //  Get fullText from route.js
  const fullTextRes = await fetch("/api/scrape", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  const { fullText } = await fullTextRes.json();

  // 🔗 Send to n8n webhook
  fetch("https://nexium-noor.app.n8n.cloud/webhook/summarize-blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url,
      summary: en,
      urduSummary: ur,
      fullText: fullText || "", // fallback in case scraping fails
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("✅ n8n webhook response:", data))
    .catch((err) => console.error("❌ n8n webhook error:", err));

    
};



  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-neutral-100 px-4 py-8"
    >
      <Card
        className="w-full max-w-3xl bg-white shadow-xl lg:shadow-2xl rounded-3xl border border-neutral-200"
      >
        <CardContent className="p-6 sm:p-10 space-y-8 sm:space-y-12">

          {/* Logo Section */}
          <div className="flex justify-center">
            <img
              src="/images/blog-logo.png"
              alt="Blog Summarizer Logo"
              className="w-120 h-auto"
            />
          </div>

        

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row items-center justify-center"
          >
            <Input
              type="url"
              placeholder="https://example.com/blog-post"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 min-w-[280px] border-neutral-300 focus:ring-2 focus:ring-black shadow-sm rounded-xl h-12"
            />
            <Button
              type="submit"
              className="px-8 py-3 h-12 bg-black text-white hover:bg-neutral-800 transition rounded-xl font-semibold shadow-md"
            >
              Summarise
            </Button>
          </motion.form>

          {/* Summary Display */}
          {(summary || urduSummary) && (
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <SummaryDisplay english={summary} urdu={urduSummary} />
            </motion.section>
          )}
        </CardContent>
      </Card>
    </motion.main>
  );
}