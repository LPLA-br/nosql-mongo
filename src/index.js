/*************************************
 * primeiro contato com o mongodb
 * banco de dados não relacional
 ************************************/

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://fodao:123@172.17.0.2:27017";

const client = new MongoClient( uri ,
{
	serverApi:
	{
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

async function run()
{
	try
	{
		await client.connect();

		await client.db("bancodadipesadae").command( { ping: 1 } );
		console.log("ping sucesso");
		await client.db("bancodadipesadae").collection('notas').findOne( { titulo:'' } );
	}
	finally
	{
		await client.close();
	}
}

run().catch( console.dir );
