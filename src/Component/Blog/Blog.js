import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div class="card mt-5 bg-info">
        <div class="card-body text-white">
          <h3>Difference between javascript and nodejs?</h3>
        </div>
        <div class="card-body text-white">
          <p>
            Javascript is a pure programming language.It basically used for
            client-side,capable to add Html and play with Document Object
            Model.Javascript only run into Browser.On the other hand,Node js is
            a runtime environment of javascript and can run outside the
            browser.Most Developers are use it for backend.
          </p>
        </div>
      </div>

      <div class="card mt-3 bg-primary">
        <div class="card-body text-white">
          <h3>Differences between sql and nosql Databases?</h3>
        </div>
        <div class="card-body text-white">
          <p>
            Sql is relational Database which use Structed Programming
            Language.SQL database are table-based.On the other hand,nosql is
            non-relational and work with kay-value pair based.NoSQL is better
            for unstructured data like documents or JSON
          </p>
        </div>
      </div>

      <div class="card mt-3 bg-info">
        <div class="card-body text-white">
          <h3>What is the purpose of jwt and how does it work?</h3>
        </div>
        <div class="card-body text-white">
          <p>
            The purpose of the jwt is to Authorization.It shared security
            information between Client and Server. When a user login,the server
            create a token and send it to client.In client side developer stored
            it in localstorage or other storage.Then client send a request with
            the token and server verifies the jwt signature.If the signature
            matched then server give the Authorization.If it not matched then it
            doesn't give Authorization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
