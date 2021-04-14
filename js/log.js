$(document).ready(function () {
    // حذف الفيديو من سجل المشاهدة عندما يُضغط على إشارة الخطأ الموجودة في الزاوية
    $(".remove").click(function () {
        $(this).parents('.card').hide();
    });
});
// parents أي فقط أخفي البطاقة الاب لهذه الايقونه