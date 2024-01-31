<div class="modal fade card- modal-medioPago" id="prePayment" tabindex="-1" aria-labelledby="title"
    aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="title">Pre compra agrupec</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {{-- <div class="mb-3">
                    <h5 class="h6 fw-normal">Seleciones el medio de pago</h5>
                </div> --}}
                <div class="mb-3">
                    <p> <small>Ingrese su nombre y Apellido </small></p>
                </div>
                <div class="col mb-4">
                    {{-- <input type="text" class="form-control input--frm--userLog" id="nameCliente"
                    v-model="formData.password" placeholder="Clave" required /> --}}
                  <input type="text" class="form-control input--frm--userLog" name="nameCliente" placeholder="Ingrese su nombre y apellido" required/>
                </div>
                <div class="mb-4">
                    <p> <small>Ingrese su numero de contacto</small></p>
                    <input type="number" class="form-control input--frm--userLog" name="nameCliente" placeholder="Ingrese el numero de contacto" required/>
                </div>
                
                <div class="col  text-center mb-3">
                    <button class="col-md-12 col-12 mb-md-3 btn btn--paymet--ver mb-3 btnEfectClick" id="paymentAgrupec">Pagar compra</button>
                </div>
            </div>
        </div>
    </div>
</div>
