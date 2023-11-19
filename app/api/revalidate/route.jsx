import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path);
    // console.log(path);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
