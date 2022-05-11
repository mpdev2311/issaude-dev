import ProviderService from "../../../core/services/providers/providers-service"
import { Provider } from "../../../core/domain/providers/provider-model"
import router from "../../../router";

export default {
    state: () => ({
        providers: [],
        provider: {
            id:0,
            ativo:true,
            cnpj:"",
            id_corp:0,
            nome:"",
            endereco:"",
            cep:"",
            prazo_entrega:0,
            contato:"",
            tel: "",
            id_user:0,
            cidade:"",
            bairro:"",
            data_gravacao:"",
            pagamento_em:0,
            prazo_faturar:0,
            prazo_revisao:0,
            registro_convenio:"",
            id_empresa:0,
            imagem:"",
            particular:false,
            versao_tiss:0,
            tamanho_matricula:0,
            registro_ans:"",
            fonte_pagadora:"",
            id_tipo_prestador:0,
            idantigo:2,
            rg:"",
            crm:"",
            uf:"",
            celular:"",
            imposto_hm:0,
            produtividade:0,
            primeira_especialidade:0,
            conselho:"",
            do_corpo_clinico:false,
            encaminhador:false,
            socio:true,
            data_nasc:"",
            desconto:0,
            e_mail:"",
            nao_atende:false,
            cofins:0,
            iss:0,
            ir:0,
            cll:0,
            apelido:"",
            cpf:"",
            cargo:"",
            salario:0,
            id_setor:0,
            tel_residencial:"",
            tel_outro:"",
            sexo:"",
            responsavel:"",
            data_admissao:"",
            cpts:"",
            livro_registro:"",
            ramal:"",
            data_demissao:"",
            obs:"",
            cf_df:"",
            banco:"",
            id_cargo:0,
            ncasa:0,
            proibir_fin:false,
            hablimit:false,
            senha:"",
            id_carga_horaria:0,
            tipo_retorno_consulta:0,
            n_pis:"",
            exige_cid:false,
            cid_consulta:"",
            obs_consulta:"",
            cns:"",
            cnes:"",
            quant_consulta:0,
            cod_ibge:"",
            agencia:"",
            conta:"",
            segunda_especialidade:0, 
            terceira_especialidade:0,
            icms:0, 
            ipi:0,
            outras_taxas:0,
            pis: 0,
            sus:false,
            inscricao:0,
            tipo_de_contruinte:"",
            tipo_contribuinte: "",
            p_autorizar: 0,
            uf_crm: "",
            foto: "",
            livro_ctps: "",
            id_civil: 0,
            data_entrada_brasil: "",
            data_documento: "",
            nacionalidade:"",
            pais_origem: "",
            serie_ctps: "",
            emissao_ctps: "",
            emissao_certidao: "",
            titulo_eleitor:"" ,
            zona_titulo_eleitor: "",
            secao_titulo_eleitor: "",
            nome_pai: "",
            uf_ctps:"",
            complemento_documento: "",
            orgao_documento: "",
            tipo_endereco: "",
            uf_documento:"",
            id_escolaridade: 0,
            tipo_certidao: "",
            naturalidade: "",
            naturalidade_uf: "",
            id_raca:0,
            cbo: "",
            escola: false,
            nome_cartorio: "",
            numero_livro_registro: "",
            numero_folha_registro: "",
            numero_termo_registro: "",
            nome_mae: "",
            numero_cartorio: "",
            id_cbo: 0,
            identificar_executante: false,
            id_banco: 0,
            complemento_end: "",
            uf_estados: "",
            rqe:"",
            observacao_funcionario:"",
            repetir_guia: false,
            repetir_senha: false,
            elegibilidade: "",
            id_idioma: 0,
            id_publico: 0,
            id_abordagem: 0
        },        
        professionalPerformer: [],
        professionalRequesting: [],
        professionalAuthorizing: [],
    }),

    getters: {
        providers : (state) => state.providers,
        provider : (state) => state.provider,        
        professionalPerformer: (state) => state.professionalPerformer,
        professionalRequesting: (state) => state.professionalRequesting,
        professionalAuthorizing: (state) => state.professionalAuthorizing,
    }, 

    mutations: {
        PROVIDER_STORE_LOAD : (state, payload) => state.providers = payload,
        PROVIDER_STORE_LOAD_BY_ID : (state, payload) => state.provider = payload,
        PROFESSIONAL_PERFORMER_STORE_LOAD: (state, payload) => state.professionalPerformer = payload,
        PROFESSIONAL_REQUESTING_STORE_LOAD: (state, payload) => state.professionalRequesting = payload,
        PROFESSIONAL_AUTHORIZING_STORE_LOAD: (state, payload) => state.professionalAuthorizing = payload,
    },

    actions :{
        
        PROVIDER_STORE_LOAD : async ({ commit }) => {
            await commit('PROVIDER_STORE_LOAD', await ProviderService.getAll())
        },

        PROFESSIONAL_PERFORMER_STORE_LOAD : async ({ commit }) => {
            await commit('PROFESSIONAL_PERFORMER_STORE_LOAD', await ProviderService.getProfessionalPerformer())
        },
        PROFESSIONAL_REQUESTING_STORE_LOAD : async ({ commit }) => {
            await commit('PROFESSIONAL_REQUESTING_STORE_LOAD', await ProviderService.getProfessionalRequest())
        },
        PROFESSIONAL_AUTHORIZING_STORE_LOAD : async ({ commit }) => {
            await commit('PROFESSIONAL_AUTHORIZING_STORE_LOAD', await ProviderService.getProfessionalAuthorizing())
        },
 
        PROVIDER_STORE_SET_BLANK : async ({ commit }, provider : Provider) =>{
            await commit('PROVIDER_STORE_LOAD_BY_ID', provider)
        },

        PROVIDER_STORE_LOAD_BY_ID : async ({ commit }, id : number) => {
            const { data } = await ProviderService.getById(id);
            console.log(data)
            await commit('PROVIDER_STORE_LOAD_BY_ID', data)
        },

        PROVIDER_STORE_DELETE_BY_ID : async ({ commit, dispatch }, id : number) => {
            await ProviderService.deleteById(id)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        await dispatch('PROVIDER_STORE_LOAD')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Protocolo removido com sucesso!')
                    }
                })

        },

        PROVIDER_STORE_SAVE : async ({ getters, dispatch }) => {
            
            console.log(getters.provider)

            if(getters.provider.id > 0)
                await ProviderService.update(getters.provider)
                    .then(async (response)=>{
                        if(response.status === 200 || response.status === 201){
                            await dispatch('PROVIDER_STORE_LOAD_BY_ID', getters.provider.id)
                            router.push('/PROVIDERs')
                            await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Protocolo salvo com sucesso!')
                        }
                    })
            else
                await ProviderService.create(getters.provider)
                .then(async (response)=>{
                    if(response.status === 200 || response.status === 201){
                        router.push('/PROVIDERs')
                        await dispatch('MESSAGE_STORE_SUCCESS_PUSH', 'Protocolo salvo com sucesso!')
                    }
                })
        }
    }
}