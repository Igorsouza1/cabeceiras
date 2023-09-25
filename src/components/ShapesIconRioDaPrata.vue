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
          <!-- Renderizar como checkbox se não tiver URL -->
          <template v-if="!item.url">
            <input type="checkbox" :name="item.name" :id="item.id" v-model="item.checked" @change="handleCheckboxChange(item.name, $event)">
            <label :for="item.id">{{ item.label }}</label>
          </template>
          <!-- Renderizar como link se tiver URL -->
          <template v-else>
            <a :href="item.url" target="_blank" class="sidebarLink">{{ item.label }}</a>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShapesIcon2",
    data() {
      return {
        showSidebar: false,
        map: null,
        currentCircleContent: {},
        circles: [
          {
            id: 1,
            icon: require('../assets/images/shape.png'),
            name: 'Shapes',
            content: {
              title: 'Shapes',
              items: [
                { id: 'SedesDasFazendas', name: 'SedesDasFazendas', label: 'Sedes das fazendas', checked:false },
                { id: 'RioDaPrata', name: 'RioDaPrata', label: 'Rio da prata' },
                { id: 'ReservaLegal', name: 'ReservaLegal', label: 'Reserva legal' },
                { id: 'Propriedades', name: 'Propriedades', label: 'Propriedades' },
                { id: 'PassivosAmbientais', name: 'PassivosAmbientais', label: 'Passivos ambientais (sem vegetação)' },
                { id: 'Nascentes', name: 'Nascentes', label: 'Nascentes' },
                { id: 'NascenteRioDaPrata', name: 'NascenteRioDaPrata', label: 'Nascente Rio da Prata' },
                { id: 'EstradasDeAcesso', name: 'EstradasDeAcesso', label: 'Estradas de acesso' },
                { id: 'BonitoEJardim', name: 'BonitoEJardim', label: 'Bonito e Jardim' },
                { id: 'Banhado', name: 'Banhado', label: 'Banhado' },
                { id: 'App50m', name: 'App50m', label: 'App 50m' },
                { id: 'AcessoNascentes', name: 'AcessoNascentes', label: 'Acesso nascentes' },
                { id: 'AcessoAsSedes', name: 'AcessoAsSedes', label: 'Acesso as sedes' },
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
      handleCheckboxChange(itemName, event) {
        if (event.target.checked) {
          this.$emit('itemChecked', itemName, event);
        } else {
          this.$emit('itemUnchecked', itemName, event);
        }
      }
    },
  };
  </script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 25%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  gap: 20px;
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
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 250px;
  background: #ffffff;
  transition: 0.3s;
  padding: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.checkShapes{
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  text-align: center;
}

.checkShapes input{
  margin-right: 5px;
  cursor: pointer;
}

.checkShapes label{
  cursor: pointer;
}

.sidebarLink {
  text-decoration: none;
  color: #006770;
  transition: 0.3s;
}

.sidebarLink:hover {
  text-decoration: underline;
}

</style>
