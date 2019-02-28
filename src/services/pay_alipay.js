import express from 'express';
import  {raw} from './helper'
import { prisma } from '../generated/prisma-client'
import {verified} from './utils'

const alipay = express();

// 接受支付宝通知
alipay.post('/notify_url',  (req, res)=> {
    const obj = req.body
    const sign = req.body.sign
    delete obj.sign
    delete obj.sign_type

    const verRes = verified(raw(obj), sign)
    if (verRes) {
        /** 
         * 1、商户需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号，
         * 2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额）
         * 3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方（有的时候，一个商户可能有多个seller_id/seller_email）
         * 4、验证app_id是否为该商户本身。上述1、2、3、4有任何一个验证不通过，则表明本次通知是异常通知，务必忽略。在上述验证通过后商户必须根据支付宝不同类型的业务通知，
         * 正确的进行不同的业务处理，并且过滤重复的通知结果数据。
         * 在支付宝的业务通知中，只有交易通知状态为TRADE_SUCCESS或TRADE_FINISHED时，支付宝才会认定为买家付款成功。
        */
        // 按照支付结果异步通知中的描述，对支付结果中的业务内容进行1\2\3\4二次校验，校验成功后在response中返回success，校验失败返回failure
        res.send('success')
    } else {
        res.send('failure')
    }
})



module.exports = alipay;