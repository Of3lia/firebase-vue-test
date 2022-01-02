<template>
  <div class="hello">
    <p>name</p>
    <input type="text" v-model="name" v-on:change="changeName()">
    <p>{{userData}}</p>
  </div>
</template>

<script>
import { getDatabase, ref, set, onValue } from "firebase/database"

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      name: '',
      userData:''
    }
  },
  props: {
    msg: String
  },
  created(){
    setTimeout(() => {
      this.observeName(123);
      
    }, 1000);
  },
  methods: {
    observeName(userId){
      const db = getDatabase()
      const userData = ref(db, 'users/' + userId)
      onValue(userData, snapShot => {
        const data = snapShot.val()
        this.userData = data
      })
    },
    changeName(){
      this.wroteUserData(123, this.name, 'myemal@maill', 'https:myimageurl')
    },
    wroteUserData(userId, name, email, imagerUrl) {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imagerUrl
      })
    }
  }
}
</script>