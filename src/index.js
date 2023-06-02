/* primeiro contato com o mongodb
 * */

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://aluno:123@127.0.0.1:27017/?maxPoolSize=20&w=majority";

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
		await client.db( "aluno" ).command( { ping: 1 } );

	}
	catch
	{
		console.log('albarroou');
	}
}
