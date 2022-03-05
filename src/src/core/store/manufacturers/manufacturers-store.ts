import ManufacturersService from "../../services/manufacturers/manufacturers-service"
import { Manufacturer } from "../../domain/manufacturers/manufacturers-model";
import router from "../../../router";

export default {
    state: () => ({
        manufacturers: [],
        manufacturer: {
            id:0,
            ativo:true,
            cnpj:'',
            id_corp:0,
            nome:'',
            endereco:'',
            cep:'',
            prazo_entrega:0,
            contato:'',
            tel: '',
            id_user:0,
            cidade:'',
            bairro:'',
            data_gravacao:'',
            pagamento_em:0,
            prazo_faturar:0,
            prazo_revisao:0,
            registro_convenio:'',
            id_empresa:0,
            imagem:'',
            particular:false,
            versao_tiss:0,
            tamanho_matricula:0,
            registro_ans:'',
            fonte_pagadora:'',
            id_tipo_prestador:6,
            idantigo:0,
            rg:'',
            crm:'',
            uf:'',
            celular:'',
            imposto_hm:0,
            produtividade:0,
            primeira_especialidade:0,
            conselho:'',
            do_corpo_clinico:false,
            encaminhador:false,
            socio:false,
            data_nasc:'',
            desconto:0,
            e_mail:'',
            nao_atende:false,
            cofins:0,
            iss:0,
            ir:0,
            cll:0,
            apelido:'',
            cpf:'',
            cargo:'',
            salario:0,
            id_setor:0,
            tel_residencial:'',
            tel_outro:'',
            sexo:'',
            responsavel:'',
            data_admissao:'',
            cpts:'',
            livro_registro:'',
            ramal:'',
            data_demissao:'',
            obs:'',
            cf_df: '',
            banco:'',
            id_cargo:0,
            ncasa:'',
            proibir_fin:false,
            hablimit:false,
            senha:'',
            id_carga_horaria:0,
            tipo_retorno_consulta:0,
            n_pis:'',
            exige_cid:false,
            cid_consulta:'',
            obs_consulta:'',
            cns:'',
            cnes:'',
            quant_consulta:0,
            cod_ibge:'',
            agencia:'',
            conta:'',
            segunda_especialidade:0,
            terceira_especialidade:0,
            icms:0,
            ipi:0,
            outras_taxas:0,
            pis: 0,
            sus:false,
            inscricao:'',
            tipo_de_contruinte:'',
            tipo_contribuinte: '',
            p_autorizar:0,
            uf_crm:'',
            foto: '',
            livro_ctps: '',
            id_civil:0,
            data_entrada_brasil: '',
            data_documento: '',
            nacionalidade: '',
            pais_origem: '',
            serie_ctps: '',
            emissao_ctps: '',
            emissao_certidao: '',
            titulo_eleitor:'',
            zona_titulo_eleitor: '',
            secao_titulo_eleitor: '',
            nome_pai: '',
            uf_ctps: '',
            complemento_documento: '',
            orgao_documento: '',
            tipo_endereco: '',
            uf_documento: '',
            id_escolaridade: 0,
            tipo_certidao: '',
            naturalidade: '',
            naturalidade_uf: '',
            id_raca:0,
            cbo: '',
            escola: false,
            nome_cartorio: '',
            numero_livro_registro: '',
            numero_folha_registro: '',
            numero_termo_registro: '',
            nome_mae: '',
            numero_cartorio: '',
            id_cbo: 0,
            identificar_executante: false,
            id_banco: 0,
            complemento_end:'',
            uf_estados:'',
            rqe: '',
            observacao_funcionario:'',
            repetir_guia: false,
            repetir_senha: false,
            elegibilidade: '',
            id_idioma: '',
            id_publico: '',
            id_abordagem: '',      
        },
    
    }),

    getters: {
        manufacturers : (state) => state.manufacturers,
        manufacturer : (state) => state.manufacturer
    }, 

    mutations: {
        MANUFACTURERS_STORE_LOAD : (state, payload) => state.manufacturers = payload,
        MANUFACTURERS_STORE_LOAD_BY_ID : (state, payload) => state.manufacturer = payload
    },

    actions :{        
        
        
        MANUFACTURERS_STORE_LOAD : async ({ commit }) => {
            await commit('MANUFACTURERS_STORE_LOAD', await ManufacturersService.getAll())
        },

        MANUFACTURERS_STORE_SET_BLANK : async ({ commit }, manufacturer : Manufacturer) =>{
            
            await commit('MANUFACTURERS_STORE_LOAD_BY_ID', manufacturer)
        },

        MANUFACTURERS_PROFESSIONA_STORE_LOAD_GET : async ({ commit }, manufacturer : Manufacturer) => {  
            console.log(manufacturer)
            await commit('MANUFACTURERS_STORE_LOAD', manufacturer)
        },

        MANUFACTURERS_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await ManufacturersService.getById(id);
            //console.log(data)
            await commit('MANUFACTURERS_STORE_LOAD_BY_ID', data)
        },

        MANUFACTURERS_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await ManufacturersService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('MANUFACTURERS_STORE_LOAD')
                        router.push('/MANUFACTURERS')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Fabricantes removido sucesso!')
                    }
                })

        },

        MANUFACTURERS_STORE_SAVE : async ({ getters, dispatch }) => {
            
            console.log(getters.manufacturer)

            if(getters.manufacturer.id > 0)
                await ManufacturersService.update(getters.manufacturer)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('MANUFACTURERS_STORE_LOAD_BY_ID', getters.manufacturer.id)
                            router.push('/manufacturers')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de fabricantes salvo com sucesso!')
                        }
                    })
            else
                await ManufacturersService.create(getters.manufacturer)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/manufacturers')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Cadastro de fabricantes salvo com sucesso!')
                    }
                })
        }
    }
}