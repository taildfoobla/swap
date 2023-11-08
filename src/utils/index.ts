import fs from "fs"



export const renderInOutToken=(amount0In:BigInt,amount0Out:BigInt,amount1In:BigInt,amount1Out:BigInt,address0:String,address1:String)=>{
    if(amount0In&&amount0Out&&amount1In&&amount1Out){
        if(amount0In.toString()!=="0"){
            return {
                amount0:amount1Out,
                amount1:amount0In,
                token0:address1,
                token1:address0,
            }
        }else{
            return {
                amount0:amount0Out,
                amount1:amount1In,
                token0:address0,
                token1:address1,
            }
        }
    }else{
        return{
            amount0:"",
            amount1:"",
            token0:"",
            token1:""
        }
    }
   
}


export function readJsonFromFile(filePath: string): any {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  }
  
  // Function to write JSON data to a file
export function writeJsonToFile(filePath: string, data: any): void {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf-8');
  }