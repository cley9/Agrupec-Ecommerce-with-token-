@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
@stop
@section('content')
    {{-- @include('Admin.registerProductoModal') --}}
    <div id="app">
        <list-product-admin :product-admin="{{ json_encode($cliente)}}"></list-product-admin>
                {{ $cliente->links() }} 
    </div>
    {{-- @include('Admin.updateProductoMondal') --}}
@endsection
