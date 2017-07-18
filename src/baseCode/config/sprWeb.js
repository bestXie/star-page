/**
 * Created by alan on 2017/3/14.
 */
import sprWebBase from './sprWebBase.js'
class sprWeb{
    constructor(config){
        return sprWebBase.extend(config)
    }

    directive(keyName, config){
        return sprWebBase.directive(keyName, config)
    }

}

window.sprWeb = sprWeb;
export default sprWeb;