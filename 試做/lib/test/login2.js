function run()
{
    var name = document.getElementById("account").value;
    var password = document.getElementById("password").value;

    if(!name || !password )
    {
        <!-- alert("您有欄位沒有輸入內容!"); -->
        if ( confirm ("我不知道你輸入了什麼 ??? ??? ") )
        {
            div1.style.display='none';
            div2.style.display='';
            div3.style.display='none';
        }
    }
    else if(name=="lancat" && password=="25")
    {
        div1.style.display='none';
        div2.style.display='none';
        div3.style.display='';
    }
    else if(name=="admin" && password=="admin")
    {
        window.location.assign("choose.html");
    }
    else
    {
        div1.style.display='';
        div2.style.display='none';
        div3.style.display='none';
    }
}
