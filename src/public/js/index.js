

const socket =io();

socket.on('productos', productos => { 
    const tbody = document.getElementById('productos-body');
    tbody.innerHTML = '';

    productos.forEach(producto => {
        const row = tbody.insertRow();

        row.innerHTML= `
        <td>${producto._id}</td>
        <td>${producto.title}</td>
        <td>${producto.description}</td>
        <td>${producto.price}</td>
        <td>${producto.code}</td>
        <td>${producto.stock}</td>
        <td>${producto.category}</td>
        <td>${producto.status}</td>
        <td>${producto.thumbnail}</td>
        
        `;
    });
});

const formulario = document.getElementById('productos-form');

formulario.addEventListener ('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const codigo = document.getElementById('codigo').value;
    const stock = document.getElementById('stock').value;
    const categoria = document.getElementById('categoria').value;

    // Enviar el nuevo producto al servidor a través del socket
    const producto = {
        title: titulo,
        description: descripcion,
        price: precio,
        code: codigo,
        stock: stock,
        category: categoria
    };

    socket.emit('agregarProducto', producto);
    formulario.reset();
});
