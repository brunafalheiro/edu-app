<template>
  <div class="full-width full-height pt-48 pr-48 pb-48 pl-48">
    <div class="controls">
      <div class="flex mb-36">
        <input type="number" placeholder="Valor da raiz" v-model="rootValue" />
        <EduButton title="Criar Árvore" :onclick="setTree" />
      </div>

      <div class="flex mb-36">
        <input type="number" placeholder="Valor do nó a inserir" v-model="nodeValue" />
        <EduButton title="Adicionar Nó" :onclick="insertNode" />
      </div>

      <div class="flex mb-36">
        <input type="number" placeholder="Nó a ser buscado" v-model="nodeToBeSearched" />
        <EduButton title="Buscar nó" :onclick="searchNode" />
      </div>
      
      <div class="flex mb-36">
        <input type="number" placeholder="Quantidade de nós" v-model="nodeAmount" />
        <EduButton title="Gerar árvore aleatória" :onclick="generateRandomTree" />
      </div>
      
      <EduButton title="Limpar" :onclick="clearTree" />
    </div>

    <div class="tree-container">
      <div class="tree">
        <TreeComponent  v-if="tree" :tree="tree" />
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
  let nodeToBeSearched = ref(null);
  let nodeAmount = ref(null);

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

  const searchNode = async () => {
    if (!tree.value) {
      console.log('Árvore não criada');
      return;
    }

    const searchedNode = await TreeFunctions.searchNode(tree.value, nodeToBeSearched.value);
    console.log(searchedNode);
  };

  const generateRandomTree = () => {
    tree.value = TreeFunctions.generateRandomTree(nodeAmount.value);
  };

  const clearTree = () => {
    tree.value = null;
    nodeValue.value = null;
    rootValue.value = null;
    nodeToBeSearched.value = null;
    nodeAmount.value = null;
  };
</script>
