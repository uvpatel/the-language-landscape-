import React from "react";
import BlogEditor from "@/components/admin/BlogEditor";


export const metadata = {
  title: "Compose New Article | TLL Editorial CMS",
};

export default function CreateBlogPage() {
  return (
    <BlogEditor
      initialData={{
        title: "",
        slug: "",
        excerpt: "",
        content: `## Exploring the Landscape

Write your editorial article here using Markdown. Use headings, blockquotes, bullet points and inline images to craft an engaging, educational piece for readers.

> "To speak a language is to take on a world, a culture."

### Core Linguistic Insights

1. **Practical Vocabulary:** Practical daily communication.
2. **Cultural Immersion:** Discovering idioms and context.
`,
        category: "Culture & Expression",
        tags: ["Language", "Culture"],
        author: {
          name: "The Language Landscapes",
          image: "/banasarithakkar.png",
        },
        status: "draft",
      }}
      isEditMode={false}
    />
  );
}
