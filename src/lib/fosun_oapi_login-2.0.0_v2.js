

var fosun_oapi_login = {
	sysid:"fosun_oapi.oauth2.1002_1",
	dd_sysid:"fosun_oapi.oauth2.1002_0",
    cas_storage:"CAS_login_storage",
	debug:"false",
	aclCheck:"true",

//	DEFAULT_DD_NO_LOGIN_URL:"https://oapiuat.fosun.com:8445/api/oauth2/authorize",/*1002_0*/
	DEFAULT_DD_NO_LOGIN_URL:"https://oapi.fosun.com/api/oauth2/authorize",/*1002_0*/
	
	CAS_LOGIN_URL:"http://moapp.fosun.com/m/login/",/*1002_1*/
//	CAS_LOGIN_URL:"https://oapi.fosun.com/m/CASLogin.html",/*1002_1*/
//	CAS_LOGIN_URL:"http://apptest.fosun.com/m/login/",

    CAS_CHECK_URL:"https://oapi.fosun.com/api/oauth2/loginCAS",
//  CAS_CHECK_URL:"https://oapiuat.fosun.com:8445/api/oauth2/loginCAS",

    CUR_URL:window.location.href,



	_setConfig:function(config){
        var that = this;
		if(config){
			if(config.debug){
                that.debug = config.debug;
			}
			if(config.aclCheck){
                that.aclCheck = config.aclCheck;
			}
		}

	},
	_debugAlert:function(str){
           var that = this;
           if(that.debug=="true")
               alert(str);
       },
    getDDAccount:function(callback,config){/*1002_0*/
		//   liuhh@fosun.com   将alert去掉
    	/*if(config)
             alert("getDDAccount begin=======");*/
        var that = this;
        dd.ready(function(){
			
		/*if(config)
             alert("getDDAccount ready=======");*/
			
       that.GetRequest();
        that._setConfig(config);
		

		
        dd.util.localStorage.getItem({
            name:that.dd_sysid,
            onSuccess:function(data) {
            	/*if(config)
                alert("getDDAccount is called----->"+"key="+that.dd_sysid+"--->data="+JSON.stringify(data));*/
//                alert("==========="+JSON.stringify(data));

//                alert("===========" + data.value);

                var json = null;
                if(data.value) {
                     json = JSON.parse(data.value);
                }



                json = (new Function("return " + json))();
//                alert("json===========" + json);
//                alert("jobCode===========" + json.email);
                
                /*if(config)
                	alert("=======getDDAccount is called======="+JSON.stringify(json));*/
                
                that._callback_1002_0(callback,json);


//                callback(JSON.parse(data.value));

            },
            onFail:function(){
//                alert("获取用户信息失败，请联系管理员!");
//                alert("Error");
            }
        });
        });
	},
	getAccount:function(callback,redirectUrl,config){/*1002_1*/

		var that = this;
        var reUrl = that.CUR_URL;
        if(redirectUrl) {
//            alert(redirectUrl);
//            alert(333333);
            reUrl = redirectUrl;
        }
//        alert("getAccount has been called!!");
        dd.ready(function(){
//            alert("g1111111etAccount has been called!!");
        that.GetRequest();
        dd.util.localStorage.getItem({
            name:that.cas_storage,
            onSuccess:function(data) {

                that._debugAlert("44444444========"+JSON.stringify(data));
                that._debugAlert("88888============="+JSON.stringify(data.value));
//                alert("88888============="+JSON.parse(data.value).loginCode);

                if(!data.value) {
                    that._debugAlert("no login message!!!");
//                    alert("no login message!!!");
//                     location = "/oauth2/CASLogin.html?curl="+window.location.href;
//                    alert("redirt=============="+that.CAS_LOGIN_URL + "?curl=" + window.location.href);
					//进行url编码，用于处理http://www.fosun.com/#!/home/adv1情况
					
					reUrl = encodeURIComponent("curl="+reUrl);
                    location = that.CAS_LOGIN_URL + "?" + reUrl;
                    //location = that.CAS_LOGIN_URL + "?curl=" + reUrl;
                     return;
                }
                else {
                    if ("off" == JSON.parse(data.value).isRemberPwd) {
                        if ("true" == JSON.parse(data.value).rFlag) {
                            var loginStorage = {
                                loginCode: null,
                                loginPwd: null,
                                isRemberPwd: "off",
                                rFlag: "false"
                            }

                            dd.util.localStorage.setItem({
                                name: "CAS_login_storage",
                                value: JSON.stringify(loginStorage),
                                onSuccess: function (res) {
                                },
                                onFail: function () {
                                }
                            });

                        } else {
                            location = that.CAS_LOGIN_URL + "?curl=" + reUrl;
                            return;
                        }
                    }
                        that._debugAlert("YES!!!!");

                        dd.util.localStorage.getItem({
                            name: "fosun_oapi.oauth2.1002_1",
                            onSuccess: function (data) {

                                that._debugAlert("9999999999999999=============" + JSON.stringify(data));
//                            alert("9999999999999999=============" + JSON.stringify(data));

                                var json = null;
                                if (data.value) {
                                    json = JSON.parse(data.value);
                                }
                                json = (new Function("return " + json))();

                                that._callback_1002_1(callback, json, reUrl);

                            },
                            onFail: function () {
                            }
                        });

                }

            },
            onFail:function(){
//                alert("获取用户信息失败，请联系管理员!");
                alert("Error");
            }
        });
        });
	},
	
	_callback_1002_0:function(callback,json){
		var that = this;
		if(json==null){
			if(that.aclCheck=="true"){
 				var cuUrl = that._urlEncode(window.location.href);
				window.location = that.DEFAULT_DD_NO_LOGIN_URL+"?returnUrl="+cuUrl;
				return;
			}
		}
		callback(json);
	},	
	_callback_1002_1:function(callback,json,reUrl){

		var that = this;
		if(json==null){
			if(that.aclCheck=="true"){
				window.location = that.CAS_LOGIN_URL + "?curl=" + reUrl;
				return;
			}
		}

		callback(json);
	},

	_urlEncode: function(str) {
		var that = this;
		var ret = "";
		var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
		var tt = "";

		for (var i = 0; i < str.length; i++) {
			var chr = str.charAt(i);
			var c = that._str2asc(chr);
			tt += chr + ":" + c + "n";
			if (parseInt("0x" + c) > 0x7f) {
				ret += "%" + c.slice(0, 2) + "%" + c.slice( - 2);
			} else {
				if (chr == " ") ret += "+";
				else if (strSpecial.indexOf(chr) != -1) ret += "%" + c.toString(16);
				else ret += chr;
			}
		}
		return ret;
	},
	_urlDecode: function(str) {
		var that = this;
		var ret = "";
		for (var i = 0; i < str.length; i++) {
			var chr = str.charAt(i);
			if (chr == "+") {
				ret += " ";
			} else if (chr == "%") {
				var asc = str.substring(i + 1, i + 3);
				if (parseInt("0x" + asc) > 0x7f) {
					ret += that._asc2str(parseInt("0x" + asc + str.substring(i + 4, i + 6)));
					i += 5;
				} else {
					ret += that._asc2str(parseInt("0x" + asc));
					i += 2;
				}
			} else {
				ret += chr;
			}
		}
		return ret;

	},
	_str2asc:function (str){
		return str.charCodeAt(0).toString(16);

	},
	_asc2str:function (str){
		return String.fromCharCode(str);

	},


    setcookie:function(name,value){
        document.cookie = name + "="+ escape (value);

    },


    GetRequest:function(){
    	var that = this;
        var url = location.search;

        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            urlCount = strs.length;
            for(var i = 0; i < strs.length; i ++) {
                if(strs[i].split("=")[0]=="mt") {
                        that.setcookie(strs[i].split("=")[0],strs[i].split("=")[1]);

                }
            }
        }

    },




    accountLogOut:function(redirectUrl) {
        var that = this;
        var reUrl = that.CUR_URL;
        if(redirectUrl) {
            reUrl = redirectUrl;
        }
        dd.ready(function(){
            dd.util.localStorage.removeItem({
                name:that.sysid,
                onSuccess:function(res){
                    dd.util.localStorage.removeItem({
                        name:"CAS_login_storage",
                        onSuccess:function(data){
                        },
                        onFail:function(){
                        }
                    });

                    dd.util.localStorage.removeItem({
                        name:"1002",
                        onSuccess:function(data){
                        },
                        onFail:function(){
                        }
                    });

                    dd.util.localStorage.removeItem({
                        name:"1002_1",
                        onSuccess:function(data){
                        },
                        onFail:function(){
                        }
                    });


                    if(redirectUrl) {
                        window.location = redirectUrl;

                    }else {
                        window.location =  that.CAS_LOGIN_URL;
                    }

                },
                onFail:function(){
                }
            });
        });
    },



    ifRememberPass:function(callback) {
        var that = this;
        var flag;
        dd.ready(function(){
            dd.util.localStorage.getItem({
                name:"CAS_login_storage",
                onSuccess:function(data) {
                    if(!data.value) {
                        flag = 0;
                    }
                    else {
                        if ("off" == JSON.parse(data.value).isRemberPwd) {
                            flag = 0;
                        }else {
                            flag = 1;
                        }
                    }
                    callback(flag);
                },
                onFail:function(){
                }
            });
        });
    },

    ifAccountUserExist:function(callback) {
        var that = this;
        var flag;
        dd.ready(function(){
            dd.util.localStorage.getItem({
                name:that.sysid,
                onSuccess:function(res) {
//                    alert("=====res========" + JSON.stringify(res));
                    if (typeof callback === 'function') {

                    if (res.value) {
                        flag =  1;
                    } else {
                        flag  = 0;
                    }
                        callback(flag);
                }
                },
                onFail:function(){
                }
            });
        });
    }

}

