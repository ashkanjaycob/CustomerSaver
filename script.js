$(document).ready(function () {

  const TableBody = $("#TableBody");
  TableBody.html(localStorage.getItem("dataCustomer"));

  const name = $("#FullName");
  const Mail = $("#mail");
  const Phone = $("#Phone");


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
    }).validate({
      rules: {
        FullName: "required",
        Phone: "required",
        mail: {
          required: true,
          email: true
        }
      },
      messages: {
        FullName: {
          required: "Please Enter Your FullName.",
        },
        Phone: {
          required: "Please Enter Your Phone Number.",
        },
        mail: {
          required: "Please Enter an Email.",
          mail: "Please Enter an <i>Valid </i> Email."
        }
      },
      submitHandler: function (form) {
        let TableRow = $(`<tr class="TbRw"></tr>`);
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
          name.val(""),
            Mail.val(""),
            Phone.val("")
        }
        ResetVals();
      }
    });
  });


  // Delete button activition 
  let deletBtns = $(".DelI");

  // deletBtns.click(function hideParent() {
  // });

  $(function () {
    deletBtns.click(function () {
      $(this).parent().hide();
      localStorage.setItem("dataCustomer", TableBody.html());
      return false;
    });
  });


});


// let $opt = $("<option></option>").attr("value", time).text(time);

// $("#time-start").append($opt);
