import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { symbol: string };
  }
) {
  const symbol = params.symbol;
  const testVar = process.env.TEST;

  try {
    // New instance of MongoClient with connection string
    // for Cosmos DB
    const url = process.env.DB_CONNECTION_STRING || "";
    const client = new MongoClient(url);

    // Use connect method to connect to the server
    await client.connect();

    // Database reference with creation if it does not already exist
    const db = client.db(`financialsDB`);
    console.log(`database:\t${db.databaseName}\n`);

    // Collection reference with creation if it does not already exist
    const collection = db.collection("fundamentals");
    console.log(`collection:\t${collection.collectionName}\n`);

    const result = await collection
      .find({ ticker: symbol })
      .sort({ _id: 1 })
      .toArray();

    await client.close();
    return NextResponse.json(result);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { error: `${error.message} - ${testVar}` },
      { status: 500 }
    );
  }
}
