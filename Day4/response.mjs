function decrypt(data) {
  return "decrypted data";
}
function read() {
  return decrypt("data");
}
// module.exports = {
//   read: read,
// };
export {read}