import {connect} from "@/dbConfig/dbConfig";
import User from "@/model/userData";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function GET(request: NextRequest, { params }: any){
  console.log(params);
  const { id } = params;
  const user = await User.findOne({_id :id});
  return NextResponse.json(user, {status: 201})
};

