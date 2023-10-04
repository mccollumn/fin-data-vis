"use server";

import { MongoClient } from "mongodb";

const getData = async () => {
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

  const result = await collection.find({}).sort({ _id: 1 }).limit(1).toArray();
  return result;
};

export default getData;
