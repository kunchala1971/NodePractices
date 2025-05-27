const {data}=require("./index.js")
console.log("Module: ",module);//module is a global object
console.log("-----");
console.log("Directory Name: ",__dirname);
console.log("-----");
console.log("File Name:",__filename);
console.log("-----");
console.log("Module Path: ",module.path);
console.log("Module Exports: ",module.exports);
console.log("IsActive:",data.isActive);
console.log("Name:",data.name);
console.log("Desig:",data.desig);