@extends('layout.layout')

@section('header')
@php
    // echo "dfafd--------".session()->get('userId');
@endphp
<div id="app">

    {{-- <cart-page :list-product="{{ json_encode($cartArray->productos) }}"></cart-page> --}}
    {{-- <h3>{{ $exitProductoUser }}</h3> --}}
    <cart-page :list-product="{{ json_encode($cartArray->productos) }}"></cart-page>

    {{-- <cart-page :list-product="{{  json_encode(['list'=>23]) }}"></cart-page> --}}
    {{-- <cart-page :list-product="{{ ["ldfjalj"=32] }}"></cart-page> --}}
</div>
@include('User.modalPaymentCart')

@endsection
