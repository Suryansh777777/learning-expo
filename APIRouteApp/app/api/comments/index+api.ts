import { comments } from "../../../data/comments";

export async function GET() {
  return Response.json(comments);
}

export async function POST(req: Request) {
  const { name, comment } = await req.json();
  comments.push({ id: comments.length + 1, name, comment });
  return Response.json(comments, { status: 201 });
}
