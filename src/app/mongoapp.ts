import Mongo = require('mongodb');
const mc = Mongo.MongoClient; 

export class recipeConnector {
    private database: Promise<Mongo.Db>;           
    private dbCollections =  {}; 
    constructor(public connectionString: string, public dbName: string) {
    }
    connect(): Promise<Mongo.Db> {
        this.database = this.database || new Promise<Mongo.Db>((resolve: any, reject: any) => {  
            mc.connect(this.connectionString, (err: any, client: any) => { 
                if (!err) {
                    console.log("Database was connected successfully");
                    console.log(client.db(this.dbName));  
                    resolve(client.db(this.dbName));
                } else {
                    reject(err);
                    console.log("Error connecting");
                }
            })
        });
        return this.database;
    }

    getCollection(collectionName: string): Promise<Mongo.Collection> { 
        console.log(this.dbCollections[collectionName]);
        this.dbCollections[collectionName] = this.dbCollections[collectionName] || new Promise<Mongo.Collection>((resolve: any, reject: any) => {
            this.connect().then((db: Mongo.Db) => {
                let collection = db.collection(collectionName);                            
                console.log(collection);
                resolve(collection);
            },
                (reason: any) => { 
                    console.log("Error, cannot get collection, no Database", reason);
                    reject(reason);
                })
        });
        return this.dbCollections[collectionName];
    }


    getRpCollection(): Promise<Mongo.Collection> {
        return this.getCollection("rpCollect"); 
    }

    getRp(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getRpCollection().then((rpCollect) => {
                rpCollect.find({ 'rpName': this.rpName }).next().then((recipe) => {
                    console.log("Recipe Found: ", recipe );
                    if (recipe) {
                        resolve(recipe);
                    } else {
                        reject("No Recipe Found");
                    }
                })
            }, (reason) => { 
                reject(reason);
            })
        });
    }

    init(): Promise<any> {
        return this.getRpCollection().then((rpCollect) => {
            return this.getRp().catch((reason) => {
                console.log("Failed to get Recipe because: ", reason);
            })
        })
    }
}