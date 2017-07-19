/**
 * Created by bestXie on 2017/7/19.
 */

const sortableMixin = {
    methods: {
        moveDownSortable(data, index, callback){
            data = data || [];
            if (data.length === 0 || index === data.length - 1) {
                alert("已经是最后一项啦！");
                return false;
            }
            for (let item of data) {
                item.defaultOpenRight = false;
            }
            let itemData = data[index];
            itemData.defaultOpenRight = true;
            data.splice(index + 2, 0, itemData);
            data.splice(index, 1);
            callback && callback();
        },
        moveUpSortable(data, index, callback){
            data = data || [];
            if (data.length === 0 || index === 0) {
                alert("到顶啦！");
                return false
            }
            for (let item of data) {
                item.defaultOpenRight = false;
            }
            let itemData = data[index];
            itemData.defaultOpenRight = true;
            data.splice(index - 1, 0, itemData);
            data.splice(index + 1, 1);
            callback && callback();
        },
        moveTopSortable(data, index, callback){
            data = data || [];
            if (data.length === 0 || index === 0) {
                alert("到顶啦！");
                return false
            }
            for (let item of data) {
                item.defaultOpenRight = false;
            }
            let itemData = data[index];
            itemData.defaultOpenRight = true;
            data.splice(0, 0, itemData);
            data.splice(index + 1, 1);
            callback && callback();
        },
    }
};

export {
    sortableMixin
}
