export const truncate = (str) =>{
    if(str.length>50){
        let strArray = str.substr(0, 50).split(' ')
        strArray.pop()
        return strArray.join(' ')  + ' . . .'
    }
    else{
        return str
    }
}