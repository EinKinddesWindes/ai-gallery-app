
const markdownFiles = import.meta.glob(
  "../../content/{projekte,forschung,aktuelles}/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

function parseFrontmatter(markdown) {
  const match = markdown.match(
    /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/
  );

  if (!match) {
    return { metadata: {}, body: markdown };
  }

  const metadata = {};

  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(":");

    if (separator === -1) return;

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();

    metadata[key] = value.replace(/^["']|["']$/g, "");
  });

  return {
    metadata,
    body: markdown.slice(match[0].length).trim(),
  };
}

export const cmsPosts = Object.entries(markdownFiles)
  .map(([path, markdown]) => {
    const { metadata, body } = parseFrontmatter(markdown);

    const filename = path.split("/").pop();
    const category = path.split("/").at(-2);

    const dateMatch = filename.match(
      /^(\d{4}-\d{2}-\d{2})-/
    );

    return {
      id: filename.replace(/\.md$/, ""),
      category,
      title: metadata.title || "Ohne Titel",
      description: metadata.description || "",
      image: metadata.image || "",
      body,
      date: dateMatch ? dateMatch[1] : "",
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
