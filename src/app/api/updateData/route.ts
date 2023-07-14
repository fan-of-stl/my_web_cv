import {connect} from "@/dbConfig/dbConfig";
import User from "@/model/userData";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function PUT(request: NextRequest){
  const reqBody = await request.json();
  const { _id, username } = reqBody;
  let user = await User.findById(_id);
  if (user) {
    user.username = username;
  } else {
    user = new User({ _id, username });
  }
  const savedUser = await user.save();
  return NextResponse.json(savedUser, { status: 201 });
};