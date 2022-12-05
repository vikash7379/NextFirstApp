import * as fs from 'fs';

export default function handler (req,res){
    if (req.method === "POST"){
        req.status(200).json(res)
        fs.writeFile('contactdata/1/json',req.body)
    }else{

    }
}

