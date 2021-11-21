<template>
<div class="pers-card">
      <div class="img-wrapper">
        <img alt=" " src="../assets/mandara.jpg" class="mandara" />
        <img alt=" " src="../assets/naked_madara.jpg" class="naked_madara" />
      </div>

      <h3>Карточка обо мне :)</h3>
      <h4></h4>
      <p>Меня зовут Антон</p>
      <p>Учусь в МИРЭА, группа БСБО-05-19</p>
      <p>
        Мои скиллы опишу цитатой: "Я как боксёр на ринге, ничего не вдупляю, но
        готов ебашить"
      </p>
    </div>
</template>
<script>

export default {
  name: "infocard",
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
.mandara {
  z-index: 11;
}

.naked_madara {
  z-index: 10;
}
.mandara:hover {
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
h4 {
  margin-top: 70px;
}
p {
  text-align: justify;
  margin-top: 5px;
}
.pers-card {
  height: 500px;
  width: 500px;
  border: 1px solid rgba(81, 50, 83, 0.63);
  border-radius: 16px;
  padding: 16px 16px;
  margin: auto;
  background-color: rgba(240, 174, 231, 0.377);
  box-shadow: rgb(133, 133, 133) 20px 10px 40px;
}

</style>