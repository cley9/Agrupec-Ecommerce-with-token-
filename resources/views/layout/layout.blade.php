<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css" />
    <!--nw verson--->
    <link type="text/css" rel="shortcut icon" href="{{ asset('storage/img/icons/logo_ferreteria.svg') }}" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    {{--  icons  --}}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
    {{-- new icons con fontasown --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    {{-- new cley  --}}
    {{-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"> --}}
    {{-- <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script> --}}
    {{-- ads --}}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5125611954987078"
        crossorigin="anonymous"></script>
    {{-- tailwind --}}
    {{-- <script src="https://cdn.tailwindcss.com"></script> --}}
    {{-- ads end --}}
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K2MJEP5HDR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-K2MJEP5HDR');
</script>
    {{-- @vite(['resources/css/app.css', 'resources/js/app.js', 'public/css/mystyle.css']) --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>{{ config('constants.nameProyect') }}</title>
</head>
<body>
    <div id="app">
    <btn-high></btn-high>
    <div class="boxContainerWhatapp btn-whatsapp- boxEfectBtnHome iconWhatpDod">
        {{-- <a href="https://api.whatsapp.com/send?phone={{ config('constants.numContactWhats') }}&text=Buenas tardes, quisiera informe sobre los producto" target="_blank">Enviar mensaje de WhatsApp</a> --}}
        <a href="https://api.whatsapp.com/send?phone={{ config('constants.numContactWhats') }}&text=Buenas tardes, quisiera informe sobre los producto"
            class="rounded-circle btn  iconWhatp" target="_blank"><i class="bi bi-whatsapp"></i></a>
    </div>
    {{-- @include('User.modalRegistro')
@include('User.moldalRecuperarCuenta') --}}
        <login-user></login-user>
        <login-admin></login-admin>
        <layout></layout>
        <div class="container text-center mb-4 h-100  d-flex justify-content-center align-items-center searchMainBox">
            <div class="col-10 col-md-5 inpFormDising">
                <form action="{{ route('search.home.search') }}" id="form" class="frm--search--home">
                    <input type="search" name="search" id="id_search"
                        class=" input-icono input--search--home form-control me-2 rounded-pill- "
                        placeholder="Menu a buscar...">
                </form>
            </div>
        </div>
        {{--  response -- web barra  --}}
        <nav class=" navbar-light boxContainerSlayMainLag">
            <div class="container  nav--link  ">
                <div class="row  ">
                    <div class="navbar-nav col  ">
                        <div class=" container navbar-navd  d-sm-none d-none d-lg-block d-block">
                            <div class="row">
                                {{-- <a class="nav-link col-lg-3 loudingLinkEfectClick" href="">Ventas por mayor</a> --}}
                                <a href="{{ url('Producto-view') }}" class="nav-link col-lg-2 loudingLinkEfectClick"
                                    href="">Productos</a>
                                <a class="nav-link col-lg-2 loudingLinkEfectClick"
                                    href="{{ url('local') }}">Locales</a>
                                <a href="{{ url('Contactenos') }}" class="nav-link col-lg-2 loudingLinkEfectClick"
                                    href="">Contactos</a>
                                {{-- <a class="nav-link col-lg-2 loudingLinkEfectClick" href="">Descuentos</a> --}}
                            </div>
                        </div>
                    </div>
                    <div class="  col d-flex justify-content-end  align-items-center ">
                        <div class="d-sm-none d-none d-lg-block d-block ">
                            <a href="https://api.whatsapp.com/send?phone={{ config('constants.numContactWhats') }}"
                                class="  icons--Contact--he" target="_blank"><i
                                    class="bi bi-whatsapp me-lg-2"></i>{{ config('constants.numContact') }}
                            </a>
                            {{-- <a href="https://www.messenger.com/login.php" class=" icons--Contact--he" target="_blank"><i
                                class="bi bi-messenger"></i> </a> --}}
                            {{-- <a href="https://www.pinterest.es/login/" class="  icons--Contact--he" target="_blank"><i
                                class="bi bi-pinterest"></i> </a> --}}
                            {{-- <a href="https://www.linkedin.com/checkpoint/lg/login?trk=hb_signin"
                            class="  icons--Contact--he" target="_blank"><i class="bi bi-linkedin"></i> </a> --}}
                        </div>
                    </div>
                </div>
                <hr class="my-1">
                <div class="container-fluid  navbar navbar-expand-lg navbar-light bg-light nav--home ">
                    <div class="collapse navbar-collapse navbar-nav d-flex justify-content-center"
                        id="navbarNavAltMarkup">
                        <a class="nav-link loudingLinkEfectClick" aria-current="page"
                            href="{{ route('viewProducto.home.list') }}">Ver
                            producto</a>
                        <a class="nav-link loudingLinkEfectClick" href="{{ route('list.admin.list') }}">lista
                            producto</a>
                        <a class="nav-link  icons--style--raya " aria-current="page">Venta Telefónica (01) 615 6102
                            ǀ</a>
                        <a class="nav-link  icons--style--raya" aria-current="page">Servicio al Cliente (01) 419 2203
                            ǀ</a>
                        <a class="nav-link  icons--style--raya" aria-current="page">Tiendas</a>
                        <a class="nav-link  icons--style--raya" aria-current="page">Seguimiento de tu compra ǀ</a>
                        {{-- <a class="nav-link  icons--style--raya" aria-current="page">Venta Empresa ǀ</a> --}}
                        {{-- <a class="nav-link  icons--style--raya" aria-current="page">SEGUROS ǀ</a> --}}
                    </div>
                </div>
            </div>
        </nav>
        {{--  main login --}}
        @yield('header')
    </div>
    {{-- <div id="modalAddProductoCart"></div> --}}
    <footer class="pt-4   footer--body">
        <div class="container text-muted mb-4">
            <div class="row ">
                <div class="container  d-flex align-items-center justify-content-center pt-4">
                    <div class="col-12 mb-4 row  ">
                        <div class="col-lg-6 d-flex mb-4 align-items-center justify-content-between">
                            <h5 class="btn--footer--rese text-center me-lg-4"> <img
                                    src="{{ asset('storage/img/icons/peru.png') }}" class="me-2" width="26px"
                                    alt=""> Perú</h5>
                            <h5 class="btn--footer--rese text-center  me-lg-4">Nuevo Productos</h5>
                        </div>

                        <div class="col-lg-6 col-12 d-flex justify-content-lg-end">
                            <div class=" text-center">
                                {{-- <a href="https://www.instagram.com/?hl=es" class="rounded-circle btn   icons--Contact"
                                    target="_blank"><i class="bi bi-instagram"></i></a> --}}
                                {{-- <a href="https://web.facebook.com/?_rdc=1&_rdr"
                                    class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-facebook"></i></a> --}}
                                <a href="https://github.com/cley9" class="rounded-circle btn  icons--Contact"
                                    target="_blank"><i class="bi bi-github"></i></a>
                                {{-- <a href="https://twitter.com/iniciarsesion?lang=es"
                                    class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-twitter"></i> </a> --}}
                                <a href="https://api.whatsapp.com/send?phone={{ config('constants.numContactWhats') }}"
                                    class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-whatsapp"></i></a>
                                {{-- <a href="" class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-youtube"></i> </a> --}}
                                {{-- <a href="" class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-twitch"></i> </a>
                                <a href="" class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-messenger"></i> </a> --}}
                                {{-- <a href="" class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-pinterest"></i> </a> --}}
                                <a href="https://www.linkedin.com/in/cley-tornero-mondalgo-89b387189/"
                                    class="rounded-circle btn  icons--Contact" target="_blank"><i
                                        class="bi bi-linkedin"></i> </a>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3 box--layout-footer">
                    <h4 class="fw-normal "> Suscríbete </h4>
                    <h5 class="fw-normal mb-4"> Te enviaremos las mejores ofertas de todo los productos y más.</h5>

                    <form action="" class="text-center mb-4- mb-md-4 frm--correo">
                        <input type="email" class="input--frm--sub mb-3 me-lg-4" placeholder="Correo electronico"
                            required />
                        <input type="text" class="input--frm--sub mb-4 me-lg-3" placeholder="Nombre" required />
                        <input type="submit" class="btn--frm--sub" value="Suscrìbete">
                    </form>

                </div>
                <div class="col-4 col-md-3  ">
                    <h5 class="text-light">Nosotros</h5>
                    <ul class="list-unstyled text-small">
                        <li><a href="Nosotros" class="text-muted" href="#">Nosotros</a></li>
                        <li><a href="{{ url('Contactenos') }}" class="text-muted  " href="#">Contáctanos</a>
                        </li>
                        <li><a href="Nosotros" class="text-muted" href="#">Ubícanos</a></li>
                    </ul>

                </div>

                <div class="col-4 col-md ">
                    <h5 class="text-light">Marcas</h5>
                    <ul class="list-unstyled text-small">
                        <h5 class="text-muted h6">Pavco</h5>
                        <h5 class="text-muted h6">Matusita</h5>
                        <h5 class="text-muted h6">Nicolle</h5>
                        <h5 class="text-muted h6">Nipon Plas</h5>

                    </ul>
                </div>

                <div class="col-3 col-md  ">
                    <h5 class="text-light">Marcas</h5>
                    <ul class="list-unstyled text-small">
                        <li><a href="Nosotros" class="text-muted" href="#">Nosotros</a></li>
                        <li><a href="{{ url('Ayuda') }}" class="text-muted" href="#">Ayuda</a></li>
                    </ul>
                </div>
                <hr class=" d-block d-sm-block d-md-none ">
            </div>
        </div>
        <div class=" footer--final mb-3 d-flex justify-content-center align-items-center">
            <div class="text-center ">
                <small class=" mb-3 text-muted h6"> ©2023 copyright
                    {{ config('constants.nameProyect') }}</small>
            </div>
        </div>
    </footer>
    @include('User.previewProductoCartModal')
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src='https://code.jquery.com/jquery-3.5.1.js'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://unpkg.com/sweetalert2@10.15.0/dist/sweetalert2.all.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>

    {{-- <script src="{{ asset('js/agru.js') }}"></script> --}}


</body>

</html>
