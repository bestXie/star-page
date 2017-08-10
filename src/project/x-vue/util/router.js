import {getStore, setStore} from './index';

export function go(url, $router, params) {
    if (/^javas/.test(url) || !url) return;
    const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url))
    if (useRouter) {
        if (url === 'BACK') {
            $router.go(-1);
        } else if (url === 'INPUT') {
            $router.push('editglobal_input');
        } else {
            $router.push(url)
        }
    } else {
        window.location.href = url
    }
}

export function getUrl(url, $router) {
    // Make sure the href is right in hash mode
    if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
        return `#!${url}`
    }
    return url && typeof url !== 'object' ? url : 'javascript:void(0);'
}
