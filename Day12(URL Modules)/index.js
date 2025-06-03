var url=require('url');
var urlAddress='http://localhost:4000/products/products.html?id=p001&product_name=IPhone&price=150000'
var queryParams=url.parse(urlAddress,true);
console.log(queryParams.protocol);//it return http protocol
console.log(queryParams.hostname);//return host name
console.log(queryParams.host);//return host name with port
console.log(queryParams.pathname);//return pathname
console.log(queryParams.search);//return query parameters
console.log(queryParams.port);//return port
const {id,product_name,price}=queryParams.query;// it return query object
console.log("id:"+ id+ " Product Name:" + product_name + " Price=" + price);




