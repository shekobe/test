http://cnodejs.org/topic/561dd2dec81290562aff8926

io = require(‘socket.io’) io.rooms[’’]，是当前连接用户列表，数量就是io.rooms[’’].length

config = { _id:"mvbox", members:[
{_id:0,host:"192.168.1.1:27017"},
{_id:1,host:"192.168.1.2:27017"},
{_id:2,host:"192.168.1.3:27017"}]
}
rs.initiate(config);
