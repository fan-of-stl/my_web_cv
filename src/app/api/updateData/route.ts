import {connect} from "@/dbConfig/dbConfig";
import User from "@/model/userData";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function PUT(request: NextRequest){
  const reqBody = await request.json();
  const { _id, username, designation, technical_skills } = reqBody;
  let user = await User.findById(_id);
  if (user) {
    user.username = username;
    user.designation = designation;
    user.technical_skills = technical_skills;
  } else {
    user = new User({ _id, username, designation, technical_skills });
  }
  const savedUser = await user.save();
  return NextResponse.json(savedUser, { status: 201 });
};