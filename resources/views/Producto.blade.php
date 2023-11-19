@extends('layout.layout')
@section('header')
    {{-- app --}}
    <nav class="navbar bg-light-  d-block d-sm-block d-md-none containerSelectPro">
        <div class="container-fluid  navHeadDisingApp" style="">
            <small class="h6"> Seleccione Producto : </small>
            <form class=" overflow-auto boxSlayderApp" id="multi-filters" method="post">
                <div class="row row-cols-2 row-cols-md-4 x-menu  ">
                    @foreach ($listCategory as $listCate)
                        <div class="col ">
                            <input type="checkbox" class="form-check-input p-2 bd-highlight btnFilterSearch"
                                id="btn{{ $listCate['id'] }}" name="{{ $listCate['nombre'] }}" value="Perfil de Aluminio">
                            <label class="form-check-label p-1 bd-highlight"
                                for="btn{{ $listCate['id'] }}">{{ $listCate['nombre'] }}</label>
                        </div>
                    @endforeach
                </div>
        </div>
        </form>
        </div>
    </nav>
    {{-- <div class="containerSlectProducto center">
        <div class="rowSelectProducto">
            
        </div>
    </div> --}}
    {{-- <!------------------------------------------------------>start de la categoria  --}}
    <div class="container-fluid p-4  boxContainerProductoCheck">
        <div class="row">
            <div class="col-1 col-md-4 col-lg-3  d-none d-sm-none d-md-block ">
                <form class="boxSlayderWep" id="multi-filters" method="post">
                    <div class="container accordion" id="accordionPanelsStayOpenExample">
                        <button class="accordion-button listCategoryCard mb-3 shadow" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true">
                            Producto
                        </button>
                        <div class="shadow boxSlayderScrollWeb bg-light" id="panelsStayOpen-collapseOne" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="vertical-menu">
                                @foreach ($listCategory as $listCate)
                                    <div class="list-group-item bg-light align-items-center  d-flex bd-highlight">
                                         <input type="checkbox" class="form-check-input p-2 bd-highlight btnFilterSearch"
                                            id="btnW{{ $listCate['id'] }}" name="{{ $listCate['nombre'] }}"
                                            value="Ocre Bayer">
                                        <label class="form-check-label p-1 bd-highlight"
                                            for="btnW{{ $listCate['id'] }}">{{ $listCate['nombre'] }}</label>
                                        <label class="badge ms-auto p-2 bd-highlight btn-numbers"
                                            for="btnW{{ $listCate['id'] }}">{{ $listCate['id'] }}</label>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="col-md-9">
                <div class="text-center "> <small class="h4  ">Lista de Producto </small></div>
                <div class="row  row-cols-2  row-cols-md-4 row-cols-lg-6 row-cols-ms-4 listCategoryFilterClickBodyMain"
                    id="listCatProduct" class="bg-white">
                </div>
            </div>
        </div>
    </div>

    {{-- <!-----------------------------------------------------------------------------------  -->end de la categoria  --}}

    <div class="container-fluid mb-4">
        <div class="row">
            <div class="col-md-12">
                <div id="news-slider" class="owl-carousel slayProViewMore">
                    @foreach ($viewProducto as $producto)
                        <div class="post-slide p-4">
                            <div class="post-img">
                                <a href="{{ route('View.home.index', $id = $producto['id']) }}">
                                    <img src="{{ asset('storage/img/Productos/' . $producto['imagen'] . '') }}"
                                        class="img-fluid-a" alt="">
                                </a>
                            </div>
                            <div class="post-content">
                                <h5 class="card-title title--box--pro-view txtBoxTitle textHeadTitleViewMore">
                                    {{ $producto['nombre'] }}</h5>
                                <div class="mb-0 d-flex justify-content-between boxSlayProViewMore ">
                                    <span class="box--text--pre txtBoxPreBefore textPrecioProBefore"><del>S/
                                            {{ number_format($producto['precio'], 2, '.', ',') }}</del></span>
                                    <span class="box--text--pre textPrecioProAfter">S/
                                        {{ number_format($producto['precio'], 2, '.', ',') }}</span>
                                </div>
                                <div class=" align-items-center d-flex boxSlayProViewMoreDispo">
                                    <span class="h6 mb-0 text-muted fw-normal">
                                        <small class="box--text--pre">{{ $producto['cantidad'] }}: disponibles </small>
                                    </span>
                                </div>
                                <span>
                                    @for ($i = 1; $i <= rand(3, 5); $i++)
                                        <i class="bi bi-star-fill icons--star"></i>
                                    @endfor
                                </span>
                                <a href="{{ route('View.home.index', $id = $producto['id']) }}"
                                    class="read-more btnEfectClick btnProViewMore">Ver
                                    Producto</a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    <div id="app">
        <producto-page></producto-page>
    </div>
    {{-- <div id="productoPage"></div> --}}
    @include('User.modelAddProCart')
@endsection
