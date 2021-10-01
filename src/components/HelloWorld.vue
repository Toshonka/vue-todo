<template>
  <div class="hello">
    <div class="pers-card">
      <img alt="how" src="../assets/mandara.jpg" />
      <h1>Карточка обо мне :)</h1>
      <h4>Меня зовут Антон</h4>
      <h4>Учусь в МИРЭА, группа БСБО-05-19</h4>
      <h4>
        Мои скиллы опишу цитатой: "Я как боксёр на ринге, ничего не вдупляю, но
        готов ебашить"
      </h4>
    </div>
    <div class="form-card">
      <form>
      <div class="form-field">
        <label for="name">Ваше имя</label>
        <input type="text" id="name" required />
      </div>
      <div class="form-field">
        <label for="name">Ваше email</label>
        <input type="text" id="name" required />
      </div>
      <div class="form-field">
        <label for="name">Ваш возраст</label>
        <input type="text" id="name" required />
      </div>
      <div class="submit-btn">
        <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-field input {
  outline: none;
  border: 2px solid black;
  border-radius: 12px;
  padding: 8px 12px;
  margin: 10px;
}
.form-field label {
  display: block;
}
.form-field input:focus,
.form-field input:hover {
  border-color: rgb(47, 179, 135);
}

.pers-card {
  border: 2px solid black;
  border-radius: 12px;
  padding: 16px 16px;
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: rgba(240, 174, 231, 0.623);
  box-shadow: rgb(194, 17, 126) 10px 10px 30px;
}
h4 {
  margin: 0;
}
.submit-btn input {
  border: 2px solid black;
  border-radius: 12px;
}
.submit-btn input:focus,
.submit-btn input:hover {
  border-color: rgb(47, 179, 135);
  background-color: rgba(191, 245, 227, 0.555);
}
.form-card {
  margin-top: 3%;
}
</style>
