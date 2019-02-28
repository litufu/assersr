import xml2js from 'xml2js';
import * as iconv from 'iconv-lite';

export const parser = new xml2js.Parser()

export const raw = (args)=>{
    const signStr = Object.keys(args).sort().map((key) => {
        let data = args[key];
        if (Array.prototype.toString.call(data) !== '[object String]') {
          data = JSON.stringify(data);
        }
        return `${key}=${iconv.encode(data, 'utf-8')}`;
      }).join('&');

    return signStr;
}

export const createNonceStr = ()=> {
    return Math.random().toString(36).substr(2, 15);
}

export const createTimeStamp=()=>{
    return `${parseInt(new Date().getTime() / 1000,10)}`
}

export const getXMLNodeValue=(xml)=>{
    return new Promise((resolve, reject) => {
        parser.parseString(xml,  (err, result)=> {
            if (err) {
                reject('err')
            } else {
                resolve(result.xml)
            }
        })
    })

}
