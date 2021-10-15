<template>
<div class="form-card">
      <form>
        <div class="img-wrapper">
          <img alt=" " src="../assets/sckr.jpg" class="scr" />
          <img alt=" " src="../assets/hnt.jpg" class="hnt" />
        </div>
        <div class="form-field">
          <h3>Расскажи о себе :)</h3>
          <div class="name">
            <label for="name1">Ваше имя</label>
            <input type="text" id="name1" required />
          </div>
          <div class="email">
            <label for="name2">Ваше email</label>
            <input type="text" id="name2" required />
          </div>
          <div class="msg">
            <label for="name3">Комметарий</label>
            <input type="text" id="name3" required />
          </div>
        </div>
        <div class="submit-btn">
          <input type="submit" value="ОТПРАВИТЬ" />
        </div>
      </form>
    </div>
</template>


<script>
export default {
  name: "formcard",
};
</script>


<style scoped>
.img-wrapper {
  position: relative;
  height: 200px;
  width: 200px;
}

.img-wrapper img {
  position: absolute;
  height: 200px;
  width: 200px;
  top: 0;
  bottom: 0;
  left: 150px;
}

.scr {
  z-index: 11;
}

.hnt{
  z-index: 10;
}

.scr:hover {
  opacity: 0;
}

.cards img {
  height: 200px;
  width: 200px;
  border-radius: 16px;
}
h3 {
  margin: 10px;
  text-align: center;
}
p {
  text-align: justify;
  margin-top: 5px;
}
.form-card h3 {
  margin: 0px;
}
.form-card label {
  float: left;
}
.form-field input {
  outline: none;
  border: 2px solid black;
  border-radius: 16px;
  width: 43%;
}
.form-field {
  clear: both;
  text-align: right;
  line-height: 50px;
}

.name input {
  clear: both;
  margin: 10px;
  padding: 8px 72px;
}
.name {
  margin-top: 20px;
}
.email input {
  clear: both;
  margin: 10px;
  padding: 8px 72px;
}
.msg input {
  clear: both;
  margin: 10px;
  padding: 8px 72px;
}

.form-field input:focus,
.form-field input:hover {
  border-color: rgb(194, 17, 126);
}
.form-card {
  height: 500px;
  width: 500px;
  border: 1px solid rgba(81, 50, 83, 0.63);
  border-radius: 16px;
  padding: 16px 16px;
  margin: auto;
  background-color: rgba(240, 174, 231, 0.377);
  box-shadow: rgb(133, 133, 133) 20px 10px 40px;
}

.submit-btn input {
  height: 30px;
  width: 200px;
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 24px;
}

.submit-btn input:hover {
  border-color: rgb(194, 17, 126);
  background-color: rgba(240, 174, 231, 0.623);
  transform: scale(1.15);
}
</style>
 
