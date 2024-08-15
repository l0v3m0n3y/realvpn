class realvpn{
    constructor(){
        this.api = "https://apiv2.realvpn.space/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
    }
    async login(email,password){
        let req=await fetch(`${this.api}/auth/login/email`,{method:"POST",headers: this.headers,body:`email=${email}&email_password=${password}&platform=web`});
        let json=await req.json()
        this.headers["Authorization"]=`Bearer ${json['access_token']}`
        return json;
    }
    async register(email,password){
        let req=await fetch(`${this.api}/auth/email`,{method:"POST",headers: this.headers,body:`email=${email}&email_password=${password}&platform=web`});
        return await req.json();
    }
    async servers_list(){
        let req=await fetch(`${this.api}/users/me/regions`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async account_info(){
        let req=await fetch(`${this.api}/users/me`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {realvpn};