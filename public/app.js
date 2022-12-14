const med = {
    'คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น':60.2876,
    'คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย':72.1287, 
    'คณะแพทยศาสตร์ จุฬาสงกรณ์มหาวิทยาสัย แพทย์ทหารอากาศ':63.9236, 
    'คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่ ':61.2202, 
    'คณะแพทยศาสตร์ มหาวิทยาลัยธรรมศาสตร์':62.3395,
    'คณะแพทยศาตร์ มหาวิทยาลัยนเรศวร':57.6570, 
    'คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล':67.7316, 
    'คณะแพทยศาสตร์โรงพยาบาลศิริราช มหาวิทยาลัยมหิดล':67.5444, 
    'วิทยาลัยแพทยศาสตร์ มหาวิทยาลัยรังสิต โรงพยาบาลราชวิถี':55.4139, 
    'วิทยาลัยแพทยศาสตร์ หาวิทยมาลัยรังสิต โรงพยาบาลเลิศสิน':53.7610, 
    'วิทยาลัยแพทยศาสตร์ มหาวิทยาลัยรังสิต โรงพยาบาลนพรัตนราชธานี':53.4301,
    'คณะแพทยศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ':59.3002,
    'คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์':58.3184,
    'คณะแพทยศาสตร์วชิรพยาบาล มหาวิทยาลัยนวมินทราธิราช':61.8131,
    'คณะแพทยศาสตร์วชิรพยาบาล มหาวิทยาลัยนวมินทราธิราช-โรงพยาบาลตากสิน':60.8378,
    'วิทยาลัยแพทยศาสตร์พระมงกุฎเกล้า (เพศชาย)':58.5537,
    'วิทยาลัยแพทยศาสตร์พระมงกุฎเกล้า (เพศหญิง)':57.7133,
    'แพทยศาสตร์ มหาวิทยาลัยเทคโนโลยีสุรนารี':56.3463,
    'คณะแพทยศาสตร์มหาวิทยาลัยบูรพา':56.9929,
    'แพทยศาสตร์ มหาวิทยาลัยแม่ฟ้าหลวง':56.6875,
    'คณะแพทยศาสตร์ มหาวิทยาลัยสยาม':51.9223,
    'คณะทันตแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย':65.9105,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยมหิดล':61.2116,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่':58.0408,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์':56.6323,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ':57.8483,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยขอนแก่น':56.9282,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยธรรมศาสตร์':58.5610,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยนเรศวร':55.5012,
    'สํานักวิชาทันตแพทยศาสตร์ มหาวิทยาลัยเทคโนโลยีสุรนารี':54.8755,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยเนชั่น':49.2676,
    'คณะทันตแพทยศาสตร์ มหาวิทยาลัยเวสเทิร์น':46.7117,
    'วิทยาลัยทันตแพทยศาสตร์ มหาวิทยาลัยรังสิต':47.3120,
    'คณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย':53.7863,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเกษตรศาสตร์':52.9194,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยขอนแก่น':50.4163,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่':50.9762,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยมหิดล':51.6910,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยมหิดล - วิทยานิยมวิทยาศาสตร์การแพทย์เจ้าฟ้าจุฬาภรณ์ราชวิทยาลัยจุฬาภรณ์':52.1585,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเทคโนโลยีมหานคร':45.4655,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยมหาสารคาม':47.9957,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก':45.7120,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย':45.1919,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์':49.5575,
    'คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเวสเทิร์น':38.4339,
    'คณะเภสัชศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย (สาขาวิชาการบริบาลทางเภสัชกรรม)':55.4617,
    'คณะเภสัชศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย (สารวิชานาชกรรมอุตสาหกร)':54.6871,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยมหิดล':53.9402,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยเชียงใหม่':51.9173,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ (สาขาวิชาการบริบาลทางเภสัชกรรม)':51.7396,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ (สาขาวิชาเภสัชกรรมอุตสาหการ)':51.2362,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยธรรมศาสตร์':52.3679,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยมหาสารคาม (สาขาวิชาการบริการทางเภสัชกรรม)':51.0289,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยบูรพา':49.4560,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยสยาม (สถาบันเอกชน) สาขาวิชาการบริการทางเภสัชกรรม':44.7357,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยหัวเฉียว':47.4969,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยพายัพ (สถาบันเอกชน) (สาขาวิชาการบริการทางเภสัชกรรม)':46.0239,
    'คณะเภสัชศาสตร์ มหาวิทยาลัยอุบลราชธานี (สาขาวิชาการบริการทางเภสัชกรรม':49.4984,
};

function cal(){
    var x = [];
    var inputs = document.getElementsByTagName('input');
    document.getElementById('school').innerHTML = '';
    for (var key in inputs) {     
        if (inputs[key].value > 29) {            
            x.push(inputs[key].value);
        }
    }
    x = x.slice(0,10);
    aLevel = (parseInt(x[0])*20 + parseInt(x[1])*20 + parseInt(x[2])*10 + parseInt(x[3])*10 + (parseInt(x[4]) + parseInt(x[5]) + parseInt(x[6])) * 13.33)/100;
    av = (aLevel * 70 + 10 * (parseInt(x[7]) + parseInt(x[8]) + parseInt(x[9])))/100

    if (av.toFixed(4) === 'NaN'){
        document.getElementById('summary').innerHTML = 'คะแนนไม่ผ่านเกณฑ์';
    }else{
        document.getElementById('summary').innerHTML = av.toFixed(4) + ' คะแนน';
        medSchool(av.toFixed(4));
    }
}

function medSchool(av) {
    var able
    for (var school in med){
        if (av > med[school]){
            console.log(school);
            able += '-'+school+'<br>'
    }
    }
    document.getElementById('school').innerHTML = '<h1>มีโอกาสติด</h1><br>'+able.replace(/undefined/, '') + '<br><b>เกทฑ์คะแนนปี 65</b>';
}
