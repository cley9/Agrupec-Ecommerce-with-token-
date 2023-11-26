@extends('layout.layout')

@section('header')
<view-page :producto="{{ json_encode($productoId) }}"></view-page>

@include('User.modalPaymentCart')

@include('User.modalDestino')
@include('User.modelAddProCart')
@endsection
