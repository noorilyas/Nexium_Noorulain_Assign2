import { JSDOM } from "jsdom";

export async function POST(req) {
  const { url } = await req.json();

  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const textContent = dom.window.document.body.textContent || "";

    return Response.json({ fullText: textContent.trim().slice(0, 1000) });
  } catch (error) {
    return Response.json({ error: "Failed to scrape blog" }, { status: 500 });
  }
}
