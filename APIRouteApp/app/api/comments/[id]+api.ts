import { comments } from "../../../data/comments";

export async function GET(_req: Request, { id }: Record<string, string>) {
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(request: Request, { id }: Record<string, string>) {
  const { name, comment } = await request.json();
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  if (!commentIndex) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
  comments[commentIndex] = { id: parseInt(id), name, comment };
  return Response.json(comments[commentIndex]);
}

export async function DELETE(_req: Request, { id }: Record<string, string>) {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  if (!commentIndex) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
  comments.splice(commentIndex, 1);
  return Response.json({ message: "Comment deleted" });
}
