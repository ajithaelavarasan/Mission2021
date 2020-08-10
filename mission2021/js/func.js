function fibo()
            {
                var i=document.getElementById('n').value;
                var a=-1;
                var b=1;
                var c=a+b;
                var result='<ul>';
                while(c<i)
                { 
                    a=b;
                    b=c;
                    result=result+'<li>'+c+'</li>';
                    c=a+b;
                }
                result+='</ul>';
                document.getElementById("fibb").innerHTML=result;
                document.getElementById('n').value='';
            
            }