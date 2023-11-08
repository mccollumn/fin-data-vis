import { NextRequest, NextResponse } from "next/server";
// import { MongoClient } from "mongodb";

export async function GET(request: NextRequest) {
  const symbol = request.nextUrl.searchParams.get("symbol");
  const isPopulated = !!process.env.DB_CONNECTION_STRING;

  // // New instance of MongoClient with connection string
  // // for Cosmos DB
  // const url = process.env.DB_CONNECTION_STRING || "";
  // const client = new MongoClient(url);

  // // Use connect method to connect to the server
  // await client.connect();

  // // Database reference with creation if it does not already exist
  // const db = client.db(`financialsDB`);
  // console.log(`database:\t${db.databaseName}\n`);

  // // Collection reference with creation if it does not already exist
  // const collection = db.collection("fundamentals");
  // console.log(`collection:\t${collection.collectionName}\n`);

  // const result = await collection.find({}).sort({ _id: 1 }).limit(1).toArray();

  // return NextResponse.json({ result, symbol });
  return NextResponse.json({ symbol, isPopulated });
}
