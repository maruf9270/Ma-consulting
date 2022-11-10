import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className='min-h-[500px] lg:w-[90vw] w-[98vw] mx-auto'>

        <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium border border-base-300 bg-base-100 rounded-box">
        Difference between SQL and NoSQL
        </div>
        <div className="collapse-content"> 
            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

            <p>There are five practical differences between SQL and NoSQL:</p>

Language <br></br>
Scalability <br></br>
Structure <br></br>
Properties <br></br>
Support and communities <br></br><br></br>
1. Language <br></br>
SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used. <br></br><br></br>

The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute. <br></br><br></br>

Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.<br></br><br></br>

2. Scalability<br></br>
Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:<br></br><br></br>

SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.<br></br>
3. Structure<br></br>
SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.<br></br><br></br>

NoSQL databases need not stick to this format, but generally fit into one of four broad categories:<br></br>

Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.<br></br>
Key-Value stores are dictionaries which access diverse objects with a key unique to each.<br></br>
Document stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely <br></br>different from each other.
Graph databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.<br></br>
4. Properties<br></br>
At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:<br></br><br></br>

Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.
Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.
Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.
Durability makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.
NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:<br></br><br></br>

Consistency: Every request receives the most recent result, or an error. (Note this is different than in ACID)
Availability: Every request has a non-error result, regardless of how recent that result is.
Partition tolerance: Any delays or losses between nodes will not interrupt the system’s operation.
5. Support and communities <br></br><br></br>
SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.<br></br>

NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.<br></br>

SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.</p>
        </div>
        </div>

        <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium border border-base-300 bg-base-100 rounded-box">
        What is JWT, and how does it work?
        </div>
        <div className="collapse-content"> 
            <p><h3 className='text-2xl'>What is JWT
            </h3>JWTT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            <p>
                <h3 className='text-2xl'>How Doed JWT Work?</h3>
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

Once decoded, you will get two JSON strings:

The header and the payload.
The signature. 
The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  

The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. 

The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
            </p>
        </div>
        </div>

        <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium border border-base-300 bg-base-100 rounded-box">
        What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content"> 
        <p>
            <h3 className='text-3xl'> JAVASCRIPT</h3>
            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
        
        </p>
            <p><h3 className='text-3xl'>NODE.JS</h3>
           NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
        </div>
        </div>

        <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium border border-base-300 bg-base-100 rounded-box">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content"> 
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
        </div>
        </div>

        



        <Helmet>
            <title>Ma Consulting- Blog</title>
        </Helmet>
        </div>
    );
};

export default Blog;