/**
 * Created by bestxie on 2017/6/6.
 */
import {
    baseUrl,
    baseCasUrl
} from '../config/env'

import fetch from '../config/fetch';

/**
 *cad登录用户认证
 */
export const getCasCheck = (query) => fetch({
    url: baseCasUrl + '/new_portal/api/cas/check',
    method: 'get',
    params: query
});

/**
 * 确认订单
 */
export const checkout = (geohash, entities, shopid) => fetch('/v1/carts/checkout', {
    come_from: "web",
    geohash,
    entities,
    restaurant_id: shopid,
}, 'POST');

