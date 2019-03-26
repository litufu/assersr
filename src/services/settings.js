//  是否开启收费模式

import OSS from 'ali-oss'

const aliyunOssConfig = {
    'accessKeyId':'LTAIIXD7W83GOXGb',
    'accessKeySecret':'IQvsM9Q5rxBuqnS22YVOQbJcm8DdHQ',
    'bucket':"gewu-avatar",
    'region': 'oss-cn-hangzhou',
    'name':'oss@gewu.onaliyun.com'
} 

export const ossClient = new OSS({
    region: aliyunOssConfig.region,
    accessKeyId: aliyunOssConfig.accessKeyId,
    accessKeySecret: aliyunOssConfig.accessKeySecret,
    bucket: aliyunOssConfig.bucket
  });

export const DEVELOP = true
export const HOST = DEVELOP ? '192.168.56.1' : "118.31.21.228"
export const REDISHOST = DEVELOP ? 'localhost' : "192.168.14.104"
export const REDISPWD = DEVELOP ? '' : "asdkfue9823wnh#$3djs"
export const PORT = 4000
export const AlipayTest = false
export const DateStartTime = new Date(2019,3,25)
export const FEESETTINGTYPES = {
  regstatus:"REGSTATUS",
  love:"LOVE",
  partner:'PARTNER'
}


