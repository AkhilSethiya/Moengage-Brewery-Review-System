
        var data = null;
        function search_by_name()
        {
            const xhtr = new XMLHttpRequest();
            xhtr.open("GET","https://api.openbrewerydb.org/v1/breweries");
            xhtr.send();

            var table = "<table id='resultTable'><tr><th>Id</th><th>Brewery Name</th><th>Brewery Address</th><th>Phone Number</th><th>Website URL</th><th>Current Rating</th><th>city</th><th>State</th></tr>";

            xhtr.onreadystatechange = function(){
                if(xhtr.readyState==4 && xhtr.status==200){
                    data = JSON.parse(xhtr.responseText);
                
                    var id = document.getElementById("id").value;

                    for(var i =0 ; i<data.length;i++)
                    {
                        if(id==data[i].name)
                        {
                            table+="<tr><td>"+data[i].id+"</td>"+"<td>"+data[i].name+"</td>"+"</td><td>"+data[i].address_1+"</td><td>"+data[i].phone+"</td><td>"+data[i].website_url+"</td><td>"+"4"+"</td><td>"+data[i].city+"</td><td>"+data[i].state_province+"</td></tr>";
                        }
                    }
                    table+="</table>";
                    document.getElementById("result").innerHTML=table;
                
                }

            }
        }
            function search_by_city()
        {
            const xhtr = new XMLHttpRequest();
            xhtr.open("GET","https://api.openbrewerydb.org/v1/breweries");
            xhtr.send();

            var table = "<table id='resultTable'><tr><th>Id</th><th>Brewery Name</th><th>Brewery Address</th><th>Phone Number</th><th>Website URL</th><th>Current Rating</th><th>city</th><th>State</th></tr>";

            xhtr.onreadystatechange = function(){
                if(xhtr.readyState==4 && xhtr.status==200){
                    data = JSON.parse(xhtr.responseText);
                   
                    var id = document.getElementById("id").value;

                    for(var i =0 ; i<data.length;i++)
                    {
                        if(id==data[i].city)
                        {
                            table+="<tr><td>"+data[i].id+"</td>"+"<td>"+data[i].name+"</td>"+"</td><td>"+data[i].address_1+"</td><td>"+data[i].phone+"</td><td>"+data[i].website_url+"</td><td>"+"4"+"</td><td>"+data[i].city+"</td><td>"+data[i].state_province+"</td></tr>";
                        }
                    }
                    table+="</table>";
                    document.getElementById("result").innerHTML=table;
                
                }

            }
        }



        function search_by_type()
        {
            const xhtr = new XMLHttpRequest();
            xhtr.open("GET","https://api.openbrewerydb.org/v1/breweries");
            xhtr.send();

            var table = "<table id='resultTable'><tr><th>Id</th><th>Brewery Name</th><th>Brewery Address</th><th>Phone Number</th><th>Website URL</th><th>Current Rating</th><th>city</th><th>State</th></tr>";

            xhtr.onreadystatechange = function(){
                if(xhtr.readyState==4 && xhtr.status==200){
                    data = JSON.parse(xhtr.responseText);

                    var id = document.getElementById("id").value;

                    for(var i =0 ; i<data.length;i++)
                    {
                        if(id==data[i].brewery_type){
                            table+="<tr><td>"+data[i].id+"</td>"+"<td>"+data[i].name+"</td>"+"</td><td>"+data[i].address_1+"</td><td>"+data[i].phone+"</td><td>"+data[i].website_url+"</td><td>"+"4"+"</td><td>"+data[i].city+"</td><td>"+data[i].state_province+"</td></tr>";
                        }
                    }
                    table+="</table>";
                    document.getElementById("result").innerHTML=table;
                
                }

            }
        }    

        function clickbrew()
    {
        const xhtr = new XMLHttpRequest();
        xhtr.open("GET","https://api.openbrewerydb.org/v1/breweries");
        xhtr.send();

        var table = "<table id='resultTable'><tr><th>Id</th><th>Brewery Name</th><th>Brewery Type</th><th>Brewery Address</th><th>City</th><th>State Province</th><th>Postal Code</th><th>Country</th><th>Longitude</th><th>Latitude</th><th>Phone Number</th><th>Website URL</th><th>Current Rating</th><th>State</th><th>Street</th></tr>";

        xhtr.onreadystatechange = function(){
            if(xhtr.readyState==4 && xhtr.status==200){
                data = JSON.parse(xhtr.responseText);
                var id = document.getElementById("id").value;
                
                for(var i =0 ; i<data.length;i++)
                {
               //     if(id==data[i].city || id==data[i].name)
                //    {
                        table+="<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].brewery_type+"</td><td>"+data[i].address_1+"</td><td>"+data[i].city+"</td><td">+data[i].state_province+"</td><td>"+data[i].postal_code+"</td><td>"+data[i].country+"</td><td>"+data[i].longitude+"</td><td>"+data[i].latitude+"</td><td>"+data[i].phone+"</td><td>"+data[i].website_url+"</td><td>"+data[i].state+"</td><td>"+data[i].street+"</td></tr>";
                //    }
                }
                table+="</table>";
                document.getElementById("result").innerHTML=table;
            
            }

        }
    }


        