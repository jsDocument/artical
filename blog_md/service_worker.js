/*
* @Author: mengyue
* @Date:   2018-04-09 16:34:37
* @Last Modified by:   mengyue
* @Last Modified time: 2018-04-09 16:58:00
*/

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('service worker 注册成功');
    }).catch(function (err) {
        console.log('servcie worker 注册失败')
    });
}

var cacheFiles = [
    'about.js',
    'blog.js'
];
self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open('my-test-cahce-v1').then(function (cache) {
            return cache.addAll(cacheFiles);
        })
    );
});

// 监听fetch来返回自己的响应
self.addEventListener('fetch', function (evt) {
    evt.respondWith(
        // 缓存中是否有这个请求
        caches.match(evt.request).then(function(response) {
            if (response) {
                return response;
            }
            // service worker请求
            var request = evt.request.clone();
            return fetch(request).then(function (response) {
                if (!response && response.status !== 200 && !response.headers.get('Content-type').match(/image/)) {
                    return response;
                }
                // 是图片, 因为是stream只能使用一次, 故复制一份, 一份返回, 一份存入缓存。
                var responseClone = response.clone();
                caches.open('my-test-cache-v1').then(function (cache) {
                    cache.put(evt.request, responseClone);
                });
                return response;
            });
        })
    )
});