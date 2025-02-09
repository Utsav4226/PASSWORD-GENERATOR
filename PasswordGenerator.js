var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+{}:>?<~";
var pwd = "";
for(var i = 0; i < 10; i++){
	pwd += str[Math.floor(Math.random() * str.length)];
}
console.log(pwd);