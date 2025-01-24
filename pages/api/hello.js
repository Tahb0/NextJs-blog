export default function handler(req, res) {
  res.status(200).json({ text: "Hello World!" });
}

export async function fetchPosts() {
  const res = await fetch("Api example.com");
  const data = res.json();

  return data;
}
