var kal1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
var kal2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var kal3 = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

function ambil(x) {
    var kal = x.slice(8, 24);
    return kal;
}

function gabung(y, z) {
    var kal = y.concat(" ", z);
    return kal;
}

function cetak(x, y, z) {
    console.log("Jawaban soal 1");
    console.log(ambil(x));

    console.log();

    console.log("Jawaban soal 2");
    console.log(gabung(y, z));
}

cetak(kal1, kal2, kal3);