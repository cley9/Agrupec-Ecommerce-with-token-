@extends('layout.layout')
@section('header')
    <div class="container bg-light-  boxContainerSearchProduct">

        @if ($searchExists === false)
            <div class="d-flex justify-content-center">
                <div class="box-search-validar p-3 text-center">
                    <h4>Tu búsqueda no se encontro</h4>
                </div>
            </div>
        @endif
        <div class="row mb-4 slyderSearchProductMain p-4">
            @foreach ($slaySearch as $slaySearch)
                <div class="col text-center  box-slay-search- boxSearchImgHead">
                    <a href="{{ route('View.home.index', $id = $slaySearch->id) }}">
                        <img src="{{ asset('storage/img/Productos/' . $slaySearch->imagen . '') }}" class="card-img-top"
                            width="200px" draggable="false"/>
                        <h5 class="card-title h6 text-dark">{{ $slaySearch->nombre }}</h5>
                    </a>
                </div>
            @endforeach
        </div>
        <search :search-main="{{ json_encode($search) }}"></search>
    </div>

    @include('User.modelAddProCart')
@endsection
