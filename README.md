# Angular Generic API Service
A generic AngularJS service for calling any API with unlimited parameters passed in.

# Usage
Once you've included both services in your AngularJS application you're ready to start using the generic service.

The service contains a number of different methods:

GET (array) - GetListData
GET - GetData
PUT - UpdateData
POST - AddData
DELETE - DeleteData

So, what's special about this? Well, what happens is you can call any endpoint passing in as many parameters as you like. This works a lot like the "string.Format" function in C# where it will replace symbols such as "{0}" with whatever you pass in. The commonService contains a method called "stringFormat" which replicates this functionality. 

Let's see how we do this in practice. If you wanted to call an API endpoint called "fooBars" passing in an "ID" of 1 to return a single "fooBar", we would do it like so:

return genericService.getData('fooBars/{0}', [1]);

This will call the API with the URL:

"http://localhost/API/fooBars/1"

The second parameter is an array, this way you can pass in as many parameters as you like into the string, let's say we have a number of "foos" and "bars" we might do something like this:

return genericService.getData('foos/{0}/bars/{1}', [1, 2]);

This will call the API with the URL:

"http://localhost/API/foos/1/bars/2"

And so forth. It's a pretty simple service but I use it in all AngularJS projects because it's so easy to implement and means you don't have to write a tonne of different queries in your Angular services.

Enjoy :)

