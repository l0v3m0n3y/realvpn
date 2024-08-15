# realvpn
JavaScript library for realvpn.space
# main
```js
async function main(){
    const {realvpn} = require('./realvpn');
    const vpn= new realvpn();
    await vpn.login("email","password")
    let req=await vpn.servers_list()
    console.log(req)
}
main()
```
