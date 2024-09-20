import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Task from '../../../lib/models/Task';

// Handle GET and POST requests
export async function GET() {
  await dbConnect();
  const tasks = await Task.find({});
  return NextResponse.json({ success: true, data: tasks });
}

export async function POST(req) {
  const { title, desc } = await req.json();
  await dbConnect();
  const task = new Task({ title, desc });
  await task.save();
  return NextResponse.json({ success: true, data: task });
}

export async function DELETE(req) {
  const { id } = await req.json();
  await dbConnect();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ success: true, message: 'Task deleted' });
}
