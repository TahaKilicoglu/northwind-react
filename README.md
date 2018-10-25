# northwind-react
This is a small portfolio program to demonstrate React development.  It takes data from a backend web api.  The data is based on Microsoft's Northwind database.  The database is showing its age, but it is sufficient for my purposes here.  To bring it more up to date, I added 20 years to some of the dates.

The images used for the system are very low resolution, so they look very grainy.

## Downloading the code

To download the code, use `git`.

````
git clone https://github.com/nimrod-computing/northwind-react.git
````

You will then be able to view the code in any suitable editor.

## Running the code

1. Install the dependencies.

````
npm install
````

2. Run the local http server.

````
npm start
````

This will compile the code, start an http server on port 3000, and start a session in the browser.

## Backend

The backend is running is hosted remotely.  It may take a while to spin up when you first use it.

## Functional programming

React encourages the use of functional programming and this is my take on it.  I have tried to avoid putting business logic into the components (beyond simple assumptions such as retrieved an item in a collection using the `id` property).  Ideally, these would be methods attached to the collection itself.

e.g.

````
orders = this.orders.soldBy(empid)
````
or even
````
orders = this.orders.soldBy(empid).soldThisYear()
````

This is not easy to achieve for a JavaScript array.  It could be achieved by mixins but there would need to be done every time an array is filtered or mapped.

I have experimented here with creating files with appropriate functions for each collection.  They will still need to be referenced using the standard ES functions such as filter, map and reduce.

e.g. the above would become
````
orders = this.orders.filter(soldby(id)).filter(soldthisyear())
````

For filtering, the functions called return the actual filtering function.  This is necessary when parameters are passed, e.g. soldBy above, otherwise it is used mainly for consistency.
