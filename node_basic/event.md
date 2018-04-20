### 事件的类EventEmitter
+ 创建一个基础EventEmitter的自定义类

`

    var util = require('util');
    var events = require('events');
    function MusicPlayer(){
        this.playing = false;
        events.EventEmitter.call(this);
    }
    var AudioDevice = {
        play: function(track){

        },
        stop: function(){}
    }

    util.inherits(MuiscPlayer, events.EventEmitter)
    var musicPlayer = new MusicPlayer();
    musicPlayer.on('play', function(track){
        this.playing = true;
        AudioDevice.play(track);
    })
    musicPlayer.on('stop', function(){
        this.playing = false;
        AudioDevice.stop();
    })
    musicPlayer.emit('play', 'The Roots - The Fire')
    setTimeout(function(){
        musicPlayer.emit('stop');
    })

`
+ express是以mixin(app, EventEmitter.prototype, false);方式创建基于事件的自定义类
+ inherits是通过封装ES5r Object.create来实现的, 通过从一个原型到另一个原型继承属性的方式来实现。
+ 移除musicPlayer.removeListener('play', play)
+ 如果已经有自己的类, 不想简单的继承 EventEmitter时, 可以将原型方法拷贝到另一个原型对象上。
+ 异常处理: 在异常发生时阻止异常抛出。默认没有监听error时会打印一个堆栈并退出程序。

`

    musicPlayer.on('error', function(err){
        console.log('Error', err);
    })
`
+ 通过domain管理异常, 处理多个事件实例异常, domain能集中的处理多个异步操作



+ 反射, 通过监听newListener事件来获取新添加的事件与监听器的方法。


### stream















