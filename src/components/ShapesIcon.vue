<template>
  <div class="container">
    <!-- Renderizar cada círculo com base nos dados -->
    <div 
      v-for="circle in circles" 
      :key="circle.id" 
      class="iconCircle" 
      @click="toggleSidebar(circle)"
      @mousedown.prevent.stop
    >
      <img :src="circle.icon" :alt="circle.name">
    </div>

    <!-- Sidebar com conteúdo dinâmico -->
    <div v-if="showSidebar" class="sidebar" @mousedown.prevent.stop>
      <h3>{{ currentCircleContent.title }}</h3>
      <div v-for="item in currentCircleContent.items" :key="item.id" class="checkShapes">
        <input type="checkbox" :name="item.name" :id="item.id">
        <label :for="item.id">{{ item.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShapesIcon",
  data() {
    return {
      showSidebar: false,
      currentCircleContent: {},
      circles: [
        {
          id: 1,
          icon: require('../assets/images/shape.png'),
          name: 'Shape 1',
          content: {
            title: 'Shapes',
            items: [
              { id: 'shape1-item1', name: 'item1', label: 'Shape 1' },
              // ... outros itens
            ]
          }
        },
        // ... outros círculos
      ]
    };
  },
  methods: {
    toggleSidebar(circle) {
      this.showSidebar = !this.showSidebar;
      this.currentCircleContent = circle.content;
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 18%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 1000;
}

.iconCircle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #006770;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.iconCircle:hover {
  background-color: #003035;
}

.iconCircle img{
  width: 40px;
}

/* Estilos da sidebar */
.sidebar {
  position: absolute;
  top: 0;
  left: 65px; /* Ajuste conforme o tamanho do círculo */
  height: 80vh;
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 250px;
  background: #ffffff;
  transition: 0.3s;
  padding: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

</style>
