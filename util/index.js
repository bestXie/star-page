/**
 * Created by bestXie on 2017/7/11.
 */


/**
 * 存储 sessionStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
};

/**
 * 获取 sessionStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
};

/**
 * 删除 sessionStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
};
