"use strict";
//reference: http://mongodb.github.io/node-mongodb-native/
//reference: https://docs.mongodb.com/manual/reference/method/js-collection/
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
const bbt_1 = require("./bbt");
const mc = Mongo.MongoClient; //Short name of mongo client

export class recipeConnector {
    constructor(connectionString, dbName) {
        this.connectionString = connectionString;
        this.dbName = dbName;
        this.dbCollection = {};
    }
    connect() {
        this.database = this.database || new Promise((resolve, reject) => {
            mc.connect(this.connectionString, (err, client) => {
                if (!err) {
                    console.log("Database Connected.");
                    console.log(client.db(this.dbName));
                    resolve(client.db(this.dbName));
                }
                else {
                    reject(err);
                    console.log("Error connecting");
                }
            });
        });
    }
    getCollection(collectionName) {
        console.log(this.dbCollection[collectionName]);
        this.dbCollection[collectionName] = this.dbCollection[collectionName] || new Promise((resolve, reject) => {
            this.connect().then((db) => {
                let collection = db.collection(collectName);
                console.log(collection);
                resolve(collection);
            }, (reason) => {
                console.log("Error getting collection, no Database", reason);
                reject(reason);
            });
        });
    }
        
    getRpCollection() {
    return this.getCollection("rpCollect"); 
    }

    getRp() {
        return new Promise((resolve, reject) => {
            this.getRpCollection().then((rpCollect) => {
                rpCollect.find({ 'rpName': this.recipe }).next().then((recipe) => {
                    console.log("Recipe Found: ", recipe);
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

    init() {
        return this.getRpCollection().then((rpCollect) => {
            return this.getRp().catch((reason) => {
                console.log("Reason for Failure: ", reason);
            });
        });
    }
}
exports.mongoapp = mongoapp;