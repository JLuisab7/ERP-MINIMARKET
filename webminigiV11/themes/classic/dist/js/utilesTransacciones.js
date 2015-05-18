
  function obtenerNroFactura(){
         $.ajax({
        url: 'index.php?r=ventas/AjaxObtenerNroFactura',
        type: 'POST',        
    })
    .done(function(response) {   
     data=response.output;     
        //console.log(data.nroFact);

        $("#nroFactura").text(data.nroFact);
        $("#nroFactura").attr('data-nro', data.nroFact);
        $("#nroSerie").text('001');
        $("#nroSerie").attr('data-serie', '001');
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    };

  function obtenerNroOrdenCompra(){
         $.ajax({
        url: 'index.php?r=compras/AjaxObtenerNroOrden',
        type: 'POST',        
    })
    .done(function(response) {   
     data=response.output;     
        console.log(data.nroOrden);

       // $("#nroOrden").val(data.nroOrden);
        $("#nroOrden").text(data.nroOrden);
        $("#nroOrden").attr('data-nro', data.nroOrden);
        $("#nroSerieOrden").text('001');
        $("#nroSerieOrden").attr('data-serie', '001');

    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    };

$(document).ready(function(){

obtenerNroFactura();
obtenerNroOrdenCompra();
    
                                
        var consulta;
                                                                          
         //hacemos focus al campo de búsqueda
        $(".buscarProducto").focus();
                                                                                                    
        //comprobamos si se pulsa una tecla
        $(".buscarProducto").keyup(function(e){
               $("#findProducto").show();  

              //obtenemos el texto introducido en el campo de búsqueda
              consulta = $(".buscarProducto").val();
                                                                           
              //hace la búsqueda
                                                                                  
              $.ajax({
                    type: "POST",
                    url: "index.php?r=almacen/AjaxBuscarProducto",
                    data: {
                        query:consulta
                    },
                    beforeSend: function(){
                          //imagen de carga
                          //$("#resultado").html("<p align='center'><img src='ajax-loader.gif' /></p>");
                    },
                    error: function(){
                          console.log('error');     
                    },
                    success: function(data){  
                    var html = "";

                $("#findProducto").find("option").remove();
                 
                $.each(data, function(index, value) {

                    html += '<option value="'+value.idProducto+'">'+value.desc_Prod+'</option>';
                });
                
                $("#findProducto").append(html);  

                          
                                                             
                    }
              });
                                                                                  
                                                                          
        });

        //comprobamos si se pulsa una tecla
        $(".buscarCliente").keyup(function(e){
               $("#findCliente").show();  

              //obtenemos el texto introducido en el campo de búsqueda
              consulta = $(".buscarCliente").val();
                                                                           
              //hace la búsqueda
                                                                                  
              $.ajax({
                    type: "POST",
                    url: "index.php?r=ventas/AjaxBuscarCliente",
                    data: {
                        query:consulta
                    },
                    beforeSend: function(){
                          //imagen de carga
                          //$("#resultado").html("<p align='center'><img src='ajax-loader.gif' /></p>");
                    },
                    error: function(){
                          console.log('error');     
                    },
                    success: function(data){  
                    var html = "";

                $("#findCliente").find("option").remove();
                 
                $.each(data, function(index, value) {

                    html += '<option value="'+value.idCliente+'">'+value.RazSoc_Cli+'</option>';
                });
                
                $("#findCliente").append(html);  

                          
                                                             
                    }
              });
                                                                                  
                                                                          
        });

        //comprobamos si se pulsa una tecla
        $(".buscarProveedor").keyup(function(e){
               $("#findProveedor").show();  

              //obtenemos el texto introducido en el campo de búsqueda
              consulta = $(".buscarProveedor").val();
                                                                           
              //hace la búsqueda
                                                                                  
              $.ajax({
                    type: "POST",
                    url: "index.php?r=compras/AjaxBuscarProveedor",
                    data: {
                        query:consulta
                    },
                    beforeSend: function(){
                          //imagen de carga
                          //$("#resultado").html("<p align='center'><img src='ajax-loader.gif' /></p>");
                    },
                    error: function(){
                          console.log('error');     
                    },
                    success: function(data){  
                    var html = "";

                $("#findProveedor").find("option").remove();
                 
                $.each(data, function(index, value) {

                    html += '<option value="'+value.idProveedor+'">'+value.RazSoc_Prov+'</option>';
                });
                
                $("#findProveedor").append(html);  

                          
                                                             
                    }
              });
                                                                                  
                                                                          
        });

$("#findProducto").click(function() {
    var idProducto=$(this).val();

    $.ajax({
        url: 'index.php?r=almacen/AjaxObtenerProducto',
        type: 'POST',        
        data: {idProducto:parseInt(idProducto)},
    })
    .done(function(response) {
         data=response.output;
         $("#fac_idProducto").val(data.idProducto);
         $("#fac_desc_Prod").val(data.desc_Prod);
         $("#fac_desc_Prod").attr('data-id', data.idProducto);
         $("#fac_CantProd").attr('data-stock', data.stock);
         $("#fac_CantProd").attr('max', data.stock);
         $("#fac_Precio").val(data.Precio);
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        //console.log("complete");
    });
    
$(this).hide();
});

$("#findCliente").click(function() {
    var idCliente=$(this).val();

    $.ajax({
        url: 'index.php?r=ventas/AjaxObtenerCliente',
        type: 'POST',        
        data: {idCliente:parseInt(idCliente)},
    })
    .done(function(response) {
         data=response.output;
        
         $("#fac_RazSoc_Cli").val(data.RazSoc_Cli);
         $("#fac_RazSoc_Cli").attr('data-id', data.idCliente);
        
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        //console.log("complete");
    });
    
$(this).hide();
});

$("#findProveedor").click(function() {
    var idProveedor=$(this).val();

    $.ajax({
        url: 'index.php?r=compras/AjaxObtenerProveedor',
        type: 'POST',        
        data: {idProveedor:parseInt(idProveedor)},
    })
    .done(function(response) {
         data=response.output;
        
         $("#fac_RazSoc_Prov").val(data.RazSoc_Prov);
         $("#fac_RazSoc_Prov").attr('data-id', data.idProveedor);
        
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        //console.log("complete");
    });
    
$(this).hide();
});




$( '#fac_CantProd' ).click(function(){
    var cant=$( this ).val();
    var precio=$( "#fac_Precio" ).val();
    var total=(cant)*(precio);
  $( '#fac_valorVenta' ).val(parseFloat(total).toFixed(2));
});

$( '#fac_CantProd' ).change(function(){
    var cant=$( this ).val();
    var precio=$( "#fac_Precio" ).val();
    var total=(cant)*(precio);
 $( '#fac_valorVenta' ).val(parseFloat(total).toFixed(2));
});

$( '#fac_CantProd' ).keypress(function(){
    var cant=$( this ).val();
    var precio=$( "#fac_Precio" ).val();
    var total=(cant)*(precio);
 $( '#fac_valorVenta' ).val(parseFloat(total).toFixed(2));
});


                                                                   
});


$(document).ready(function() {

    
     $('#DetalleFactura').dataTable({     
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-danger'><i class='fa fa-trash-o '></i></button>"
        } ],
        "paging":   false,
        "ordering": false,
        "info":     false,
        "bFilter": false
    } );



} );

$(document).ready(function() {
   
    function sumarValores(){
  var table=$('#DetalleFactura').DataTable();
  var total = table 
    .column(4)
    .data()
    .reduce( function (a, b) {
        return parseFloat(a) + parseFloat(b);
    } );


   $("#subTotal").val((total*1).toFixed(2));

   $("#igv").val((total*0.18).toFixed(2));
   var igv= $("#igv").val();
   var subtotal=$("#subTotal").val();
   $("#Total").val((parseFloat(subtotal)+parseFloat(igv)).toFixed(2)); 
 
  
}    
function clearInputs(){
        $("#fac_desc_Prod").attr("data-id","");
        $("#fac_desc_Prod").val("");
        $("#fac_CantProd").val("");
        $("#fac_Precio").val("");
        $("#fac_valorVenta").val("");
 
  
}
        $('#addRow').on( 'click', function () {
        var id=$("#fac_desc_Prod").attr("data-id");
        var desc=$("#fac_desc_Prod").val();
        var cant=$("#fac_CantProd").val();
        var pre= $("#fac_Precio").val();
        var val=$("#fac_valorVenta").val();

     var table=$('#DetalleFactura').DataTable();
      var detalle = $('#DetalleFactura').tableToJSON();
      var repeat=false;
$.each(detalle,function(index, value){
    console.log('My array has at position ' + index + ', this value: ' + value.Codigo);
    if(value.Codigo===id){
      console.log('repetido');
     detalle[index].Cantidad=parseInt(detalle[index].Cantidad)+parseInt(cant);
     detalle[index].Importe=parseFloat(parseInt(detalle[index].Cantidad)*parseFloat(detalle[index].Precio)).toFixed(2);
     console.log('My array has at position ' + index + ', this value: ' + value.Cantidad);
    
    repeat=true;    
   
      console.log(detalle);
     return false;  
    }
});

if(repeat===false){

   $('#DetalleFactura').DataTable().row.add( [
           id,desc,cant,pre,val
        ] ).draw();
 }else if(repeat===true){
  
  var table=$('#DetalleFactura').DataTable();
   table
        .clear()
        .draw();
      
  $.each(detalle,function(index, value){
   
     
     
      $('#DetalleFactura').DataTable().row.add( [
                 value.Codigo,value.Descripcion,value.Cantidad,value.Precio,value.Importe
              ] ).draw();

});
 };

 
           
sumarValores();
clearInputs();
       
    } );


        $('#DetalleFactura tbody').on( 'click', 'button', function () {
  var table = $('#DetalleFactura').DataTable();
        table.row( $(this).parents('tr') ).remove().draw( false );
        //alert( data[0] +"'s salary is: "+ data[ 4 ] );
        sumarValores();

    } );

 /*$('#add_DetalleFact').click( function() {

 var table = $('#DetalleFactura').tableToJSON();
var nroSerie=$("#nroSerie").val();
  var nroFactura=$("#nroFactura").val();


$.ajax({
    url: 'index.php?r=ventas/AjaxAgregarDetalleFactura',
    type: 'Post',  
    data: {
            json:JSON.stringify(table),
            nroSerie:nroSerie,
            nroFact:nroFactura
        },
})
.done(function() {
    console.log("success");
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
});

});*/

 $('#add_Factura').click( function() {


  var nroSerie=$("#nroSerie").attr('data-serie');
  var nroFactura=$("#nroFactura").attr('data-nro');
  var idCliente=$("#fac_RazSoc_Cli").attr('data-id');
  var idEmpleado=$("#idEmpleado").val();
  var subTotal=$("#subTotal").val();
  var IGV=$("#igv").val();
  var Total=$("#Total").val();

 
$.ajax({
    url: 'index.php?r=ventas/AjaxAgregarFactura',
    type: 'Post',  
    data: {
        nroSerie:nroSerie,
        nroFactura:nroFactura,
        idCliente:idCliente,
        idEmpleado:idEmpleado,
        subTotal:subTotal,
        IGV:IGV,
        Total:Total
    },
})
.done(function() {
    console.log("success");
})
.fail(function() {
    console.log("error");
})
.always(function() {
   var table = $('#DetalleFactura').tableToJSON();
  var nroSerie=$("#nroSerie").attr('data-serie');
  var nroFactura=$("#nroFactura").attr('data-nro');


$.ajax({
    url: 'index.php?r=ventas/AjaxAgregarDetalleFactura',
    type: 'Post',  
    data: {
            json:JSON.stringify(table),
            nroSerie:nroSerie,
            nroFact:nroFactura
        },
})
.done(function() {
    console.log("success");
   // location.reload();
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
    
});
});

}); 

$('#add_OrdenCompra').click( function() {

  var nroSerie=$("#nroSerieOrden").attr('data-serie');
  var nroOrden=$("#nroOrden").attr('data-nro');
  var idProveedor=$("#fac_RazSoc_Prov").attr('data-id');
  var idEmpleado=$("#idEmpleado").val();
  var subTotal=$("#subTotal").val();
  var IGV=$("#igv").val();
  var Total=$("#Total").val();

 
$.ajax({
    url: 'index.php?r=compras/AjaxAgregarOrdenCompra',
    type: 'Post',  
    data: {
        nroSerie:nroSerie,
        nroOrden:nroOrden,
        idProveedor:idProveedor,
        idEmpleado:idEmpleado,
        subTotal:subTotal,
        IGV:IGV,
        Total:Total
    },
})
.done(function() {
    console.log("success");
})
.fail(function() {
    console.log("error");
})
.always(function() {
  var table = $('#DetalleFactura').tableToJSON();
var nroSerie=$("#nroSerieOrden").attr('data-serie');
  var nroOrden=$("#nroOrden").attr('data-nro');


$.ajax({
    url: 'index.php?r=Compras/AjaxAgregarDetalleOrdenCompra',
    type: 'Post',  
    data: {
            json:JSON.stringify(table),
            nroSerie:nroSerie,
            nroOrden:nroOrden
        },
})
.done(function() {
    console.log("success");
    location.reload();
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
    
});

});

});  

 /*$('#add_DetalleFact').on( 'click', function () {
         var table = $('#DetalleFactura').DataTable();
        var info=table.page.info();
        //alert(info.end);



    } );*/

  /* 
    var table = $('#DetalleFactura').DataTable();

   
$('#DetalleFactura tbody').on( 'click', 'td', function () {
    alert( 'Clicked on cell in visible column: '+table.cell( this ).index().columnVisible );
} );

    var table = $('#DetalleFactura').DataTable();

*/
 
} );


