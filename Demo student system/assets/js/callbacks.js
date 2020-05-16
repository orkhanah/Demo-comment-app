const students = [
    'Əmrah Rəhmanov',
    'Elmin Tağıyev',
    'Sara Əhmədova',
    'Səftər Əkbərov',
    'Nərmin Əliyeva',
    'Orxan İbrahimov',
    'Gülbahar Məmmədova',
    'Fərid Nuruyev',
    'Kamran Orucov',
    'Elçin Əsgərov',
    'Emin İsmayılov',
    'Mədinə Əliyeva',
    'Cavid Mehdibəyli',
    'Orxan Hüseynli',
    'Mahmud Yusifli',
    'İlahə Məmmədova'
];




/*
1-1000 qeder ederlerin icerisinden  ele ededleri cap etki :
	hem ozu cut eded olsun, 
	hem reqemleri cemi tek eded olsun,
    hem I reqemi tek eded olsun
    */
let ededlerinCemi = 0;
for (let i = 1; i <= 1000; i++) {

    if (i % 2 == 0) {
        let arr = new Array();
        let cem = cemle(i, arr);
        // console.log(i, arr);
        if (cem % 2 != 0) {

            let firstDigit = arr[arr.length - 1];

            if (firstDigit % 2 != 0) {
                ededlerinCemi += i;
                // console.log(i);
            }
        }
    }
    // if (i == 95)
    //     break;

}
console.log(ededlerinCemi);
function cemle(a, reqemler) {

    let reqem, cem = 0;
    // let i = 0;

    while (a > 0) {
        reqem = a % 10;
        a = (a - reqem) / 10;
        cem = cem + reqem;

        reqemler.push(reqem);
    }

    return cem;
}
