$(document).ready(function(){
  //prevent the default behavior of the form which
  //is to submit.

  $('.deleteButton').on('click',function(event){
    var button = this;
    var form = $(this).parent(".deleteForm");

    event.preventDefault(); //prevent form from submiting
    var chooseToDelete = confirm("are you sure?");//true or false

    if (chooseToDelete) {
      form.submit();
    }
  });
});
