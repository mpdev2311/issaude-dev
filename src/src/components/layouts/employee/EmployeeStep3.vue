<template>
<div class="">
<form >
    <NotificationAlert/>
      <!-- INICIO MODAL APPROCH
        <ModalApproach />-->
    
      <!-- INICIO MODAL LANGUAGE
        <ModalLanguage />-->
  
      <!-- INICIO MODAL TARGET_AUDIENCE
        <ModalTargetAudience />-->

  <div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-1 flex-auto">
      <div class="pt-1">                        
        <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">

             <div class="sm:col-span-1">
                <label for="id_raca" class="block text-sm font-medium text-gray-700">
                Profissão
                </label>
                <div class="mt-2">
                    <select id="id_raca" name="id_raca" class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_raca">
                    <option v-bind:value="0">Selecione</option>                    
                </select>
                </div>
            </div>

            <!-- <div class="sm:col-span-2">
                <label for="id_abordagem" class="block text-sm font-medium text-gray-700">
                    Locado em<span class="text-red-700">*  </span>
                </label>
                <div class="mt-1">
                <span class="relative z-0 inline-flex shadow-sm rounded-md">
                    <select id="sexo" name="sexo" class="mt-1 block w-full xl:w-72 py-2 px-3 bg-gray-200 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_abordagem"                    >
                        <option v-bind:value="0">Selecione</option>
                        <option v-for="i in approaches" :key="i" :value="i.id" >{{i.descricao}}</option> 
                    
                    </select>
                    <button @click.prevent="onOpenModalApproach(employee.id_abordagem)" type="button" class=" mt-1 -ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        <PlusIconSolid class="h-5 w-5"/>
                    </button>
                </span>
                 </div>
            </div> -->

             <div class="sm:col-span-1">
                <label for="id_setor" class="block text-sm font-medium text-gray-700">
                Setor
                </label>
                <div class="mt-1">
                    <select id="id_setor" name="id_setor" class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_setor">
                    <option v-bind:value="0">Selecione</option>
                   
                </select>
                </div>
            </div>

             <!-- <div class="sm:col-span-2">
                <label for="id_abordagem" class="block text-sm font-medium text-gray-700">
                    Setor<span class="text-red-700">*  </span>
                </label>
                <div class="mt-0">
                <span class="relative z-0 inline-flex shadow-sm rounded-md">
                    <select id="id_setor" name="id_setor" class="mt-1 block w-full xl:w-72 py-2 px-3 bg-gray-200 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_setor"                    >
                        <option v-bind:value="0">Selecione</option>
                        <option v-for="i in languages" :key="i" :value="i.id" >{{i.descricao}}</option> 
                    
                    </select>
                    <button @click.prevent="onOpenModalLanguage(employee.id_setor)" type="button" class=" mt-1 -ml-px relative inline-flex items-center px-3 py-1 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        <PlusIconSolid class="h-5 w-5"/>
                    </button>
                </span>
                 </div>
            </div> -->
            <div class="sm:col-span-1">
                <label for="id_cargo" class="block text-sm font-medium text-gray-700">
                Cargo
                </label>
                <div class="mt-1">
                    <select id="id_cargo" name="id_cargo" class="mt-1 block w-full py-2 px-3 border bg-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="employee.id_cargo">
                    <option v-bind:value="0">Selecione</option>
                   
                </select>
                </div>
            </div>

            <!-- <div class="sm:col-span-2">
                <label for="id_cargo" class="block text-sm font-medium text-gray-700">
                    Cargo<span class="text-red-700">*  </span>
                </label>
                <div class="mt-0">
                    <span class="relative z-0 inline-flex shadow-sm rounded-md">
                        <select id="id_cargo" name="id_cargo" class="mt-1 block w-full xl:w-72 py-2 px-3 bg-gray-200 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        v-model="employee.id_cargo"                    >
                            <option v-bind:value="0">Selecione</option>
                            <option v-for="i in targetAudiences" :key="i" :value="i.id" >{{i.descricao}}</option> 
                        
                        </select>
                        <button @click.prevent="onOpenModalTargetAudience(employee.id_cargo)" type="button" class=" mt-1 -ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                            <PlusIconSolid class="h-5 w-5"/>
                        </button>
                    </span>
                </div>
            </div> -->

             <div class="sm:col-span-2">
                <label for="banco" class="block text-sm font-medium text-gray-700">
                Profissão<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                    <input type="text" name="banco" id="banco" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                            v-model="employee.banco">   
                </div>                        
             </div>

             <div class="sm:col-span-1">
                <label for="tipo_certidao" class="block text-sm font-medium text-gray-700">
                    CBO-R<span class="text-red-700">*</span>
                </label>
                <div class="mt-1">
                    <div class="mt-2">
                        <input type="text" name="cbo" id="cbo" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                          v-model="employee.cbo">   
                    </div>    
                </div>
            </div>

            <div class="sm:col-span-1">
                <label for="banco" class="block text-sm font-medium text-gray-700">
                Ramal<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                    <input type="text" name="banco" id="banco" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                            v-model="employee.ramal">   
                </div>                        
            </div>
             <div class="sm:col-span-1">
                <label for="banco" class="block text-sm font-medium text-gray-700">
                Data de Admissão<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                    <input type="date" pattern="\d{4}-\d{1,2}-\d{1,2}" name="banco" id="banco" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                            v-model="employee.data_admissao">   
                </div>                        
            </div>
            <div class="sm:col-span-1">
                <label for="banco" class="block text-sm font-medium text-gray-700">
                Salário R$<span class="text-red-700">*</span>
                </label>
                <div class="mt-2">
                    <input type="text" name="banco" id="banco" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                            v-model="employee.salario">   
                </div>                        
            </div>

          <!-- <div class="mt-1"></div> -->

        </div>
      </div>
    </div>
  </div>
      
<div class="py-1 flex-auto">
      <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Dados Bancários</h6>
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-2 flex-auto">
             <div class="pt-1">                        
                <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
    
                    
                    <div class="sm:col-span-1">
                        <label for="banco" class="block text-sm font-medium text-gray-700">
                        Banco<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-2">
                            <input type="text" name="banco" id="banco" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  v-model="employee.banco">   
                        </div>                        
                    </div>

                    <div class="sm:col-span-1">
                        <label for="agencia" class="block text-sm font-medium text-gray-700">
                            Agência<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="text" name="agencia" id="agencia" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  v-model="employee.agencia">
                        </div>
                    </div>

                    <div class="sm:col-span-1">
                        <label for="conta" class="block text-sm font-medium text-gray-700">
                        Conta<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="text" name="conta" id="conta" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  v-model="employee.conta">
                        </div>                        
                    </div>

                     <div class="sm:col-span-1">
                        <label for="conta" class="block text-sm font-medium text-gray-700">
                        Chave PIX<span class="text-red-700">*</span>
                        </label>
                        <div class="mt-1">
                            <input type="text" name="conta" id="conta" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                  >
                        </div>                        
                    </div>

                    <div class="sm:col-span-2">
                        <label for="obs" class="block text-sm font-medium text-gray-700">
                        Obs:
                        </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="1"  class="max-w-lg shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                            v-model="employee.obs"/>                               
                        </div>                       
                    </div>
                                          
                </div>
               
            </div>
        </div>   
    </div>
  </div>

<div class="py-1 flex-auto">
      <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Carteira de Trabalho</h6>
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-2 flex-auto">
             <div class="pt-1">                        
                <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">
    
                        
                        <div class="sm:col-span-1">
                            <label for="cpts" class="block text-sm font-medium text-gray-700">
                            Número<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-2">
                                <input type="text" name="cpts" id="cpts" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.cpts">   
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="uf_ctps" class="block text-sm font-medium text-gray-700">
                                Estado<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <select type="text" name="uf_ctps" id="uf_ctps" autocomplete="uf_ctps" class="mt-1 block bg-gray-200 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    v-model="employee.uf_ctps" >
                                    <option value=""></option> 
                                    <option v-bind:value="'AC'">Acre</option>
                                    <option v-bind:value="'AL'">Alagoas</option>
                                    <option v-bind:value="'AP'">Amapá</option>
                                    <option v-bind:value="'AM'">Amazonas</option>
                                    <option v-bind:value="'BA'">Bahia</option>
                                    <option v-bind:value="'CE'">Ceará</option>
                                    <option v-bind:value="'DF'">Distrito Federal</option>
                                    <option v-bind:value="'ES'">Espírito Santo</option>
                                    <option v-bind:value="'GO'">Goiás</option>
                                    <option v-bind:value="'MA'">Maranhão</option>
                                    <option v-bind:value="'MT'">Mato Grosso</option>
                                    <option v-bind:value="'MS'">Mato Grosso do Sul</option>
                                    <option v-bind:value="'MG'">Minas Gerais</option>
                                    <option v-bind:value="'PA'">Pará</option>
                                    <option v-bind:value="'PB'">Paraíba</option>
                                    <option v-bind:value="'PR'">Paraná</option>
                                    <option v-bind:value="'PE'">Pernambuco</option>
                                    <option v-bind:value="'PI'">Piauí</option>
                                    <option v-bind:value="'RJ'">Rio de Janeiro</option>
                                    <option v-bind:value="'RN'">Rio Grande do Norte</option>
                                    <option v-bind:value="'RS'">Rio Grande do Sul</option>
                                    <option v-bind:value="'RO'">Rondônia</option>
                                    <option v-bind:value="'RR'">Roraima</option>
                                    <option v-bind:value="'SC'">Santa Catarina</option>
                                    <option v-bind:value="'SP'">São Paulo</option>
                                    <option v-bind:value="'SE'">Sergipe</option>
                                    <option v-bind:value="'TO'">Tocantins</option>
                                </select>
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="serie_ctps" class="block text-sm font-medium text-gray-700">
                            Série<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name="serie_ctps" id="serie_ctps" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.serie_ctps">
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="data_admissao" class="block text-sm font-medium text-gray-700">
                            Data de Emissão<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="date" name="data_admissao" id="data_admissao" pattern="\d{4}-\d{1,2}-\d{1,2}" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.data_admissao">
                            </div>                        
                        </div>

                        <div class="sm:col-span-2">
                            <label for="n_pis" class="block text-sm font-medium text-gray-700">
                            Número do PIS<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="n_pis" id="n_pis" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="employee.n_pis" >
                            </div>                        
                        </div>
                    </div>
                                          
                </div>
            </div>
        </div>   
    </div>

<div class="py-1 flex-auto">
      <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Certidão</h6>
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-2 flex-auto">
        <div class="pt-1">                        
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">    
                    
                     <div class="sm:col-span-1">
                            <label for="nome_cartorio" class="block text-sm font-medium text-gray-700">
                            Nome do Cartório
                            </label>
                            <div class="mt-1">
                                <input type="text" name="nome_cartorio" id="nome_cartorio" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.nome_cartorio">   
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="tipo_certidao" class="block text-sm font-medium text-gray-700">
                                Tipo de Certidão<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                 <select type="text" name="tipo_certidao" id="tipo_certidao" autocomplete="tipo_certidao" class="mt-1 bg-gray-200 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                     v-model="employee.tipo_certidao" >
                                    <option value=""></option> 
                                    <option v-bind:value="'Certidão de Nascimento'">Certidão de Nascimento</option>
                                    <option v-bind:value="'Certidão de Casamento'">Certidão de Casamento</option>
                                </select>
                            </div>
                        </div>

                         <div class="sm:col-span-1">
                            <label for="emissao_certidao" class="block text-sm font-medium text-gray-700">
                                Data de Emissão<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                 <input type="date" name="emissao_certidao" pattern="\d{4}-\d{1,2}-\d{1,2}" id="emissao_certidao" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.emissao_certidao">                               
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="numero_livro_registro" class="block text-sm font-medium text-gray-700">
                            Número do livro<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name="numero_livro_registro" id="numero_livro_registro" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.numero_livro_registro">
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="numero_folha_registro" class="block text-sm font-medium text-gray-700">
                             Número da Folha<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name="numero_folha_registro" id="numero_folha_registro" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.numero_folha_registro">
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for="numero_termo_registro" class="block text-sm font-medium text-gray-700">
                            Número do Termo<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input  type="text" name="numero_termo_registro" id="numero_termo_registro" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md" 
                                v-model="employee.numero_termo_registro" >
                            </div>                        
                        </div>
                    
              </div>                      
          </div>
      </div>
  </div>   
</div>

<div class="py-1 flex-auto">
      <!-- <h6 class="px-1 py-2 text-gray-700 text-lg font-semibold flex-auto">Outros</h6> -->
	<div class="bg-white overflow-hidden shadow rounded-lg">
		<div class="px-4 py-2 flex-auto">
        <div class="pt-1">                        
            <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 space-y-1">    
                    
                       <div class="sm:col-span-2">
                            <label for="cns" class="block text-sm font-medium text-gray-700">
                            Cartão Nacional de Saúde (CNS)<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-2">
                                <input type="text" name="cns" id="cns" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.cns">   
                            </div>                        
                        </div>

                        <div class="sm:col-span-2">
                            <label for="titulo_eleitor" class="block text-sm font-medium text-gray-700">
                                Nº do título de eleitor<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name="titulo_eleitor" id="titulo_eleitor" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.titulo_eleitor">   
                            </div> 
                        </div>

                        <div class="sm:col-span-1">
                            <label for="zona_titulo_eleitor" class="block text-sm font-medium text-gray-700">
                            Zona<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name="zona_titulo_eleitor" id="zona_titulo_eleitor" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.zona_titulo_eleitor">
                            </div>                        
                        </div>

                        <div class="sm:col-span-1">
                            <label for=" secao_titulo_eleitor" class="block text-sm font-medium text-gray-700">
                           Seção<span class="text-red-700">*</span>
                            </label>
                            <div class="mt-1">
                                <input type="text" name=" secao_titulo_eleitor" id=" secao_titulo_eleitor" autocomplete="given-name" class="shadow-sm bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-200 rounded-md"
                                     v-model="employee.secao_titulo_eleitor">
                            </div>                        
                        </div> 
                    
            </div>                      
          </div>
        </div>
      </div>   
    </div>
  </form> 
 </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {mapGetters, mapState, useStore, mapMutations } from 'vuex';
import { key, store } from "../../../../src/core/store/store";
import NotificationAlert from '../../../components/alerts/NotificationAlert.vue';
import { useRouter } from "vue-router";
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
export default defineComponent({
    props: [],
    components: { 
        NotificationAlert,
        PlusIconSolid
    },
        methods: {
         ...mapMutations([
          'employee',
          'languages',          
          'targetAudiences', 
          'approaches'
         ]),
      },
    computed:{
      ...mapState([
        'employee',
        'languages',
        'targetAudiences', 
        'approaches'
        ]),
      ...mapGetters([
        'employee',
        'languages',
        'targetAudiences', 
        'approaches'
      ]),
    },
  beforeCreate : function() {
    this.store = useStore(key)
  },
  setup(props) {
    const router = useRouter();
  
    onMounted(async () => {  
    });
    const onOpenModalApproach = async (id: number) => {
        window.open("/approaches/"+id, "_blank", "width=500,height=500, top=100, left=500");
     }
  
      const onOpenModalLanguage = async (id: number) => {
            window.open("/languages/"+id, "_blank", "width=500,height=500, top=100, left=500");
          //await store.dispatch('MODAL_LANGUAGE_OPEN', true);
     }
      const onOpenModalTargetAudience = async (id: number) => {
            window.open("/target-audience/"+id, "_blank", "width=500,height=500, top=100, left=500");
          //await store.dispatch('MODAL_TARGET_AUDIENCE_OPEN', true);
     }
  
    
    return {
     onOpenModalApproach,
     onOpenModalLanguage,
     onOpenModalTargetAudience
    };
  },
 
});
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>