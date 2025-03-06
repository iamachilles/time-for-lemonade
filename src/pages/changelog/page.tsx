import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "./markdown.css";

async function getFileContent(owner: string, repo: string, filename: string) {
  const cacheKey = `changelog-${owner}-${repo}-${filename}`;
  const cachedContent = localStorage.getItem(cacheKey);
  const cacheTimestamp = localStorage.getItem(`${cacheKey}-timestamp`);

  // Cache for 1 hour
  const CACHE_DURATION = 3600000;

  if (
    cachedContent &&
    cacheTimestamp &&
    Date.now() - parseInt(cacheTimestamp) < CACHE_DURATION
  ) {
    return cachedContent;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${filename}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch file content");
  }

  const data = await response.json();
  const content = atob(data.content);

  // Update cache
  localStorage.setItem(cacheKey, content);
  localStorage.setItem(`${cacheKey}-timestamp`, Date.now().toString());

  return content;
}

export const metadata = {
  title: "Changelog | Zest",
  description: "Latest updates and improvements to Zest",
};

export default function ChangelogPage() {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const owner = "citrus-mail";
    const repo = "changelog";
    const filename = "2024-1.md";

    getFileContent(owner, repo, filename)
      .then(setContent)
      .catch((err) => {
        console.error("Error loading changelog:", err);
        setError("Error loading changelog");
      });
  }, []);

  if (error) return <div className="max-w-4xl mx-auto p-6">{error}</div>;
  if (!content) return <div className="max-w-4xl mx-auto p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-[calc(100vh-10rem)]">
      <div
        className="prose prose-slate dark:prose-invert max-w-[800px] mt-16"
        id="markdown-container"
      >
        <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {content}
        </Markdown>
      </div>
    </div>
  );
}
