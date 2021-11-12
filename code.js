function Complete() {
    var elem = "Name: " + document.Sel1.name.value +
        "\nEmail: " + document.Sel1.email.value +
        "\nPhone number: " + document.Sel1.tel.value + 
        "\nAnswer: " + document.Sel1.letter.value;
    alert(elem);
}
function getDate()
{
    var today=new Date();
    return today.toLocaleString()+"\n";
}
function CheckRadio(form,value)
{
    if(value=="Good")
        form.Letter.value=getDate()+OK;
    else
        form.Letter.value=getDate()+noanswerneeded;
}
