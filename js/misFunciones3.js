///////////////////////////////////////////////// TABLA CATEGORIA /////////////////////////////////////////////////
function traerInformacionCategorias() 
{
	$.ajax
	({
		url: "http://132.226.244.223:8080/api/Category/all",
		type: "GET",
		datatype: "JSON",
		success: function(respuesta)
		{
			console.log(respuesta);
			pintarRespuesta(respuesta);
		}
	})
}

function pintarRespuesta(respuesta)
{
	let myTable="<table>";
    for(i=0;i<respuesta.length;i++)
    {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
	    let var2 = 
	    {
	        name:$("#Cname").val(),
	        description:$("#Cdescription").val()
	    };
	      
	        $.ajax({
	        type:'POST',
	        contentType: "application/json; charset=utf-8",
	        dataType: 'JSON',
	        data: JSON.stringify(var2),
	        
	        url:"http://132.226.244.223:8080/api/Category/save",

	        success:function(response) {
	                console.log(response);
	            console.log("Se guardo correctamente");
	            alert("Se guardo correctamente");
	            window.location.reload()
	    
	        },
	        
	        error: function(jqXHR, textStatus, errorThrown) {
	              window.location.reload()
	            alert("No se guardo correctamente");
	    
	    
	        }
	        });
	
	}

///////////////////////////////////////////////// TABLA AUDIENCE /////////////////////////////////////////////////

function traerInformacionAudience() 
{
	$.ajax
	({
		url: "http://132.226.244.223:8080/api/Audience/all",
		type: "GET",
		datatype: "JSON",
		success: function(respuesta)
		{
			console.log(respuesta);
			pintarRespuestaAudience(respuesta);
		}
	})
}

function pintarRespuestaAudience(respuesta)
{
	let myTable="<table>";
    for(i=0;i<respuesta.length;i++)
    {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].owner+"</td>";
        myTable+="<td>"+respuesta[i].capacity+"</td>";
        myTable+="<td>"+respuesta[i].category_id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionAudience()
{
	    let var3 = 
	    {
	    	owner:$("#Aowner").val(),
	    	capacity:$("#Acapacity").val(),
	    	category_id:$("#Acategory_id").val(),
	        name:$("#Aname").val(),
	        description:$("#Adescription").val()
	    };
	      
	    $.ajax
	    ({
	        type:'POST',
	        contentType: "application/json; charset=utf-8",
	        dataType: 'JSON',
	        data: JSON.stringify(var3),
	        
	        url:"http://132.226.244.223:8080/api/Audience/save",

	        success:function(response) 
	        {
	            console.log(response);
	            console.log("Se guardo correctamente");
	            alert("Se guardo correctamente");
	            window.location.reload()
	    
	        },
	        
	        error: function(jqXHR, textStatus, errorThrown) 
	        {
	              window.location.reload()
	            alert("No se guardo correctamente");
	    
	    
	        }
	    });
	
}

///////////////////////////////////////////////// TABLA AUDIENCE /////////////////////////////////////////////////

function traerInformacionCliente() 
{
	$.ajax
	({
		url: "http://132.226.244.223:8080/api/Client/all",
		type: "GET",
		datatype: "JSON",
		success: function(respuesta)
		{
			console.log(respuesta);
			pintarRespuestaCliente(respuesta);
		}
	})
}

function pintarRespuestaCliente(respuesta)
{
	let myTable="<table>";
    for(i=0;i<respuesta.length;i++)
    {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionCliente()
{
	    let var4 = 
	    {
	    	owner:$("#CLemail").val(),
	    	password:$("#CLpassword").val(),
	    	name:$("#CLname").val(),
	        description:$("#CLage").val()
	    };
	      
	    $.ajax
	    ({
	        type:'POST',
	        contentType: "application/json; charset=utf-8",
	        dataType: 'JSON',
	        data: JSON.stringify(var4),
	        
	        url:"http://132.226.244.223:8080/api/Client/save",

	        success:function(response) 
	        {
	            console.log(response);
	            console.log("Se guardo correctamente");
	            alert("Se guardo correctamente");
	            window.location.reload()
	    
	        },
	        
	        error: function(jqXHR, textStatus, errorThrown) 
	        {
	              window.location.reload()
	            alert("No se guardo correctamente");
	    
	    
	        }
	    });
	
}

///////////////////////////////////////////////// TABLA MENSAJE /////////////////////////////////////////////////

function traerInformacionMensaje() 
{
	$.ajax
	({
		url: "http://132.226.244.223:8080/api/Message/all",
		type: "GET",
		datatype: "JSON",
		success: function(respuesta)
		{
			console.log(respuesta);
			pintarRespuestaMensaje(respuesta);
		}
	})
}

function pintarRespuestaMensaje(respuesta)
{
	let myTable="<table>";
    for(i=0;i<respuesta.length;i++)
    {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensaje()
{
	    let var5 = 
	    {
	    	messageText:$("#MmessageText").val(),
	    };
	      
	    $.ajax
	    ({
	        type:'POST',
	        contentType: "application/json; charset=utf-8",
	        dataType: 'JSON',
	        data: JSON.stringify(var5),
	        
	        url:"http://132.226.244.223:8080/api/Message/save",

	        success:function(response) 
	        {
	            console.log(response);
	            console.log("Se guardo correctamente");
	            alert("Se guardo correctamente");
	            window.location.reload()
	    
	        },
	        
	        error: function(jqXHR, textStatus, errorThrown) 
	        {
	              window.location.reload()
	            alert("No se guardo correctamente");
	    
	    
	        }
	    });
	
}

///////////////////////////////////////////////// TABLA RESERVACIONES /////////////////////////////////////////////////

function traerInformacionReservaciones() 
{
	$.ajax
	({
		url: "http://132.226.244.223:8080/api/Reservation/all",
		type: "GET",
		datatype: "JSON",
		success: function(respuesta)
		{
			console.log(respuesta);
			pintarRespuestaReservaciones(respuesta);
		}
	})
}

function pintarRespuestaReservaciones(respuesta)
{
	let myTable="<table>";
    for(i=0;i<respuesta.length;i++)
    {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionMensaje()
{
	    let var6 = 
	    {
	    	startDate:$("#RstartDate").val(),
	    	devolutionDate:$("#RdevolutionDate").val(),
	    	status:$("Rstatus").val(),
	    };
	      
	    $.ajax
	    ({
	        type:'POST',
	        contentType: "application/json; charset=utf-8",
	        dataType: 'JSON',
	        data: JSON.stringify(var6),
	        
	        url:"http://132.226.244.223:8080/api/Reservation/save",

	        success:function(response) 
	        {
	            console.log(response);
	            console.log("Se guardo correctamente");
	            alert("Se guardo correctamente");
	            window.location.reload()
	    
	        },
	        
	        error: function(jqXHR, textStatus, errorThrown) 
	        {
	              window.location.reload()
	            alert("No se guardo correctamente");
	    
	    
	        }
	    });
	
}