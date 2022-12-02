@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
    <br>
@stop
@section('content')
    @include('Admin.modalRegisterCatalogo')

    <div class=" mb-3">
        <label for="recipient-name" class="col-form-label">Categorias :</label>
        {{--  <input type="text" name="producto_name" class="form-control" id="editP" value="<?php echo $db_id; ?>" required />  --}}
    </div>
    <div class="container"><br>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered text-center table-hover">
                    <thead class="table-primary">
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>

                        <th>Foto</th>
                        <th>Editar</th>
                    </thead>
                    <tbody>
                        @foreach ($viewSlayderMain as $key)
                            <tr>
                                <td>{{ $key['id'] }}</td>
                                <td>{{ $key['nombre'] }}</td>
                                <td> {{ $key['descripcion'] }}</td>
                                <td>
                                    <img src="{{ asset('storage/img/SlayderMain/' . $key['imagen'] . '') }}" width="200px"
                                        alt="">
                                </td>
                                <td>
                                    <a onclick="idCatalogo({{ $key['id'] }})" class="mb-md-0 mb-2 btn btn-warning"
                                        data-bs-toggle="modal" data-bs-target="#modelUpdateCatalogo"> <i
                                            class="bi bi-pencil"></i></a>
                                    <a onclick="productDelete({{ $key['id'] }},'{{ $key['nombre'] }}','{{ $key['imagen'] }}')"
                                        class="btn btn-danger " id="delete-frm"> <i class="bi bi-trash"></i></a>
                                </td>
                            </tr>
                        @endforeach
                </table>
            </div>
        </div>
    </div>


    @include('Admin.modelUpdateCatalogo')
    <script>
        function productDelete(id, nomProducto, img) {
            console.log(img);
            swal.fire({
                title: "&iquest;Estas seguro de eliminar ?",
                text: "El produto " + nomProducto + "",
                imageUrl: "storage/img/SlayderMain/" + img + " ",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
                allowOutsideClick: false,
                showCancelButton: true,
                confirmButtonColor: "#45B39D",
                cancelButtonColor: "#EC7063",
                confirmButtonText: "Confirmar",
            }).then((result) => {
                if (result.value) {
                    var url = "/Admin-deleteCatalogo/" + id + "/" + img + "";
                    window.location.href = url;
                    /*
                     */
                    Swal.fire({
                        icon: "success",
                        title: "Eliminado ",
                        text: "Producto eliminado correctamente",
                        showConfirmButton: false,
                        timer: 1500,

                    });
                }


            });
        }
    </script>
    {{--  my js create for me  --}}
    <script src="{{ asset('js/dataPictur.js') }}"></script>

@endsection
