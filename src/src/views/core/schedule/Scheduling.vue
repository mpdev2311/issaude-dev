<template>
<div>
    

    <!-- FIM DO MODAL -->
    <div
      :class="`modal ${
        !modalIsOpen && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div
        class="
          modal-container
          bg-white
          w-11/12
          md:max-w-md
          mx-auto
          rounded
          shadow-lg
          z-50
          overflow-y-auto
        "
      >
        <div
          class="
            modal-close
            absolute
            top-0
            right-0
            cursor-pointer
            flex flex-col
            items-center
            mt-4
            mr-4
            text-white text-sm
            z-50
          "
        >
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6 hover:bg-gray-200">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Dados do paciente</p>
            <div class="modal-close cursor-pointer z-50" @click="onCloseModal()">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!--Body-->



                        <div class="mt-6 grid grid-cols-12 gap-6">
                
                <div class="col-span-12 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Data de nascimento</label>
                  <input type="date" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Sexo</label>
                  <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option>Masculino</option>
                      <option selected>Feminino</option>
                      <option>Outros</option>
                  </select>
                </div>

                

                
              </div>


                        <div class="mt-6 grid grid-cols-12 gap-6">

                <div class="col-span-12 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Telefone comercial</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Telefone celular</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                </div>

                

                
              </div>

              <div class="mt-6 grid grid-cols-12 gap-6">
                
                <div class="col-span-12 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">CPF</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">RG</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                </div>

                

                
              </div>

              <div class="mt-6 grid grid-cols-12 gap-6">
                
                <div class="col-span-12 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Sobrenome</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                </div>

                

                
              </div>

          <!--Footer-->
          <div class="flex justify-end pt-3">
            <button
              @click="onCloseModal()"
              type="button"
              class="
                space-x-4
                inline-flex
                justify-center
                px-2
                py-3
                border border-transparent
                shadow-xs
                text-sm
                font-medium
                rounded-md
                text-white
                bg-green-600
                hover:bg-green-600
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                mx-2
              "
            >
              Salvar
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- FIM DO MODAL -->

    
<div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">


<!-- This example requires Tailwind CSS v2.0+ -->
<div>
  <h3 class="text-lg leading-6 font-medium text-gray-900">
    Agendamentos
  </h3>

  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-indigo-500 rounded-md p-3">
          <!-- Heroicon name: outline/users -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate">Total de agendamentos</p>
      </dt>
      <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">
          71,897
        </p>
        <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
          <!-- Heroicon name: solid/arrow-sm-up -->
          <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">
            Increased by
          </span>
          122
        </p>
        <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all<span class="sr-only"> Total Subscribers stats</span></a>
          </div>
        </div>
      </dd>
    </div>

    <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-indigo-500 rounded-md p-3">
          <!-- Heroicon name: outline/mail-open -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
          </svg>
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate">Pendenetes de Triagem</p>
      </dt>
      <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">
          58.16%
        </p>
        <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
          <!-- Heroicon name: solid/arrow-sm-up -->
          <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">
            Increased by
          </span>
          5.4%
        </p>
        <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all<span class="sr-only"> Avg. Open Rate stats</span></a>
          </div>
        </div>
      </dd>
    </div>

    <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-indigo-500 rounded-md p-3">
          <!-- Heroicon name: outline/cursor-click -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate">Pendenete de fechamento</p>
      </dt>
      <dd class="ml-16 pb-4 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">
          24.57%
        </p>
        <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
          <!-- Heroicon name: solid/arrow-sm-down -->
          <svg class="self-center flex-shrink-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">
            Decreased by
          </span>
          3.2%
        </p>
<div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all<span class="sr-only"> Avg. Open Rate stats</span></a>
          </div>
        </div>
      </dd>
    </div>

        <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-indigo-500 rounded-md p-3">
          <!-- Heroicon name: outline/cursor-click -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
        <p class="ml-16 text-sm font-medium text-gray-500 truncate">Pendenete de atendimento</p>
      </dt>
      <dd class="ml-16 pb-4 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">
          24.57%
        </p>
        <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
          <!-- Heroicon name: solid/arrow-sm-down -->
          <svg class="self-center flex-shrink-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">
            Decreased by
          </span>
          3.2%
        </p>
<div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all<span class="sr-only"> Avg. Open Rate stats</span></a>
          </div>
        </div>
      </dd>
    </div>
  </dl>
</div>



<form action="#" method="POST">
    <div class="shadow sm:rounded-md sm:overflow-hidden">
    <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
        <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Filtros</h3>
        </div>
        

        <div class="grid grid-cols-10 gap-6">


        <div class="col-span-12 sm:col-span-3">  

          <div class="grid grid-cols-2 gap-6">

          <div class="col-span-6 sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-gray-700">Local de atendimento</label>
              
              <select id="select-local-atendimento" name="local" autocomplete="local" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                <option value="">Selecionar</option>
                <option v-for="i in localAccess" :key="i" :value="i.id"  >{{i.localAttendance.local}}</option> 
              </select>
              
        
          </div>

          <div class="col-span-6 sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-gray-700">Localizar paciente</label>
              <input type="text" value="jose"  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

            </div>

          </div>





        <div class="col-span-12 sm:col-span-3">
  
        <div class="grid grid-cols-2 gap-6">

        <div class="col-span-6 sm:col-span-3">
          


            <label for="last-name" class="block text-sm font-medium text-gray-700">Status atendimento</label>
            
            
            <select id="select-status-atendimento" name="local" autocomplete="local" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                <option value="">Selecionar</option>
                <option v-for="i in schedulingStatus" :key="i" :value="i.id"  >{{i.nome}}</option> 
              </select>
            
          
        </div>

        <div class="col-span-6 sm:col-span-3">

        <label for="last-name" class="block text-sm font-medium text-gray-700">Status do leito</label>
        <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Em manutenção</option>
                <option selected>Em funcionamento</option>
                <option>Ocupado</option>
            </select>
        </div>
 </div>
        </div>


        <div class="col-span-12 sm:col-span-4">
                      <table class="w-full">
                    <thead>
                        <tr>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pt-6">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td class="pt-6">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td class="pt-6">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                                </div>
                            </td>
                            <td class="pt-6">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
                                </div>
                            </td>
                            <td class="pt-6">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">3</p>
                                </div>
                            </td>
                            <td class="pt-6">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">4</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">5</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">6</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">7</p>
                                </div>
                            </td>
                            <td>
                                <div class="w-full h-full">
                                    <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                        <a tabindex="0" role="link"
                                            class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-500 hover:bg-green-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full">
                                            8</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <a tabindex="0" role="link"
                                            class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-500 hover:bg-green-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full">
                                            9</a>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <a tabindex="0" role="link"
                                            class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-500 hover:bg-green-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full">
                                            10</a>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <a tabindex="0" role="link"
                                            class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-500 hover:bg-green-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full">
                                            11</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">12</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">13</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">16</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">17</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">18</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">19</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">20</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">23</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">24</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">25</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">26</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">27</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>


        
        
        </div>


    

    </div>

    </div>
</form>


</div>


<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="h-screen flex overflow-hidden py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 bg-white">
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

    <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
    <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
      <!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="absolute top-0 right-0 -mr-12 pt-2">
        <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Close sidebar</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
        <div class="flex-shrink-0 flex items-center px-4">
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg" alt="Workflow"> -->
        </div>
        <nav aria-label="Sidebar" class="mt-5">
          <div class="px-2 space-y-1">
            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
            <a href="#" class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <!--
                Heroicon name: outline/home

                Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
              -->
              <svg class="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </a>

            <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <!-- Heroicon name: outline/calendar -->
              <svg class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Calendar
            </a>

            <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <!-- Heroicon name: outline/user-group -->
              <svg class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Teams
            </a>

            <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <!-- Heroicon name: outline/search-circle -->
              <svg class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Directory
            </a>

            <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <!-- Heroicon name: outline/speakerphone -->
              <svg class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              Announcements
            </a>

            <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <!-- Heroicon name: outline/map -->
              <svg class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Office Map
            </a>
          </div>
        </nav>
      </div>
      <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
        <a href="#" class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
            </div>
            <div class="ml-3">
              <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                Whitney Francis
              </p>
              <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="flex-shrink-0 w-14" aria-hidden="true">
      <!-- Force sidebar to shrink to fit close icon -->
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
  

        <ul class="w-full">
          <li v-for="i in menus" v-bind="i" :key="i">
              <button @click="onSelect(i)" type="button" class="w-full">
                <div :class='i.selected ? "bg-gray-800 px-2 py-0 sm:px-6" : "bg-gray px-2 py-0 sm:px-6 hover:bg-gray-800 text-black hover:text-white"'>
                <div class="flex space-x-4 py-10">
                  <div class="flex-shrink-0">
                  <span class="inline-block relative">
                    <div class="h-5 w-10 rounded-full"> </div>
                  </span>
                  </div>
                  <div class="min-w-1 flex-2">
                    <div :class='i.selected ? "text-white text-md font-medium h-2" : " text-md font-medium h-2"'>
                     <h1> {{i.nome}} </h1>
                    </div>
                  </div>
                </div>
              </div>
              </button> 
          <div v-if="i.selected">
           <div  v-for="o in i.items" v-bind="o" :key="o" class="bg-white px-4 py-5 sm:px-6 hover:bg-gray-200">
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                  <span class="inline-block relative">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
                  </span>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">{{o.nome}}</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#" class="hover:underline">Em trabalho</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0 self-center flex">
                    <div class="relative z-30 inline-block text-left">
                      <div>
                        <button type="button" class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
                          <span class="sr-only">Open options</span>
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              </div>

          </li>



</ul>

      </div>
    </div>
  </div>
  <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
    <div class="lg:hidden">
      <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
        <div>
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> -->
        </div>
        <div>
          <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex-1 relative z-0 flex overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">

        <!-- Start main area-->
        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-12">






                    
            <div>

   <div class="mt-4 flex flex-col sm:flex-row">
         <div class="flex">
            <div class="relative">
               <select class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>Mosrar 5 resultados</option>
                  <option>Mostrar 10 resultados</option>
                  <option>Mostrar 20 resultados</option>
               </select>
               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 px-40 text-gray-700"></div>
            </div>
            <div class="block relative mt-4 sm:mt-0">
               <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                     <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
               </span>
               <input @change="onFilter" placeholder="" v-model="search" class="appearance-none  border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none px-20">
            </div>
         </div>
         <button class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-20">
              <span class="flex justify-end px-4 py-0">  
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg> PDF
              </span>
         </button>
         <button class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-20 rounded-r">
              <span class="flex justify-end px-4 py-0">  
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg> Excel
              </span>
         </button>
      </div>
      <div class="mt-4">
      <div class="mt-6">
        <div class="bg-white shadow rounded-md overflow-hidden my-6">
          <table class="text-left w-full border-collapse">
             <thead class="bg-gray-50">
                        <tr>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hário
                        </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Paciente
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tipo de consulta
                        </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Plano
                        </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Início
                        </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mais detalhes
                        </th>
                        
                        </tr>
                    </thead>
            <tbody>
                        <tr v-for="i in schedulings" v-bind="i" :key="i" class="bg-gray-50">


                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{i.status.nome}}
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{i.inicio}}
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                           {{i.id_paciente}}
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{i.typeConsultation.nome}}
                        </td>


                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{i.id_plano}}
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                             {{i.inicio}}
                        </td>


                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button @click="onOpenModal()" class="space-x-4 text-sm inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4">
                           Detalhes <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </button>
                        </td>
                        
                        </tr>
            </tbody>
          </table>


            <div
               class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between "
               >
               <span class="text-xs xs:text-sm text-gray-900"></span>
               <div class="inline-flex mt-2 xs:mt-0">
                  <button
                  @click="true"
                   class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-l">
                  Anterior
                  </button>
                  <button
                    @click="true"
                     class="text-sm bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold py-2 px-4 rounded-r"
                     >
                  Proxima
                  </button>
               </div>
            </div>
              <div class="flex justify-end px-2 py-3 bg-gray-50 rounded-b-lg text-right sm:px-0 bg-gray-900">
              
                <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-3">
                  NOVO AGENDAMENTO
                <svg class="h-5 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                </button>
              </div>
        </div>
      </div>
    </div>
  </div>


            


        </div>
        <!-- End main area -->
      </main>

    </div>
  </div>
</div>

</div>
</template>
<script>
import { defineComponent, ref, onMounted, onBeforeUpdate, toRef } from 'vue'
import { mapGetters, mapState, useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { key, store } from '../../../core/store/store'
export default defineComponent({
  components: {
    
  },

  computed: {
    ...mapState(['localAccess','schedulingStatus', 'schedulings', 'menus']),
    ...mapGetters(['localAccess', 'schedulingStatus', 'schedulings', 'menus']),
  },

  beforeCreate: function () {
    this.store = useStore(key)
  },

  setup() {

    const modalIsOpen = ref(false)

    const router = useRouter()

    const onCloseModal = () => {
      modalIsOpen.value = !modalIsOpen.value
    }

    const onOpenModal = () => {
      modalIsOpen.value = !modalIsOpen.value
    }

    const onSelect = (i) => {
      store.dispatch('ON_SELECT_MENU', i)
      console.log(i)
    }

    onMounted(async () => {
      store.dispatch('LOAD_LOCAL_ACESS')
      store.dispatch('LOAD_SCHEDULING_STATUS')
      store.dispatch('LOAD_SCHEDULINGS')
      store.dispatch('LOAD_MENU')
    })

    return {
      modalIsOpen,
      onOpenModal,
      onCloseModal,
      onSelect
    }
  },
})
</script>