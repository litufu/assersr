import xml2js from 'xml2js';

export const parser = new xml2js.Parser()

export const raw = (args)=>{
        const keys = Object.keys(args).sort();
        let string = '';
        for (const k of keys) {
            string += `&${k}=${args[k]}` 
        }
        string = string.substr(1);
        return string;
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
