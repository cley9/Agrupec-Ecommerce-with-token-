<template>
  <div class="rounded-2 ir-arriba card boxEfectBtnHome">
    <i class="bi bi-chevron-up" @click="btnHigh"></i>
    </div>
</template>

<script>
import { upHighBtn } from '../js/methods';

export default {
methods:{
    btnHigh(){
        upHighBtn();
    }
}
}
</script>

<style>

</style>