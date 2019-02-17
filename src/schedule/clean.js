import { prisma } from '../generated/prisma-client'

// 定时清理聊天记录
var CronJob = require('cron').CronJob;

// 删除群聊记录
var job1 = new CronJob('00 00 03 * * *', function() {
  prisma.deleteManyGroupMessages()
}, null, true, 'Asia/Shanghai');
// 删除单聊记录
var job2 = new CronJob('00 05 03 * * *', function() {
    prisma.deleteManyMessages()
  }, null, true, 'Asia/Shanghai');

job1.start(); // job 1 started
job2.start(); // job 2 started


// 定时删除Persons