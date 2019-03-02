//  是否开启收费模式

import OSS from 'ali-oss'

export const fee = false
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

export const HOST = '192.168.43.75'
export const PORT = 4000
export const AlipayTest = false
export const DateStartTime = new Date(2019,1,28)

