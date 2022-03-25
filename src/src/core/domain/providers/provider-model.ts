export interface Providers {
	content: Content[];
	totalPages: number;
	size: number;
	last: boolean;
	totalElements: number;
}
export interface PlanAgreement {
}

export interface Specialtie {
	id: number;
	nome_especialidade: string;
	codigo: string;
	codigo2: string;
	codigo_3: string;
	ativo: boolean;
	id_user: number;
	id_corp: number;
}

export interface Specialtie2 {
}

export interface Specialtie3 {
}

export interface Content {
	id: number;
	nome: string;
	planAgreement: PlanAgreement;
	specialtie: Specialtie;
	specialtie2: Specialtie2;
	specialtie3: Specialtie3;
}

export class Provider {
    
    id:number
	ativo:boolean
	cnpj:string
	id_corp:number
	nome:string //2
	endereco:string
	cep:string
	prazo_entrega:number
	contato:string
	tel: string
	id_user:number
	cidade:string
	bairro:string
	data_gravacao:string
	pagamento_em:number
	prazo_faturar:number
	prazo_revisao:number
	registro_convenio:string
	id_empresa:number
	imagem:string
	particular:boolean
	versao_tiss:number
	tamanho_matricula:number
	registro_ans:string ///1
	fonte_pagadora:string
	id_tipo_prestador:number
	idantigo:number
	rg:string
	crm:string
	uf:string
	celular:string
	imposto_hm:number
	produtividade:number
	primeira_especialidade:number
	conselho:string
	do_corpo_clinico:boolean
	encaminhador:boolean
	socio:boolean
	data_nasc:string  //2
	desconto:number
	e_mail:string
	nao_atende:boolean
	cofins:number
	iss:number
	ir:number
	cll:number
	apelido:string
	cpf:string
	cargo:string
	salario:number
	id_setor:number
	tel_residencial:string
	tel_outro:string
	sexo:string
	responsavel:string
	data_admissao:string
	cpts:string
	livro_registro:string
	ramal:string
	data_demissao:string
	obs:string
	cf_df: string
	banco:string
	id_cargo:number
	ncasa:string
	proibir_fin:boolean
	hablimit:boolean
	senha:string
	id_carga_horaria:number
	tipo_retorno_consulta:number
	n_pis:string
	exige_cid:boolean
	cid_consulta:string
	obs_consulta:string
	cns:string
	cnes:string
	quant_consulta:number
	cod_ibge:string
	agencia:string
	conta:string
	segunda_especialidade:number
	terceira_especialidade:number
	icms:number
	ipi:number
	outras_taxas:number
	pis: number
	sus:boolean
	inscricao:string
	tipo_de_contruinte:string
	tipo_contribuinte: string
	p_autorizar:number
	uf_crm:string
	foto: string
	livro_ctps: string
	id_civil:number
	data_entrada_brasil: string
	data_documento: string
	nacionalidade: string
	pais_origem: string
	serie_ctps: string
	emissao_ctps: string
	emissao_certidao: string
	titulo_eleitor:string
	zona_titulo_eleitor: string
	secao_titulo_eleitor: string
	nome_pai: string
	uf_ctps: string
	complemento_documento: string
	orgao_documento: string
	tipo_endereco: string
	uf_documento: string
	id_escolaridade: number
	tipo_certidao: string
	naturalidade: string
	naturalidade_uf: string
	id_raca:number
	cbo: string
	escola: boolean
	nome_cartorio: string
	numero_livro_registro: string
	numero_folha_registro: string
	numero_termo_registro: string
	nome_mae: string
	numero_cartorio: string
	id_cbo: number
	identificar_executante: boolean
	id_banco: number
	complemento_end:string
	uf_estados:string
	rqe: string
	observacao_funcionario:string
	repetir_guia: boolean
	repetir_senha: boolean
	elegibilidade: string
	id_idioma: string
	id_publico: string
	id_abordagem: string

}

