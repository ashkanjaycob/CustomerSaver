$(document).ready(function () {

  
    const TableBody = $("#TableBody");
    TableBody.html(localStorage.getItem('data'));  
    let Num = 1;

    // main Table Creator Function
    $("#submitBtn").click(function () {
        // form preventDefault 
        $("#form").submit(function (event) {
            event.preventDefault();
        })

        const name = $("#FullName").val();
        const Mail = $("#mail").val();
        const Phone = $("#Phone").val();

        console.log(name);

        let TableRow = $(`<tr></tr>`);
        TableRow.html(`
        <th>${Num}</th>
        <td>${name}</td>
        <td>${Mail}</td>
        <td>${Phone}</td>
        <td class="DelI text-danger"><i class="fa fa-close"></i></td>
        `)

        TableBody.append(TableRow);


        localStorage.setItem("data", TableBody.html());
        Num++;
    })


});


// let $opt = $("<option></option>").attr("value", time).text(time);

// $("#time-start").append($opt);

