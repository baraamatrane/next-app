import { data } from "@/data";

export default async function handler(req, res) {
  // const id = req.query.id;
  console.log(req, "    ", res);
  const post = data.find((d) => d.id == 1);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(400).json({ error: "Post not found" });
  }
}
