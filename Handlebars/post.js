async function postData() {
  fetch('api/productos', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
    body: 'foo=bar&blah=1'
});
}
