<template>
  <div class="controls">
    <input type="number" placeholder="Valor da raiz" v-model="rootValue" />
    <EduButton title="Criar Árvore" :onclick="setTree" />
    <input type="number" placeholder="Valor do nó" v-model="nodeValue" />
    <EduButton title="Adicionar Nó" :onclick="insertNode" />
    <EduButton title="Limpar" :onclick="clearTree" />
    
  </div>

  <div class="vasco">
    <div class="container">
      <div class="row">
        <div class="tree">
          <TreeComponent  v-if="tree" :tree="tree" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { TreeFunctions } from './treeFunctions.js';
  import EduButton from '@/components/EduButton/EduButton.vue';
  import TreeComponent from './TreeComponent.vue';

  let tree = ref(null);
  let nodeValue = ref(null);
  let rootValue = ref(null);

  const setTree = () => {
    tree.value = TreeFunctions.createTree(rootValue.value);
  };

  const insertNode = () => {
    if (!tree.value) {
      console.log('Árvore não criada');
      return;
    }
    TreeFunctions.insertNode(tree.value, nodeValue.value);
  };

  const clearTree = () => {
    tree.value = null;
    nodeValue.value = null;
    rootValue.value = null;
  }
</script>
