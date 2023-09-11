$(document).ready(function () {
  const TableBody = $("#TableBody");
  TableBody.html(localStorage.getItem("dataCustomer"));


//   Save Number Value in localStorage for Next Visit
  let Num;
  Num = localStorage.getItem("CustomerNum", Num);
  if (Num == undefined) {
    Num = 1;
    localStorage.setItem("CustomerNum", Num);
    Num = localStorage.getItem("CustomerNum", Num);
    console.log(Num);
  } else {
    Num = localStorage.getItem("CustomerNum", Num);
    console.log(Num);
  }

  // main Table Creator Function
  $("#submitBtn").click(function () {
    // form preventDefault
    $("#form").submit(function (event) {
      event.preventDefault();
    });

    const name = $("#FullName");
    const Mail = $("#mail");
    const Phone = $("#Phone");

    console.log(name);

    let TableRow = $(`<tr></tr>`);
    TableRow.html(`
        <th>${Num}</th>
        <td>${name.val()}</td>
        <td>${Mail.val()}</td>
        <td>${Phone.val()}</td>
        <td class="DelI text-danger"><i class="fa fa-close"></i></td>
        `);

    TableBody.append(TableRow);

    localStorage.setItem("dataCustomer", TableBody.html());
    Num++;
    localStorage.setItem("CustomerNum", Num);

    function ResetVals() {
        name.val("") , 
        Mail.val("") , 
        Phone.val("")
    }
    ResetVals();
  });
});

// let $opt = $("<option></option>").attr("value", time).text(time);

// $("#time-start").append($opt);
