/**
 * Created by alan on 2017-3-13.
 */
const errcode = 'errcode';
const successCode = 0;
class httpProvide{
    constructor(baseUrl, httpProvide){
        this.baseUrl = baseUrl;
        this.httpProvide = httpProvide
    }

    /*
     * sprWeb to post method
     * */
    post(url, params){
        params = this.concatParams(params);
        let postPromise = this.httpProvide.http.post(this.baseUrl + url, params);
        return this.getDefferPromise(postPromise);
    }

    /*
     * sprWeb to get method
     * */
    get(url, params){
        params = this.concatParams(params);
        let getPromise = sprWebBase.http.get(this.baseUrl + url, {params: params});
        return this.getDefferPromise(getPromise);
    }

    concatParams(params){
        /*
         * before GET or POST set some Params(may be has token?or we have to pass the values)
         * */
        return params;
    }

    getDefferPromise(promise){
        return promise.then(function(res){
            if(res.data[errcode] == 0){
                return res.data;
            }else{
                return res.data.errmsg;
            }
        }, function(error){
            console.log('error');
        });
    };
};

export default httpProvide