/**
 * Created by alan on 2017-3-13.
 */
Date.prototype.format = function(format){
    var d, k, o;
    o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (k in o) {
        d = o[k];
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? d : ("00" + d).substr(("" + d).length));
        }
    }
    return format;
};

Date.prototype.addDate = function(addDay){
  return new Date(this.getTime() + 1000 * 60 * 60 * 24 * addDay);
};