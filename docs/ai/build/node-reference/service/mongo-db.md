---
title: "MongoDB" 
slug: "mongo-db" 
description: "The MongoDB Nodes allow you to execute a range of operations on your MongoDB database, such as find, update, and remove operations."
hidden: false 
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';

# MongoDB

[![Version badge](https://img.shields.io/badge/Updated in-v4.88-blue.svg)](../../../../release-notes/4.88.md)

<figure>
  <img class="image-center" src="../../../../../../static/img/_assets/ai/build/node-reference/services/mongo-db-find.png" width="50%" />
</figure>

## Description

The MongoDB Nodes let you execute a range of operations on your [MongoDB](https://www.mongodb.com/docs/).

## Restrictions

- MongoDB Nodes are compatible with MongoDB 3.6 or later versions.

## Nodes

### Find

| Parameter          | Type          | Description                                                                                                                             |
|--------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| MongoDB Connection | List          | Select MongoDB database connection. To create a new connection, click ![plus](../../../../../static/img/_assets/icons/plus-simple.svg). |
| Collection         | CognigyScript | The name of the MongoDB collection.                                                                                                     |
| Query              | JSON          | The MongoDB query. [MongoDB Documentation: Find](https://docs.mongodb.com/manual/reference/method/db.collection.find/)                  |

<CollapsibleSection title="Result Storage">

    | Parameter                 | Type          | Description                                                                                                                         |
    |---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
    | Where to store the result | List          | <ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
    | Input Key to store Result | CognigyScript | Enter the key where the result should be stored.                                                                                    |
    

</CollapsibleSection>


<CollapsibleSection title="Advanced">

    | Parameter     | Type          | Description                                                                                                                                                            |
    |---------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Projection    | JSON          | Read the MongoDB documentation for more information on Projection. [MongoDB Documentation: Projection](https://docs.mongodb.com/manual/reference/operator/projection/) |
    | Options       | JSON          | Read the MongoDB documentation for configurable options. [MongoDB Documentation](https://docs.mongodb.com/manual)                                                      |
    | Index         | CognigyScript | Refer to the MongoDB documentation on Indexes. [MongoDB Documentation: Indexes](https://docs.mongodb.com/manual/indexes/)                                              |
    | Stop on Error | Toggle        | Lets you configure whether to stop flow execution when an error occurs or not.                                                                                         |
    

</CollapsibleSection>


<CollapsibleSection title="Caching">

    | Parameter                               | Type   | Description                                                     |
    |-----------------------------------------|--------|-----------------------------------------------------------------|
    | Cache Response from MongoDB Operation   | Toggle | Whether to cache the MongoDB responses to optimize performance. |
    | The expiration time of the cache (in s) | Number | The expiration time in seconds of the cache.                    |
    

</CollapsibleSection>


### Find One

| Parameter          | Type          | Description                                                                                                                             |
|--------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| MongoDB Connection | List          | Select MongoDB database connection. To create a new connection, click ![plus](../../../../../static/img/_assets/icons/plus-simple.svg). |
| Collection         | CognigyScript | The name of the MongoDB collection.                                                                                                     |
| Query              | JSON          | The MongoDB query. [MongoDB Documentation: FindOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/)            |

<CollapsibleSection title="Result Storage">

    | Parameter                 | Type          | Description                                                                                                                         |
    |---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
    | Where to store the result | List          | <ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
    | Input Key to store Result | CognigyScript | Enter the key where the result should be stored.                                                                                    |
    

</CollapsibleSection>


<CollapsibleSection title="Advanced">

    | Parameter     | Type   | Description                                                                                                                                                            |
    |---------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Projection    | JSON   | Read the MongoDB documentation for more information on Projection. [MongoDB Documentation: Projection](https://docs.mongodb.com/manual/reference/operator/projection/) |
    | Options       | JSON   | Read the MongoDB documentation for configurable options. [MongoDB Documentation](https://docs.mongodb.com/manual)                                                      |
    | Stop on Error | Toggle | Lets you configure whether to stop flow execution when an error occurs or not.                                                                                         |
    

</CollapsibleSection>


<CollapsibleSection title="Caching">

    | Parameter                               | Type   | Description                                                     |
    |-----------------------------------------|--------|-----------------------------------------------------------------|
    | Cache Response from MongoDB Operation   | Toggle | Whether to cache the MongoDB responses to optimize performance. |
    | The expiration time of the cache (in s) | Number | The expiration time in seconds of the cache.                    |
    

</CollapsibleSection>


### Update One

| Parameter          | Type          | Description                                                                                                                                             |
|--------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| MongoDB Connection | List          | Select MongoDB database connection. To create a new connection, click ![plus](../../../../../static/img/_assets/icons/plus-simple.svg).                 |
| Collection         | CognigyScript | The name of the MongoDB collection.                                                                                                                     |
| Update             | JSON          | The MongoDB update payload in JSON format.[MongoDB Documentation: UpdateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/) |

<CollapsibleSection title="Result Storage">

    | Parameter                 | Type          | Description                                                                                                                         |
    |---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
    | Where to store the result | List          | <ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
    | Input Key to store Result | CognigyScript | Enter the key where the result should be stored.                                                                                    |
    

</CollapsibleSection>


<CollapsibleSection title="Advanced">

    | Parameter     | Type   | Description                                                                                                                                                                     |
    |---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Use Operators | Toggle | If enabled, then you can use operators like $push in the update query. If not, then we will automatically $set everything that you write in the update query into the database. |
    | Options       | JSON   | Read the MongoDB documentation for configurable options. [MongoDB Documentation](https://docs.mongodb.com/manual)                                                               |
    | Stop on Error | Toggle | Lets you configure whether to stop flow execution when an error occurs or not.                                                                                                  |
    

</CollapsibleSection>


### Update Many

 [MongoDB Documentation: UpdateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/)

### Insert

 [MongoDB Documentation:  Insert](https://docs.mongodb.com/manual/reference/method/db.collection.insert/)

### Remove

 [MongoDB Documentation: Remove](https://docs.mongodb.com/manual/reference/method/db.collection.remove/)

### MongoDB Aggregate

 [MongoDB Documentation: Aggregate](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/)
