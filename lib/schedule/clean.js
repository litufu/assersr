"use strict";

var prisma = require('../generated/prisma-client').prisma; // 定时清理聊天记录


var CronJob = require('cron').CronJob;

var shell = require("shelljs"); // 删除聊天记录


new CronJob('* * * * * *', function () {
  console.log('11');
  shell.exec("node ./delete.js");
  console.log('222');
}, null, true, 'Asia/Shanghai'); // 定时删除Persons
//# sourceMappingURL=clean.js.map