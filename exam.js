/*שאלות - בחרו 4 מתוך השישה:
צור פונקציה המקבלת מערך של מספרים ומחזירה מערך המכיל רק את המספרים הזוגיים מהמערך הקודם 
צור פונקציה המקבלת מחרוזת ומחזירה את כמות המילים המכילות ארבעה אותיות
צור פונקציה המקבלת מערך דו ממדי והופכת אותו למערך חד מימדי
 */
let arr = [1,2,3,4,5,6,7,8,9,10]

let Mission1 = (numarr)=>{
    let evennumsarr = numarr.filter(num=>num%2==0);    
    return evennumsarr;
}

let Mission2 = (str) =>{
    let wordsarr = str.split(" ");
    let count = 0;
    for (let i = 0; i < wordsarr.length; i++) {
        if(wordsarr[i].length == 4)
        {
            count++;
        }
    }   
    return count;
}

