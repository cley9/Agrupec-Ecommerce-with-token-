@extends('layout.layout')

@section('header')
<div id="app">
    
    <view-page :producto="{{ json_encode($productoId) }}"></view-page>
</div>

@include('User.modalPaymentCart')

@include('User.modalDestino')
@include('User.modelAddProCart')
@endsection
