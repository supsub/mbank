function myFunction() {

    var file = document.getElementById("my_csv_file").files[0];
    var reader = new FileReader();
    reader.onload = function (file) {
        var text = reader.result;
        var options = {"separator": ";"};
        var allLines = text.split('\n');

        allLines = allLines.slice(34, -1).join('\n')

        console.log($.csv.toObjects(allLines, options))

    };
    reader.readAsText(file);
}