/*
*   billing.js
*   Maret 2017
*   @ibnux
*/

function getBillingInfo(host){
    $.get( host+"Announcement.html", function( data ) {
        $( "#Announcement" ).html( data );
        getVoucherInfo(host);
    });
}

function getVoucherInfo(host){
    $.get( host+"Order_Voucher.html", function( data ) {
        $( "#voucherInformation" ).html( data );
    });
}
// TODO:
// Change url to your phpmixbill url, to folder pages
// Ganti url ke alamat server phpmixbill, ke folder pages
getBillingInfo("http://127.0.0.1/phpmixbill_v5.0/pages/");