<template>
      <div class="col-lg-3 col-10  bg-info- ">
                <div class="card h-80">
                    <div class="text-center pt-4">
                        <img :src="`${userObjData.avatar}`" class="card-img-top icons--perfil--user " alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-normal h3">{{ userObjData.name }}</h5>
                        <h5 class="card-title fw-normal h6">{{ userObjData.email }}</h5>

                        <hr>
                        <a href="#" class="me-4 text-success " style="hover:red;">
                            <span class=" text-success "><i
                                    class="i bi-cloud-arrow-down text-success " style="font-size:18px;"></i>
                                234</span>
                        </a>
                        <a href="#" class=" text-danger ">
                            <span class="text-danger"><i class="bi bi-heart text-danger" style="font-size:18px;"></i>
                               23 </span>
                        </a><br><br>
                        <a href="" class="btn btn--paymet--ir btnEfectClick col-12 ">Edit Perfil</a>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    data(){
        return{
            userObj:'',
            userObjData:'',
        }
    },
    mounted(){
        this.userObj=JSON.parse(localStorage.getItem('userObj'));
        this.userObjData=this.userObj.user[0];
        // console.log('--user ',this.userObjData);   
        // adding el avatar  
    }
}
</script>

<style>

</style>