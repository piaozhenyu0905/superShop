<template>
  <div class="toast" v-show="isShow">
    <div >{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return{
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration=1500){
      this.isShow=true
      this.message=message

      setTimeout(()=>{
        this.isShow=false;
        this.message=''
      },duration)
    }
  }

}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
  padding: 8px 10px;
  color:#fff;
  border-radius: 8px;
  background-color: rgba(0,0,0,.7);
  z-index: 99999999999;
}
</style>
